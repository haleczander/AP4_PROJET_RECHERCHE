import FacteurStoechimetriqueInverse from "../../src/indicateurs/impl/facteurStoechimetriqueInverse.indicateur";
import REACTION_BIGINELLI from "../data/reactions/biginelli.reaction";

describe(
    "test FacteurStoechimetriqueInverse : Reaction de Biginelli",
    () => {
        let reaction;
        let indicateur;

        beforeAll( 
            () => {
                reaction = REACTION_BIGINELLI;
                indicateur = new FacteurStoechimetriqueInverse();
            } 
        );

        test( 
            "Réaction Principale",
            () => {
                expect(
                    indicateur.reactionPrincipale( reaction )
                ).toBeCloseTo(
                    0.807, 3
                );
            }
        )

        test( 
            "Réaction complète",
            () => {
                expect(
                    indicateur.reactionComplete( reaction )
                ).toBe(
                    null
                );
            }
        )



    }
)