import CoutMassique from "../../src/indicateurs/impl/coutMassique.indicateur";
import REACTION_BIGINELLI from "../data/reactions/biginelli.reaction";

describe(
    "test CoutMassique : Reaction de Biginelli",
    () => {
        let reaction;
        let indicateur;

        beforeAll( 
            () => {
                reaction = REACTION_BIGINELLI;
                indicateur = new CoutMassique();
            } 
        );

        test( 
            "Réaction Principale",
            () => {
                expect(
                    indicateur.reactionPrincipale( reaction )
                ).toBeCloseTo(
                    0.123, 3
                );
            }
        )

        test( 
            "Réaction complète",
            () => {
                expect(
                    indicateur.reactionComplete( reaction )
                ).toBeCloseTo(
                    0.213, 3
                );
            }
        )



    }
)