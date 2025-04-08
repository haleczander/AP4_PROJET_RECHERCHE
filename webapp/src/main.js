import routes from './routes.js';
import AssetService from './services/asset.service.js';
import Router from './router.js';

console.log( 'Je suis bien chargé' );

const navLinksContainer = document.getElementById('nav-links-container');

function generateNavLinks( routes ) {
  routes.forEach(route => {
    const linkElement = generateNavLink(route);
    navLinksContainer.appendChild(linkElement);
  });
}

function generateNavLink( route ) {
    const linkElement = document.createElement('a');
    linkElement.href = route.chemin;
    linkElement.classList.add('sidebar-link');

    const imgElement = document.createElement('img');
    imgElement.src = new AssetService().icon(route.icone);

    const textNode = document.createTextNode(route.nom);

    linkElement.appendChild(imgElement);
    linkElement.appendChild(textNode);

    return linkElement;
}

generateNavLinks( routes );
new Router( routes, document.getElementById('main-content') );