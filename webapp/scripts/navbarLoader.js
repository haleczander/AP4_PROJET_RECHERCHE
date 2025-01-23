console.log("script lancé !");

document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      const navbarContainer = document.getElementById("navbar-container");
      navbarContainer.innerHTML = data;
      
      // Sélectionne tous les liens avec la classe .sidebar-link
      const sidebarLinks = navbarContainer.querySelectorAll('.sidebar-link');
      
      // Détermine la page actuelle (dernier segment de l'URL).
      // Si on est à la racine (""), on considère "index.html" comme page courante.
      let currentPage = window.location.pathname.split('/').pop() || "index.html";
      
      // Marque par défaut le lien correspondant à la page courante
      sidebarLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
        }
      });
      
      // Gère le clic sur chaque lien
      sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          const href = link.getAttribute('href');
          
          // Si on est déjà sur la page cliquée, on empêche le rechargement
          if (href === currentPage) {
            e.preventDefault();
            console.log("Déjà sur " + href + ", rechargement évité.");
          } else {
            // Sinon, on met à jour la page courante et on applique l'état actif
            currentPage = href;
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        });
      });
    })
    .catch(error => console.error("Erreur lors du chargement de la navbar :", error));
});
