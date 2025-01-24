import { createMolecule } from "../src/utils/molecules.utils";

export const BENZALDEHYDE = createMolecule(
  "Benzaldéhyde", "C7H6O", "100-52-7", 106.12, 7, 
  true, false, false, false, false, 
  false, false, false, false, 
  false, false, false, false, false, false, false, false
);

export const UREE = createMolecule(
    "Urée", "CH4N2O", "57-13-6", 60.05, 1,
    false, true, false, false, false,
    false, false, false, false,
    false, false, false, false, false, false, false, false
);

export const ACETOACETATE_ETHYLE = createMolecule(
    "Acetoacétate d'éthyle", "C6H10O3", "141-97-9", 130.14, 6,
    false, true, false, false, false,
    false, false, false, false,
    false, false, false, false, false, false, false, false
);

export const ACIDE_CHLORHYDRIQUE = createMolecule(
  "Acide chlorhydrique", "HCl", "7647-01-0", 36.5, 1,
  true, false, false, false, false, 
  false, false, false, false, 
  false, false, false, false
);

const ETHANOL = createMolecule(
  "Ethanol", "C2H6O", "64-17-5", null, null,
  true, false, false, false, false,
  false, false, true, false,
  false, false, false, false
);

const EAU = createMolecule(
  "Eau", "H2O", "7732-18-5", null, null,
  false, false, false, false, false,
  false, false, false, false,
  false, false, false, false 
);