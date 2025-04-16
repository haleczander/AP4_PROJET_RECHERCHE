import { REGEX_INTEGER } from "../../constants";
import RegexValidator from "./Regex.validator";

export default class IntegerValidator extends RegexValidator {
    get regexMessage() {return "nombre entier";}

    constructor() {
        super( REGEX_INTEGER );
    }
}