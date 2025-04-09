import CASComparison from "../comparisons/impl/CAS.comparison";
import ContainsIgnoreCaseComparison from "../comparisons/impl/ContainsIgnoreCase.comparison";

export function filterMolecule( input, molecule ) {
    const casComp = new CASComparison();
    const containsIgnoreCaseComp = new ContainsIgnoreCaseComparison();

    return containsIgnoreCaseComp.compare( input, molecule.nom )
    || containsIgnoreCaseComp.compare( input, molecule.formule )
    || casComp.compare( input, molecule.cas )
}