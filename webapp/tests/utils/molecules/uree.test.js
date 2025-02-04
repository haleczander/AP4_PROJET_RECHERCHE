import { createMoleculeReaction, getCMR, getCoefCMR, getCoefDanger, getCoefToxicite, getDanger, getMasseG, getNParMmol, getPrixEuro, getToxicite } from "../../../src/utils/molecules.utils";
import { UREE } from "../../molecules.data";

const TEST_UREE = createMoleculeReaction( UREE );
TEST_UREE.purete = 99;
TEST_UREE.volume = 0.75;
TEST_UREE.prixG = .035;


test(
    "test getMasseG Uréee",
    () => {
        expect(
            getMasseG( TEST_UREE )
        ).toBeCloseTo(
            0.563, 3
        );
    }
);

test(
    "test getNParMmol Uréee",
    () => {
        expect(
            getNParMmol( TEST_UREE )
        ).toBeCloseTo(
            9.27, 2
        );
    }
);

test(
    "test getPrixEuro Uréee",
    () => {
        expect(
            getPrixEuro( TEST_UREE )
        ).toBeCloseTo (
            0.020, 3
        );
    }
);


test(
    "test getDanger Uréee",
    () => {
        expect(
            getDanger( TEST_UREE )
        ).toBeCloseTo(
            .071, 3
        );
    }
);

test(
    "test getCoefDanger Uréee",
    () => {
        expect(
            getCoefDanger( TEST_UREE )
        ).toBeCloseTo(
            0.522, 3
        );
    }
);

test(
    "test getCMR Uréee",
    () => {
        expect(
            getCMR( TEST_UREE )
        ).toBe(
            0
        );
    }
);

test(
    "test getCoefCMR Uréee",
    () => {
        expect(
            getCoefCMR( TEST_UREE )
        ).toBeCloseTo(
            0.56, 2
        );
    }
);

test(
    "test getToxicite Uréee",
    () => {
        expect(
            getToxicite( TEST_UREE )
        ).toBe(
            0
        );
    }
);

test(
    "test getCoefToxicite Uréee",
    () => {
        expect(
            getCoefToxicite( TEST_UREE )
        ).toBeCloseTo(
            0.56, 2
        );
    }
);