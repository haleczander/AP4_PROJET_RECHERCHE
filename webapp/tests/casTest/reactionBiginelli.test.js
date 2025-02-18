import MasseDechetsIndicateur from "../../src/indicateurs/impl/masseDechets.indicateur";
import REACTION_BIGINELLI from "../data/reactions/biginelli.reaction";

describe(
    "test Reaction Biginelli",
    () => {
        let reaction;

        beforeAll( 
            () => {
                reaction = REACTION_BIGINELLI;
            } 
        );

        test( 
            "test Masse déchets : Réaction principale",
            () => {
                const indicateur = new MasseDechetsIndicateur();
                expect(
                    indicateur.reactionPrincipale( reaction )
                ).toBeCloseTo(
                    2.087, 3
                );
            }
        )
        // test( 
        //     "test Masse déchets : Réaction complète",
        //     () => {
        //         const indicateur = new MasseDechetsIndicateur();
        //         expect(
        //             indicateur.reactionComplete( reaction )
        //         ).toBeCloseTo(
        //             10.257, 3
        //         );
        //     }
        // )



    }
)