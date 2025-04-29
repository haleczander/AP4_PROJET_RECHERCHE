import routes from "./routing/routes.js";
import {AssetService, LocalDataService, CalculService} from "./services";
import Router from "./routing/router.js";
import services from "./services/services.js";


const dataService = new LocalDataService();
fetch("data/db.json")
  .then((response) => response.json())
  .then((data) => data.data)
  .then(({ molecules, activations }) => {
    dataService.molecules = molecules;
    dataService.activations = activations;
  });

services["dataService"] = dataService;
services["calculService"] = new CalculService();

const navLinksContainer = document.getElementById("nav-links-container");

function generateNavLinks(routes) {
  routes.forEach((route) => {
    const linkElement = generateNavLink(route);
    navLinksContainer.appendChild(linkElement);
  });
}

function generateNavLink(route) {
  const linkElement = document.createElement("a");
  linkElement.href = route.chemin;
  linkElement.classList.add("sidebar-link");

  const imgElement = document.createElement("img");
  imgElement.src = new AssetService().icon(route.icone);

  const textNode = document.createTextNode(route.nom);

  linkElement.appendChild(imgElement);
  linkElement.appendChild(textNode);

  return linkElement;
}

generateNavLinks( routes );
const router = new Router( routes, document.getElementById('main-container') );
services[ "router" ] = router;

console.log("Je suis bien chargé");
