import services from "../services/services";
import Controller from "./Controller";

export default class MoleculesController extends Controller {

    constructor( container ) {
        super( container );
        this.dataService = services.dataService;
        this.molecules = this.dataService.findAllMolecules();
    }

    init() {
        this._initTable();
    }


    _initTable() {
        this.moleculesTable = this.container.querySelector('#molecules-table');
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
            headerRow.appendChild(th);
          });

          this.moleculesTable.appendChild( headerRow );

          this.moleculesTableData = document.createElement('tbody');
          this.moleculesTable.appendChild( this.moleculesTableData );

          updateData();
    }

    updateData() {

    }





}