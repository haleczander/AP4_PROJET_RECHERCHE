export function exportJson(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${filename}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function importJson(onload) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.click();
  input.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = onload;
      reader.readAsText(file);
    }
  });
}

export async function exportResultsPDF(event, reaction) {
  event.preventDefault();

  const exportBtn = event.target;
  exportBtn.disabled = true;

  try {
    // 1. Capture des canvas
    const canvases = [
      document.querySelector("#canvas-reaction"),
      document.querySelector("#radar-chart-principale"),
      document.querySelector("#radar-chart-complete"),
      document.querySelector("#bar-chart-principale"),
      document.querySelector("#bar-chart-complete"),
    ];

    const tableauResultats = document.querySelector("#tableau-reaction");
    const tableauResultatsHTML = tableauResultats
      ? tableauResultats.outerHTML
      : "";

    // 2. Conversion des canvas en images
    const images = await Promise.all(
      canvases.map((canvas) => {
        if (!canvas) return Promise.resolve("");
        return new Promise((resolve) => {
          const dataUrl = canvas.toDataURL("image/png");
          const img = new Image();
          img.onload = () => resolve(dataUrl);
          img.src = dataUrl;
        });
      })
    );

    // 3. Crée un iframe invisible
    const iframe = document.createElement("iframe");
    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";
    document.body.appendChild(iframe);

    // 4. Écrit le contenu HTML dans l'iframe
    const iframeDoc = iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Rapport de Réaction</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              max-width: 1100px;
              margin: 30px auto;
              padding: 20px;
              background: white;
            }
            .section {
              margin-bottom: 40px;
              page-break-inside: avoid;
            }
            h1 {
              color: #1a365d;
              font-size: 24px;
              text-align: center;
              margin-bottom: 10px;
            }
            h2 {
              color: #2d3748;
              font-size: 20px;
              margin: 30px 0 15px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
              font-size: 14px;
            }
            th, td {
              padding: 8px;
              border: 1px solid #e2e8f0;
              text-align: left;
            }
            th {
              background: #f7fafc;
            }
            .graph-container {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
              margin: 20px auto;
              max-width: 800px;
            }
            .graph-image {
              width: 100%;
              max-height: 250px;
              object-fit: contain;
            }
              .filler{
              margin-top:5em;}
            @media print {
              body { margin: 0; padding: 15px; }
              .section { page-break-inside: avoid; }
              @page { size: auto; margin: 0mm; }
            }
          </style>
        </head>
        <body>
          <div class="section">
            <h1>Rapport de Réaction</h1>
            <div style="text-align: center;">Date: ${new Date().toLocaleDateString()}</div>
          </div>

          <div class="section">
            <h2>Schéma Réactionnel</h2>
            <div style="text-align: center;">
              <img src="${images[0]}" alt="Schéma réactionnel" style="max-width: 80%; height: auto;">
            </div>
          </div>

          <div class="section">
            <h2>Graphiques d'analyse</h2>
            <div class="graph-container">
              <img src="${images[1]}" alt="Radar Principal" class="graph-image">
              <img src="${images[2]}" alt="Radar Complet" class="graph-image">
              <img src="${images[3]}" alt="Barre Principal" class="graph-image">
              <img src="${images[4]}" alt="Barre Complet" class="graph-image">
            </div>
          </div>

          <div class="section">
            <h2>Détails de la Réaction</h2>
            ${createReactionStepsTable(reaction).outerHTML}
          </div>



          <div class="section" style="page-break-before: always;">
            <h2>Tableau des Résultats</h2>
            ${tableauResultatsHTML}
          </div>
        </body>
      </html>
    `);
    iframeDoc.close();

    // 5. Attente chargement complet des images dans l'iframe avant impression
    const imagesInIframe = iframeDoc.querySelectorAll("img");
    let imagesLoaded = 0;

    const cleanup = () => {
      document.body.removeChild(iframe);
      exportBtn.disabled = false;
    };

    if (imagesInIframe.length === 0) {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
      if ("onafterprint" in iframe.contentWindow) {
        iframe.contentWindow.onafterprint = cleanup;
      } else {
        setTimeout(cleanup, 1000);
      }
    } else {
      imagesInIframe.forEach((img) => {
        img.onload = img.onerror = () => {
          imagesLoaded++;
          if (imagesLoaded === imagesInIframe.length) {
            iframe.contentWindow.focus();
            iframe.contentWindow.print();
            if ("onafterprint" in iframe.contentWindow) {
              iframe.contentWindow.onafterprint = cleanup;
            } else {
              setTimeout(cleanup, 1000);
            }
          }
        };
      });
    }
  } catch (error) {
    console.error("Erreur lors de la génération du PDF:", error);
    exportBtn.disabled = false;
  } finally {
    exportBtn.disabled = false;

  }
}


function createActivations(items) {
  return `
        <tr>
          <th colspan="6" style="background:#e9ecef; padding:12px; text-align:left; border:1px solid #dee2e6; font-size:16px;">
            Activations
          </th>
        </tr>
        <tr>
          <th style="padding:8px; border:1px solid #dee2e6; background:#f8f9fa;">Nom</th>
          <th style="padding:8px; border:1px solid #dee2e6; background:#f8f9fa;">Symbole</th>
          <th style="padding:8px; border:1px solid #dee2e6; background:#f8f9fa;">Puissance</th>
          <th style="padding:8px; border:1px solid #dee2e6; background:#f8f9fa;">Durée</th>
          <th style="padding:8px; border:1px solid #dee2e6; background:#f8f9fa;">Prix kWh</th>
        </tr>
        ${items
      .map(
        (item) => `
          <tr>
            <td style="padding:8px; border:1px solid #dee2e6;">${item.nom || "-"}</td>
            <td style="padding:8px; border:1px solid #dee2e6;">${item.symbole || "-"}</td>
            <td style="padding:8px; border:1px solid #dee2e6;">${item.puissanceW || "-"}</td>
            <td style="padding:8px; border:1px solid #dee2e6;">${item.dureeM || "-"}</td>
            <td style="padding:8px; border:1px solid #dee2e6;">${item.energie?.prixKWh || "-"}</td>
          </tr>
        `
      )
      .join("")}
      `;
}

function createTableSection(title, items, includeVolume = true) {
  return `
        <tr>
          <th colspan="6" style="background:#e9ecef; padding:12px; text-align:left; border:1px solid #dee2e6; font-size:16px;">
            ${title}
          </th>
        </tr>
        <tr>
          <th style="padding:8px; border:1px solid #dee2e6; background:#f8f9fa;">Nom</th>
          <th style="padding:8px; border:1px solid #dee2e6; background:#f8f9fa;">Formule</th>
          <th style="padding:8px; border:1px solid #dee2e6; background:#f8f9fa;">CAS</th>
          <th style="padding:8px; border:1px solid #dee2e6; background:#f8f9fa;">Masse molaire</th>
          <th style="padding:8px; border:1px solid #dee2e6; background:#f8f9fa;">Pureté (%)</th>
          <th style="padding:8px; border:1px solid #dee2e6; background:#f8f9fa;">${includeVolume ? "Volume (mL)" : "Masse (g)"}</th>
          <th style="padding:8px; border:1px solid #dee2e6; background:#f8f9fa;">Recyclabilité (%)</th>
        </tr>
        ${items
      .map(
        (item) => `
          <tr>
            <td style="padding:8px; border:1px solid #dee2e6;">${item.nom || "-"}</td>
            <td style="padding:8px; border:1px solid #dee2e6;">${item.formule || "-"}</td>
            <td style="padding:8px; border:1px solid #dee2e6;">${item.cas || "-"}</td>
            <td style="padding:8px; border:1px solid #dee2e6;">${item.masseMolaire || "-"}</td>
            <td style="padding:8px; border:1px solid #dee2e6;">${item.purete || "-"}</td>
            <td style="padding:8px; border:1px solid #dee2e6;">${includeVolume ? item.volume || "-" : item.masseG || "-"}</td>
            <td style="padding:8px; border:1px solid #dee2e6;">${item.recyclabilite || "-"}</td>
          </tr>
        `
      )
      .join("")}
      `;
}

export function createReactionStepsTable(reaction) {
  if (!reaction?.reactionPrincipale) return "";


  const table = document.createElement("table");
  table.style.width = "100%";
  table.style.borderCollapse = "collapse";
  table.style.fontSize = "14px";
  table.style.backgroundColor = "white";

  table.innerHTML = `
      ${createTableSection("Réactifs", reaction.reactionPrincipale.reactifs)}
      ${createTableSection("Catalyseurs", reaction.reactionPrincipale.catalyseurs)}
      ${createTableSection("Solvants", reaction.reactionPrincipale.solvants)}
      ${createActivations(reaction.reactionPrincipale.activations)}
      <tr ><td style="min-height:5ch;"></td></tr>
      ${createTableSection("Traitement post-réactionnel", reaction.traitementPostReactionnel.reactifs)}
      ${createActivations(reaction.traitementPostReactionnel.activations)}
      <tr ><td style="min-height:5ch;"></td></tr>
      ${createTableSection("Purification", reaction.purification.reactifs)}
      ${createActivations(reaction.purification.activations)}
      <tr ><td style="min-height:5ch;"></td></tr>
      ${createTableSection("Produit final", [reaction.produit], false)}
    `;

  return table;
}
