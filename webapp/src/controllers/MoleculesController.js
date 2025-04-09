import services from "../services/services";
import Controller from "./Controller";

export default class MoleculesController extends Controller {

    constructor( container ) {
        super( container );
        this.dataService = services.dataService;
        this.molecules = this.dataService.findAllMolecules();
        this.sort = null;
    }

    init() {
        _initTable();
    }

    _initTable() {
        this.moleculesTable = this.container.findById('molecules-table');
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
    }





}