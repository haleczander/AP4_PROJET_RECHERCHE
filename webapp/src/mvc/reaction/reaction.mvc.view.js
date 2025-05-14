export default class ReactionMVCView {

    constructor(controller) {
        this.controller = controller;
        this.clickableZones = [];
        this.fontHeight = 20; // ajuster selon contexte
    }

    reactionComplete(reactionComplete) {
        this.reactionPrincipale(reactionComplete.reactionPrincipale);
        this.postTraitement(reactionComplete.traitementPostReactionnel);
        this.purification(reactionComplete.purification);
        this.produit(reactionComplete.produit);
    }

    reactionPrincipale(reactionPrincipale) {
        this.rpReactifs(reactionPrincipale.reactifs);
        this.rpSolvants(reactionPrincipale.solvants);
        this.rpCatalyseurs(reactionPrincipale.catalyseurs);
        this.rpActivations(reactionPrincipale.activations);
    }

    rpReactifs(reactifs) {
        this.renderReactifs(reactifs, 50, 30);
    }

    rpSolvants(solvants) {
        this.renderReactifs(solvants, 50, 60);
    }

    rpCatalyseurs(catalyseurs) {
        this.renderReactifs(catalyseurs, 50, 90);
    }

    rpActivations(activations) {
        this.renderActivations(activations, 250, 70);
    }

    postTraitement(traitementPostReactionnel) {
        this.ptReactifs(traitementPostReactionnel.reactifs);
        this.ptActivations(traitementPostReactionnel.activations);
    }

    ptReactifs(reactifs) {
        this.renderReactifs(reactifs, 50, 130);
    }

    ptActivations(activations) {
        this.renderActivations(activations, 250, 160);
    }

    purification(purification) {
        this.purifReactifs(purification.reactifs);
        this.purifActivations(purification.activations);
    }

    purifReactifs(reactifs) {
        this.renderReactifs(reactifs, 50, 200);
    }

    purifActivations(activations) {
        this.renderActivations(activations, 250, 230);
    }

    produit(produit) {
        this.renderReactifs([produit], 50, 270);
    }

    sousProduits(residu) {
        this.renderReactifs([residu], 50, 300);
    }

    renderReactifs(elements, x, y) {
        elements.forEach((el, index) => {
            x += this.writeText(el.nom, x, y);
            if (index < elements.length - 1) {
                x += this.writeText(", ", x, y, true);
            }
        });
    }

    renderActivations(activations, x, y) {
        const h = this.fontHeight / 2;
        const spacing = 5;

        activations.forEach((activation, index) => {
            const patched = { ...activation, formule: activation.nom };
            let w = this.writeText(patched.nom, x, y);
            const callback = (event) => {
                const toAdd = event.button === 0 ? 1 : -1;
                this.controller.updateCoef(patched, toAdd, activations);
            };
            this.clickableZones.push(new ClickableZone(x, y - h, w, this.fontHeight, callback));

            x += w + spacing;
            if (index < activations.length - 1) {
                x += this.writeText(", ", x, y, true);
            }
        });
    }

    writeText(text, x, y, isSeparator = false) {
        // Simulation : retourne une largeur arbitraire
        const charWidth = 7;
        return text.length * charWidth;
    }

}
