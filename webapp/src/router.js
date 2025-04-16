export class Router {
  constructor(routes, contentDiv, defaultRoute = "/") {
    this.defaultRoute = defaultRoute;
    this.routes = routes;
    this.contentDiv = contentDiv;
    this.controller = null;

    this.init();
  }

  init() {
    window.addEventListener("popstate", () => this.handleRoute());

    document.addEventListener("click", (e) => {
      if (
        e.target.tagName === "A" &&
        e.target.getAttribute("href")?.startsWith("/")
      ) {
        e.preventDefault();
        this.navigateTo(e.target.getAttribute("href"));
      }
    });

    this.handleRoute();
  }

  setLoading(loading) {
    this.contentDiv.classList.toggle("loading", loading);
  }

  handleRoute() {
    this.currentPath = window.location.pathname;
    const route = this.routes.find(
      (route) => route.chemin === this.currentPath,
    );

    if (!route) {
      console.error(`Route not found for path: ${this.currentPath}`);
      this.navigateTo(this.defaultRoute);
      return;
    }

    if (this.controller) {
      this.controller.destroy();
      this.controller = null;
    }

    this.setLoading(true);
    this.loadContent(route.cheminHtml)
      .then(() => this.updateController(route.controller))
      .finally(() => this.setLoading(false));
  }

  getRoute(path) {
    return this.routes.find((route) => route.chemin === path);
  }

  navigateTo(path) {
    window.history.pushState(null, null, path);
    this.handleRoute();
  }

  async loadContent(htmlPath) {
    return fetch(`pages/${htmlPath}`)
      .then((response) => response.text())
      .then((htmlContent) => (this.contentDiv.innerHTML = htmlContent))
      .catch((error) => {
        console.error("Failed to load content:", err);
        this.contentDiv.innerHTML = "<h1>404 Not Found</h1>";
        throw error;
      });
  }

  updateController(controller) {
    this.controller = controller && new controller(this.contentDiv);
  }
}

export default Router;
