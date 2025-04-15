import { formulaParser } from "../../src/utils/molecules.utils";

describe('molecules utils -> formulaParser', () => {
    let formulas;
  
    beforeAll(() => {
      formulas = {
        'H2O': { H: 2, O: 1 },
        'CO2': { C: 1, O: 2 },
        'C6H12O6': { C: 6, H: 12, O: 6 },
        'CH4': { C: 1, H: 4 },
        'NaCl': { Na: 1, Cl: 1 },
        'Fe2O3': { Fe: 2, O: 3 },
        'H': { H: 1 }
      };
    });
  
    for (const [input, expected] of Object.entries({
      'H2O': { H: 2, O: 1 },
      'CO2': { C: 1, O: 2 },
      'C6H12O6': { C: 6, H: 12, O: 6 },
      'CH4': { C: 1, H: 4 },
      'NaCl': { Na: 1, Cl: 1 },
      'Fe2O3': { Fe: 2, O: 3 },
      'H': { H: 1 }
    })) {
      test(`parses ${input}`, () => {
        expect(formulaParser(input)).toEqual(expected);
      });
    }
  
    test('handles repeated elements', () => {
      expect(formulaParser('CH3CH2OH')).toEqual({ C: 2, H: 6, O: 1 });
    });
  });