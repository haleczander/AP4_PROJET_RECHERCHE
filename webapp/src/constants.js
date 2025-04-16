export const REGEX_FORMULA_PARSER =  /([A-Z][a-z]*)(\d*)/g;
export const REGEX_FORMULA = /^([A-Z][a-z]*\d*)+$/;
export const REGEX_CAS = /^\d{2,7}-\d{2}-\d{1}$/;
export const REGEX_INTEGER = /^-?\d+$/;
export const REGEX_FLOAT = /^-?\d+(\.\d+)?$/;
export const REGEX_FLOAT_nF = (n) => new RegExp(`^-?\\d+(?:\\.\\d{1,${n}})$`);