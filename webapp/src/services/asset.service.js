export class AssetService {
  path = "/assets/";

  buildPath(asset) {
    return `${this.path}icon/${asset}`;
  }

  icon(iconName) {
    const imgElement = document.createElement("img");
    imgElement.src = this.buildPath(iconName);
    return imgElement;
  }
}

export default AssetService;
