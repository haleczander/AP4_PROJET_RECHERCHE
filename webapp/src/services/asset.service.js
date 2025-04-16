export class AssetService {
  path = "/assets/";

  icon(asset) {
    return `${this.path}/icon/${asset}`;
  }
}

export default AssetService;
