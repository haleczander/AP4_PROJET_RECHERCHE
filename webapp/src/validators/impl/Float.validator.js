import { REGEX_FLOAT, REGEX_FLOAT_nF } from "../../constants";
import RegexValidator from "./Regex.validator";

export default class FloatValidator extends RegexValidator {
    get regexMessage() {return `nombre décimal ${ this.decimals ? `à ${this.decimals} décimales` : ''}`;}

    constructor( decimals = null ) {
        const regex = decimals ? REGEX_FLOAT_nF( decimals ) : REGEX_FLOAT;
        super( regex );
    }
}