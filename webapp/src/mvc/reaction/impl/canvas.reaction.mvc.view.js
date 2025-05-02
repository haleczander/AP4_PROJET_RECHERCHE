import ReactionMVCView from "../reaction.mvc.view";


class ClickableZone {
    constructor(x, y, w, h, callback) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.callback = callback;
    }

    contains(x, y) {
        return x >= this.x && x <= this.x + this.w && y >= this.y && y <= this.y + this.h;
    }

    event(event, x, y) {
        if (this.contains(x, y)) {
            this.callback(event);
        }
    }
}
export default class CanvasReactionMVCView extends ReactionMVCView {

    clickableZones = [];

    constructor(controller, canvas) {
        super(controller)
        this.canvas = canvas;
        this.canvas.width = 800;
        this._initCtx();

        this.canvas.addEventListener('contextmenu', (event) => event.preventDefault());
        this.canvas.addEventListener("mousedown", (event) => this._onClick(event));
    }

    _initCtx() {
        this.ctx = this.canvas.getContext("2d")
        this._initCtxVars();

        this.ctx.fillStyle = "black";
        this.ctx.font = this.font;
        this.ctx.textAlign = "left";
        this.ctx.textBaseline = "middle";
    }

    _initCtxVars() {
        this.font = "16px Arial";
        this.boldFont = `bold ${this.font}`;

        this.fontHeight = 20;

    }



    reset() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.clickableZones = [];
    }

    _onClick(event) {
        event.preventDefault();
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        this.clickableZones.forEach(zone => {
            zone.event(event, x, y);
        });
    }

    reactionComplete(reactionComplete) {
        this.reset();
        super.reactionComplete(reactionComplete);
    }

    writeText(text, x, y, bold = false) {
        this.ctx.font = bold ? this.boldFont : this.font;
        this.ctx.fillText(text, x, y);
        const w = this.ctx.measureText(text).width;
        this.ctx.font = this.font;
        return w;
    }



    rpReactifs(reactifs) {
        let x = 10;
        const y = 50;
        const h = this.fontHeight / 2;
        const spacing = 5;


        reactifs.forEach((reactif, index) => {
            let w = this.writeText(reactif.coefStoechiometrique, x, y, true);
            x += w;
            w += this.writeText(reactif.formule, x, y);

            const callback = (event) => {
                const toAdd = event.button === 0 ? 1 : -1;
                this.controller.updateCoef(reactif, toAdd, reactifs);
            }

            this.clickableZones.push(new ClickableZone(x, y - h, w, this.fontHeight, callback));

            x += w + spacing;
            if (index < reactifs.length - 1) {
                x += 2 * this.writeText("+", x, y, true);
                x += spacing;
            }
        });

    }

    rpSolvants(solvants) {
        let x = 250;
        const y = 30;
        const h = this.fontHeight / 2;


        solvants.forEach((solvant, index) => {
            let w = this.writeText(solvant.formule, x, y);

            const callback = (event) => {
                if (event.button !== 0) {this.controller.updateCoef(solvant, -1, solvants);}
            }

            this.clickableZones.push(new ClickableZone(x, y - h, w, this.fontHeight, callback));

            x += w;
            if (index < solvants.length - 1) {
                x += this.writeText(", ", x, y, true);
            }
        });
    }

    rpCatalyseurs(catalyseurs) {
        let x = 250;
        const y = 10;
        const h = this.fontHeight / 2;


        catalyseurs.forEach((catalyseur, index) => {
            let w = this.writeText(catalyseur.formule, x, y);

            const callback = (event) => {
                if (event.button !== 0) {this.controller.updateCoef(catalyseur, -1, catalyseurs);}
            }

            this.clickableZones.push(new ClickableZone(x, y - h, w, this.fontHeight, callback));

            x += w;
            if (index < catalyseurs.length - 1) {
                x += this.writeText(", ", x, y, true);
            }
        });
    }

    rpActivations(activations) {
        console.log("Not implemented");
    }

    ptReactifs(reactifs) {
        console.log("Not implemented");
    }

    ptActivations(activations) {
        console.log("Not implemented");
    }

    purifReactifs(reactifs) {
        console.log("Not implemented");
    }

    purifActivations(activations) {
        console.log("Not implemented");
    }

    produit(produit) {
        console.log("Not implemented");
    }

}