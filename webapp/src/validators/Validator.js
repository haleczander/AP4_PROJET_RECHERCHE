export class Validator {
    errorMessageId = `error-msg-${this.constructor.name}`;

    get message() {
        return "Message de validation non implémenté";
    }

    rule(value) {
        throw new Error("Validator not implemented");
    }

    validate( element ) {
        const valid = this.rule( element.value );
        if ( undefined === element.errors ) {
            element.errors = {};
        }
        delete element.errors[ this.errorMessageId ];
        if ( !valid ) {
            element.errors [this.errorMessageId] = this.message;
        }
        element.valid = valid;
        return valid;
    }
}
