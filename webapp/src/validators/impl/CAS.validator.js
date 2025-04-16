import { REGEX_CAS } from "../../constants";
import RegexValidator from "./Regex.validator";

export default class CASValidator extends RegexValidator {
    get regexMessage() {return "CAS";}

    constructor() {
        super( REGEX_CAS );
    }
}