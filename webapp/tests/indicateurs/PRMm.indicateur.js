import PRMm from "../../src/indicateurs/impl/PRMm.indicateur";
import REACTION_BIGINELLI from "../data/reactions/biginelli.reaction";

describe(
    "test PRMm : Reaction de Biginelli",
    () => {
        let reaction;
        let indicateur;

        beforeAll( 
            () => {
                reaction = REACTION_BIGINELLI;
                indicateur = new PRMm();
            } 
        );

        test( 
            "Réaction Principale",
            () => {
                expect(
                    indicateur.reactionPrincipale( reaction )
                ).toBeCloseTo(
                    0.000, 3
                );
            }
        )

        test( 
            "Réaction complète",
            () => {
                expect(
                    indicateur.reactionComplete( reaction )
                ).toBeCloseTo(
                    0.000, 3
                );
            }
        )



    }
)