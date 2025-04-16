import { Validator } from "../Validator";

export default class RequiredValidator extends Validator {
    message = "Ce champs est requis";

    rule = ( value ) => {
        if (value === undefined || value === null) return false;
        if (typeof value === "string") return value.trim() !== "";
        return true;
    };
}