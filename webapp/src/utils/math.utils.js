export function round( value, decimals = 2 ) {
    if ( !value ) {
        return value;
    }
    const coef = Math.pow(10, decimals);
    return Math.round( value * coef ) / coef;
}