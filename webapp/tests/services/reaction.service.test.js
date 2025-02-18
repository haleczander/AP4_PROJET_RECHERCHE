import ReactionService from "../../src/services/reaction.service";
import REACTION_BIGINELLI from "../data/reactions/biginelli.reaction";

describe(
    "test reaction.service ",
    () => {
        let service;
        let reaction;

        beforeAll( () => {
            service = new ReactionService();
            reaction = REACTION_BIGINELLI;
        } );

        test(
            "masseReactifs",
            () => {
                expect(
                    service.masseReactifs( reaction )
                ).toBeCloseTo(
                    4.587, 3
                );
            }
        );

        test(
            "masseSolvants",
            () => {
                expect(
                    service.masseSolvants( reaction )
                ).toBeCloseTo(
                    3.577, 3
                );
            }
        );

        test(
            "masseCatalyseurs",
            () => {
                expect(
                    service.masseCatalyseurs( reaction )
                ).toBeCloseTo(
                    .590, 3
                );
            }
        );

        test(
            "massePostTraitement",
            () => {
                expect(
                    service.massePostTraitement( reaction )
                ).toBeCloseTo(
                    0, 3
                );
            }
        );

        test(
            "massePurification",
            () => {
                expect(
                    service.massePurification( reaction )
                ).toBeCloseTo(
                    4.0025, 3
                );
            }
        );

        test(
            "masseRecyclable",
            () => {
                expect(
                    service.masseRecyclable( reaction )
                ).toBeCloseTo(
                    0, 3
                );
            }
        );
    }
);