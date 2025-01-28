import { createMoleculeReaction, getCMR, getCoefCMR, getCoefDanger, getCoefToxicite, getDanger, getMasseG, getNParMmol, getPrixEuro, getToxicite } from "../../../src/utils/molecules.utils";
import { ETHANOL } from "../../molecules.data";

const TEST_ETHANOL = createMoleculeReaction( ETHANOL );
TEST_ETHANOL.densite = 0.789;
TEST_ETHANOL.purete = 95;
TEST_ETHANOL.volume = 4.75;
TEST_ETHANOL.prixG = .015;


test(
    "test getMasseG Ethanol",
    () => {
        expect(
            getMasseG( TEST_ETHANOL )
        ).toBeCloseTo(
            3.748, 3
        );
    }
);

test(
    "test getNParMmol Ethanol",
    () => {
        expect(
            getNParMmol( TEST_ETHANOL )
        ).toBeCloseTo(
            77.285, 3
        );
    }
);

test(
    "test getPrixEuro Ethanol",
    () => {
        expect(
            getPrixEuro( TEST_ETHANOL )
        ).toBeCloseTo (
            0.056, 3
        );
    }
);


test(
    "test getDanger Ethanol",
    () => {
        expect(
            getDanger( TEST_ETHANOL )
        ).toBeCloseTo(
            .0714, 3
        );
    }
);

test(
    "test getCoefDanger Ethanol",
    () => {
        expect(
            getCoefDanger( TEST_ETHANOL )
        ).toBeCloseTo(
            3.480, 3
        );
    }
);

test(
    "test getCMR Ethanol",
    () => {
        expect(
            getCMR( TEST_ETHANOL )
        ).toBe(
            0
        );
    }
);

test(
    "test getCoefCMR Ethanol",
    () => {
        expect(
            getCoefCMR( TEST_ETHANOL )
        ).toBeCloseTo(
            3.7478, 4
        );
    }
);

test(
    "test getToxicite Ethanol",
    () => {
        expect(
            getToxicite( TEST_ETHANOL )
        ).toBe(
            0
        );
    }
);

test(
    "test getCoefToxicite Ethanol",
    () => {
        console.log(TEST_ETHANOL)
        expect(
            getCoefToxicite( TEST_ETHANOL )
        ).toBeCloseTo(
            3.748, 3
        );
    }
);