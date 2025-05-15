import { REGEX_DANGER_H_LIST } from "../../constants";
import RegexValidator from "./Regex.validator";

export default class DangersHValidator extends RegexValidator {
    get regexMessage() {return `Doît être une liste de dangers H séparés d'espaces (ex: "H301" ou "H301 H302")`;}

    constructor() {
        super( REGEX_DANGER_H_LIST );
    }
}