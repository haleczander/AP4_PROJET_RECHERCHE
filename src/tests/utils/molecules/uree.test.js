import { createMoleculeReaction, getCMR, getCoefCMR, getCoefDanger, getCoefToxicite, getDanger, getMasseG, getNParMmol, getPrixEuro, getToxicite } from "../../../src/utils/molecules.utils";
import { UREE } from "../../molecules.data";

const TEST_UREE = createMoleculeReaction( UREE );
TEST_UREE.densite = 1;
TEST_UREE.purete = 99;
TEST_UREE.volume = 0.75;
TEST_UREE.prixG = .035;


test(
    "test getMasseG Urée",
    () => {
        expect(
            getMasseG( TEST_UREE )
        ).toBeCloseTo(
            0.750, 3
        );
    }
);

test(
    "test getNParMmol Urée",
    () => {
        expect(
            getNParMmol( TEST_UREE )
        ).toBeCloseTo(
            12.36, 2
        );
    }
);

test(
    "test getPrixEuro Urée",
    () => {
        expect(
            getPrixEuro( TEST_UREE )
        ).toBeCloseTo (
            0.03, 2
        );
    }
);


test(
    "test getDanger Urée",
    () => {
        expect(
            getDanger( TEST_UREE )
        ).toBeCloseTo(
            .07, 2
        );
    }
);

test(
    "test getCoefDanger Urée",
    () => {
        expect(
            getCoefDanger( TEST_UREE )
        ).toBeCloseTo(
            0.696, 3
        );
    }
);

test(
    "test getCMR Urée",
    () => {
        expect(
            getCMR( TEST_UREE )
        ).toBe(
            0
        );
    }
);

test(
    "test getCoefCMR Urée",
    () => {
        expect(
            getCoefCMR( TEST_UREE )
        ).toBeCloseTo(
            0.75, 2
        );
    }
);

test(
    "test getToxicite Urée",
    () => {
        expect(
            getToxicite( TEST_UREE )
        ).toBe(
            0
        );
    }
);

test(
    "test getCoefToxicite Urée",
    () => {
        expect(
            getCoefToxicite( TEST_UREE )
        ).toBeCloseTo(
            0.75, 2
        );
    }
);