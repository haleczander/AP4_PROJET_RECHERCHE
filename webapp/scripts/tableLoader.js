fetch('/data/db.json')
  .then(response => response.json())
  .then(json => {
    const molecules = json.data.molecules;
    let currentSort = { column: null, order: null };
    let filteredData = [...molecules];

    const container = document.getElementById('molecule-table-container');
    const searchInput = document.getElementById('search-input');
    const table = document.createElement('table');
    table.classList.add('molecule-table');

    const headerRow = document.createElement('tr');
    const headers = [
      { label: "Nom", key: "nom" },
      { label: "Formule", key: "formule" },
      { label: "Masse molaire", key: "masseMolaire" },
      { label: "C", key: "nbCarbone" },
      { label: "Nocif", key: "nocif" },
      { label: "Irritant", key: "irritant" },
      { label: "Explosible", key: "explosible" },
      { label: "Toxique", key: "toxique" },
      { label: "Inflammable", key: "extremementInflammable" }
    ];

    headers.forEach(({ label, key }) => {
      const th = document.createElement('th');
      th.textContent = label;
      th.style.cursor = 'pointer';
      th.dataset.key = key;

      th.addEventListener('click', () => {
        if (currentSort.column === key) {
          currentSort.order = currentSort.order === 'asc' ? 'desc' : currentSort.order === 'desc' ? null : 'asc';
        } else {
          currentSort.column = key;
          currentSort.order = 'asc';
        }

        updateHeaderIcons();
        applyFilters();
      });

      headerRow.appendChild(th);
    });

    table.appendChild(headerRow);
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    container.appendChild(table);

    const normalizeString = str =>
      str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const updateHeaderIcons = () => {
      const ths = headerRow.querySelectorAll('th');
      ths.forEach(th => {
        const key = th.dataset.key;
        const label = headers.find(h => h.key === key).label;
        if (key === currentSort.column) {
          th.textContent = label + (currentSort.order === 'asc' ? ' ▲' : currentSort.order === 'desc' ? ' ▼' : '');
        } else {
          th.textContent = label;
        }
      });
    };

    const getSortedData = (data) => {
      const { column, order } = currentSort;
      if (!column || !order) return [...data];
      return [...data].sort((a, b) => {
        const valA = a[column];
        const valB = b[column];
        if (typeof valA === 'string') {
          return order === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
        }
        return order === 'asc' ? valA - valB : valB - valA;
      });
    };

    const applyFilters = () => {
      const search = normalizeString(searchInput.value);
      filteredData = molecules.filter(mol =>
        Object.values(mol).some(val => normalizeString(String(val)).includes(search))
      );
      filteredData = getSortedData(filteredData);
      tbody.innerHTML = "";
      filteredData.forEach(molecule => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${molecule.nom}</td>
          <td>${molecule.formule}</td>
          <td>${molecule.masseMolaire}</td>
          <td>${molecule.nbCarbone}</td>
          <td>${molecule.nocif ? "✔️" : ""}</td>
          <td>${molecule.irritant ? "✔️" : ""}</td>
          <td>${molecule.explosible ? "✔️" : ""}</td>
          <td>${molecule.toxique ? "✔️" : ""}</td>
          <td>${molecule.extremementInflammable ? "✔️" : ""}</td>
        `;
        tbody.appendChild(row);
      });
    };

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 50) {
        loadMoreRows();
      }
    };

    window.addEventListener('scroll', handleScroll);
    searchInput.addEventListener('input', applyFilters);

    applyFilters(); // initial render
  })
  .catch(error => console.error("Erreur JSON :", error));
