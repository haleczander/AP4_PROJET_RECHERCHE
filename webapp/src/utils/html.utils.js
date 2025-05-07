export function formatFormulaToSubscript(str) {
    return str.replace(/(\d+)/g, "<sub>$1</sub>");
}
  