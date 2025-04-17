import { Validator } from "../Validator";

export default class RegexValidator extends Validator {
    get message() {return `Le format suivant doit être respecté: ${this.regexMessage}`;}
    get regexMessage() {return this.regex;}

    constructor( regex ) {
        super();
        this.regex = regex;
    }
    

    rule = ( value ) => this.regex.test( value );

}