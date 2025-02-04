import { createMoleculeReaction, getCMR, getCoefCMR, getCoefDanger, getCoefToxicite, getDanger, getMasseG, getNParMmol, getPrixEuro, getToxicite } from "../../../src/utils/molecules.utils";
import { ACIDE_CHLORHYDRIQUE } from "../../data/molecules.data";


describe(
    "test molecules.utils : Acide chlorhydrique",
    () => {
        let TEST_ACIDE_CHLORHYDRIQUE;

        beforeAll( () => {
            TEST_ACIDE_CHLORHYDRIQUE = createMoleculeReaction( ACIDE_CHLORHYDRIQUE );
            TEST_ACIDE_CHLORHYDRIQUE.purete = 36.5;
            TEST_ACIDE_CHLORHYDRIQUE.volume = 0.85;
            TEST_ACIDE_CHLORHYDRIQUE.prixG = .025;
        } );

        test(
            "test getMasseG Acide chlorhydrique",
            () => {
                expect(
                    getMasseG( TEST_ACIDE_CHLORHYDRIQUE )
                ).toBeCloseTo(
                    1.003, 3
                );
            }
        );

        test(
            "test getNParMmol Acide chlorhydrique",
            () => {
                expect(
                    getNParMmol( TEST_ACIDE_CHLORHYDRIQUE )
                ).toBeCloseTo(
                    10.04, 2
                );
            }
        );

        test(
            "test getPrixEuro Acide chlorhydrique",
            () => {
                expect(
                    getPrixEuro( TEST_ACIDE_CHLORHYDRIQUE )
                ).toBeCloseTo (
                    0.03, 2
                )
            }
        );


        test(
            "test getDanger Acide chlorhydrique",
            () => {
                expect(
                    getDanger( TEST_ACIDE_CHLORHYDRIQUE )
                ).toBeCloseTo(
                    .1428, 3
                );
            }
        );

        test(
            "test getCoefDanger Acide chlorhydrique",
            () => {
                expect(
                    getCoefDanger( TEST_ACIDE_CHLORHYDRIQUE )
                ).toBeCloseTo(
                    0.8597, 4
                );
            }
        );

        test(
            "test getCMR Acide chlorhydrique",
            () => {
                expect(
                    getCMR( TEST_ACIDE_CHLORHYDRIQUE )
                ).toBe(
                    0
                );
            }
        );

        test(
            "test getCoefCMR Acide chlorhydrique",
            () => {
                expect(
                    getCoefCMR( TEST_ACIDE_CHLORHYDRIQUE )
                ).toBeCloseTo(
                    1.00, 2
                );
            }
        );

        test(
            "test getToxicite Acide chlorhydrique",
            () => {
                expect(
                    getToxicite( TEST_ACIDE_CHLORHYDRIQUE )
                ).toBe(
                    0
                );
            }
        );

        test(
            "test getCoefToxicite Acide chlorhydrique",
            () => {
                expect(
                    getCoefToxicite( TEST_ACIDE_CHLORHYDRIQUE )
                ).toBeCloseTo(
                    1.003 , 3

                );
            }
        );
    }
);