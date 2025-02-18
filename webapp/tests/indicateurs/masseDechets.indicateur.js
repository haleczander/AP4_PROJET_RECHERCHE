import MasseDechetsIndicateur from "../../src/indicateurs/impl/masseDechets.indicateur";
import REACTION_BIGINELLI from "../data/reactions/biginelli.reaction";

describe(
    "test MasseDechetsIndicateur : Reaction de Biginelli",
    () => {
        let reaction;
        let indicateur;

        beforeAll( 
            () => {
                reaction = REACTION_BIGINELLI;
                indicateur = new MasseDechetsIndicateur();
            } 
        );

        test( 
            "Réaction Principale",
            () => {
                expect(
                    indicateur.reactionPrincipale( reaction )
                ).toBeCloseTo(
                    2.087, 3
                );
            }
        )

        test( 
            "Réaction complète",
            () => {
                expect(
                    indicateur.reactionComplete( reaction )
                ).toBeCloseTo(
                    10.257, 3
                );
            }
        )



    }
)