import { REGEX_FORMULA } from "../../constants";
import RegexValidator from "./Regex.validator";

export default class FormulaValidator extends RegexValidator {
    get regexMessage() {return "(ex: C6H5O2)";}

    constructor() {
        super( REGEX_FORMULA );
    }
}