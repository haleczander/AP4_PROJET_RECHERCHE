import Controller from "../Controller";
import services from "../../services/services";
import Molecule from "../../models/molecule.model";
import RequiredValidator from "../../validators/impl/Required.validator";
import CASValidator from "../../validators/impl/CAS.validator";
import FloatValidator from "../../validators/impl/Float.validator";
import FormulaValidator from "../../validators/impl/Formula.validator";
import { updateErrors } from "../../utils/errors.utils";

export default class AjoutMoleculeController extends Controller {
  init() {
    this.dataService = services.dataService;
    this.router = services.router;
    this.validators = [];
    this._initForm();
    this.molecule = new Molecule();
  }

  _initForm() {
    this.form = this.container.querySelector("#molecule-form");
    this.submitBtn = this.form.querySelector("#submit-btn");
    this.submitBtn.disabled = true;

    const requiredValidator = new RequiredValidator();

    const nom = this.form.querySelector("#nom");
    this.addValidator(nom, requiredValidator);

    const cas = this.form.querySelector("#cas");
    this.addValidator(cas, requiredValidator, new CASValidator());

    const masseMolaire = this.form.querySelector("#masseMolaire");
    this.addValidator(masseMolaire, requiredValidator, new FloatValidator());

    const formule = this.form.querySelector("#formule");
    this.addValidator(formule, requiredValidator, new FormulaValidator());

    const submitFn = (event) => {
      event.preventDefault();
      if (this.valid) {
        const molecule = this._mapMolecule(event.target);
        this.dataService.addMolecule(molecule);
        this.router.navigateTo("/molecules");
      }
    };

    this.addListener(this.form, "submit", submitFn);
  }

  _mapMolecule(fields) {
    const molecule = new Molecule();

    molecule.nom = fields.nom.value;
    molecule.cas = fields.cas.value;
    molecule.formule = fields.formule.value;
    molecule.masseMolaire = parseFloat(fields.masseMolaire.value) || 0;

    molecule.nocif = fields["stat-nocif"].checked;
    molecule.irritant = fields["stat-irritant"].checked;
    molecule.explosible = fields["stat-explosible"].checked;
    molecule.toxique = fields["stat-toxique"].checked;
    molecule.tresToxique = fields["stat-tres-toxique"].checked;
    molecule.dangereuxPourEnvironnement =
      fields["stat-danger-environnement"].checked;
    molecule.facilementInflammable =
      fields["stat-facilement-inflammable"].checked;
    molecule.extremementInflammable =
      fields["stat-extremement-inflammable"].checked;
    molecule.r40 = fields["stat-r40"].checked;
    molecule.r45 = fields["stat-r45"].checked;
    molecule.r46 = fields["stat-r46"].checked;
    molecule.r49 = fields["stat-r49"].checked;
    molecule.r60 = fields["stat-r60"].checked;
    molecule.r61 = fields["stat-r61"].checked;
    molecule.r62 = fields["stat-r62"].checked;
    molecule.r63 = fields["stat-r63"].checked;
    return molecule;
  }

  addValidator(element, ...validators) {
    this.validators.push({
      element,
      validators,
    });

    const inputFn = () =>
      validators.forEach((validator) => {
        validator.validate(element);
        updateErrors(element, element.parentElement);
        this._updateValidity();
      });

    this.addListener(element, "input", inputFn);
  }

  get valid() {
    let valid = true;
    this.validators.forEach(({ element, validators }) =>
      validators.forEach((validator) => {
        validator.validate(element);
        updateErrors(element, element.parentElement);
        valid &= element.valid;
      })
    );
    return valid;
  }

  _updateValidity() {
    let valid = true;
    this.validators.forEach(({ element }) => (valid &= element.valid));
    this.submitBtn.disabled = !valid;
  }
}
