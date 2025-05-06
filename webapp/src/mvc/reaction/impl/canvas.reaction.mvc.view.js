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
        this.canvas.width = 1000;
        this.canvas.height = 200;
        this._initCtx();
        this.currentY = 0;
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
        let y = 100;
        const h = this.fontHeight / 2;
        const spacing = 5;
        const maxPerLine = 3;
    
        // On garde en mémoire les positions pour calcul du nombre de lignes
        let baseY = y;
        this.writeText("Réaction principale :", 0, 10, true);

        reactifs.forEach((reactif, index) => {
            if (index > 0 && index % maxPerLine === 0) {
                y += this.fontHeight + 10;
                x = 10;
            }
    
            if (x !== 10) {
                x += this.writeText("+", x, y, true);
                x += spacing;
            }
    
            let wCoef = this.writeText(reactif.coefStoechiometrique, x, y, true);
            x += wCoef;
            let wFormule = this.writeText(reactif.formule, x, y);
    
            const callback = (event) => {
                const toAdd = event.button === 0 ? 1 : -1;
                this.controller.updateCoef(reactif, toAdd, reactifs);
            };
    
            this.clickableZones.push(new ClickableZone(x, y - h, wFormule, this.fontHeight, callback));
            x += wFormule + spacing;
        });
    
        // Détermination du nombre total de lignes
        const totalLines = Math.ceil(reactifs.length / maxPerLine);
        const lineSpacing = this.fontHeight + 10;
    
        // Flèche centrée verticalement selon le nombre de lignes
        const arrowY = baseY + ((totalLines - 1) * lineSpacing) / 2;
    
        // X fixe pour la flèche
        const arrowX = 300;
        const arrowLength = 100;
    
        this.drawArrow(arrowX, arrowY, arrowLength);
        this.lastArrowX = arrowX;
        this.lastArrowY = arrowY;
        this.arrowLength = arrowLength;
    }

    rpSolvants(solvants) {
        if (!this.lastArrowX || !this.arrowLength) return;
    
        const centerX = this.lastArrowX + this.arrowLength / 2;
        const y = this.lastArrowY + 20; // position en dessous de la flèche
        const h = this.fontHeight / 2;
    
        let x = centerX;
    
        // Mesurer la largeur totale pour centrage
        let totalWidth = 0;
        solvants.forEach((solvant, index) => {
            totalWidth += this.ctx.measureText(solvant.formule).width;
            if (index < solvants.length - 1) {
                totalWidth += this.ctx.measureText(", ").width;
            }
        });
    
        x -= totalWidth / 2; // centrer
    
        solvants.forEach((solvant, index) => {
            let w = this.writeText(solvant.formule, x, y);
    
            const callback = (event) => {
                if (event.button !== 0) {
                    this.controller.removeElement(solvant, solvants);
                }
            };
    
            this.clickableZones.push(new ClickableZone(x, y - h, w, this.fontHeight, callback));
    
            x += w;
            if (index < solvants.length - 1) {
                x += this.writeText(", ", x, y, true);
            }
        });
    }
    

    rpCatalyseurs(catalyseurs) {
        if (!this.lastArrowX || !this.arrowLength) return;
    
        const centerX = this.lastArrowX + this.arrowLength / 2;
        const y = this.lastArrowY - 20; // position au-dessus de la flèche
        const h = this.fontHeight / 2;
    
        let x = centerX;
    
        // Mesurer la largeur totale pour centrage
        let totalWidth = 0;
        catalyseurs.forEach((cat, index) => {
            totalWidth += this.ctx.measureText(cat.formule).width;
            if (index < catalyseurs.length - 1) {
                totalWidth += this.ctx.measureText(", ").width;
            }
        });
    
        x -= totalWidth / 2; // centrer
    
        catalyseurs.forEach((catalyseur, index) => {
            let w = this.writeText(catalyseur.formule, x, y);
    
            const callback = (event) => {
                if (event.button !== 0) {
                    this.controller.removeElement(catalyseur, catalyseurs);
                }
            };
    
            this.clickableZones.push(new ClickableZone(x, y - h, w, this.fontHeight, callback));
    
            x += w;
            if (index < catalyseurs.length - 1) {
                x += this.writeText(", ", x, y, true);
            }
        });
    }
    
rpActivations(activations) {
    if (!this.lastArrowX || !this.arrowLength || !this.lastArrowY) return;

    const centerX = this.lastArrowX + this.arrowLength / 2;
    const y = this.lastArrowY + 50; // position sous les solvants
    const h = this.fontHeight / 2;
    const spacing = 5;

    let x = centerX;

    // Créer les textes complets des activations avec toutes les infos
    const activationTexts = activations.map(activation =>
        `${activation.nom} (${activation.dureeM} min, ${activation.puissanceW} W)`
    );

    // Mesurer la largeur totale pour centrage
    let totalWidth = 0;
    activationTexts.forEach((text, index) => {
        totalWidth += this.ctx.measureText(text).width;
        if (index < activationTexts.length - 1) {
            totalWidth += this.ctx.measureText(", ").width;
        }
    });

    x -= totalWidth / 2; // centrer horizontalement

    activationTexts.forEach((text, index) => {
        let w = this.writeText(text, x, y);

        const callback = (event) => {
            this.controller.removeElement(activations[index], activations);
        };

        this.clickableZones.push(new ClickableZone(x, y - h, w, this.fontHeight, callback));

        x += w + spacing;
        if (index < activationTexts.length - 1) {
            x += this.writeText(", ", x, y, true);
        }
    });
}
   
    ptReactifs(reactifs) {
        let x = 700;
        const y = 80;
        const h = this.fontHeight / 2;
        const spacing = 5;
        this.writeText(" Traitement post-réactionnel :", 690, 10, true);  
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

ptActivations(activations) {
    let x = 700;
    let y = 35;  // Position initiale verticale
    const h = this.fontHeight / 2;
    const spacing = 5;

    activations.forEach((activation, index) => {
        // Construction du texte avec nom, durée et puissance
        const activationText = `${activation.nom} (${activation.dureeM} min, ${activation.puissanceW} W)`;

        let w = this.writeText(activationText, x, y);

        const callback = (event) => {
            const toAdd = event.button === 0 ? 1 : -1;
            this.controller.removeElement(activation, activations);
        };

        this.clickableZones.push(new ClickableZone(x, y - h, w, this.fontHeight, callback));

        // Mise à jour de la position verticale pour le prochain élément
        y += this.fontHeight;

        if (index < activations.length - 1) {
            // Si c'est pas le dernier élément, on ajoute une virgule
            x += this.writeText("", x, y, true);
        }
    });
}


    purifReactifs(reactifs) {
        let x = 700;
        const y = 195;
        const h = this.fontHeight / 2;
        const spacing = 5;
        this.writeText(" Purification :", 690, 125, true);

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

  purifActivations(activations) {
    let x = 700;
    let y = 150;  // Position initiale verticale
    const h = this.fontHeight / 2;
    const spacing = 5;

    activations.forEach((activation, index) => {
        // Construction du texte avec nom, durée et puissance
        const activationText = `${activation.nom} (${activation.dureeM} min, ${activation.puissanceW} W)`;

        let w = this.writeText(activationText, x, y);

        const callback = (event) => {
            const toAdd = event.button === 0 ? 1 : -1;
            this.controller.removeElement(activation, activations);
        };

        this.clickableZones.push(new ClickableZone(x, y - h, w, this.fontHeight, callback));

        // Mise à jour de la position verticale pour le prochain élément
        y += this.fontHeight;

        if (index < activations.length - 1) {
            // Si ce n'est pas le dernier élément, on ajoute une virgule
            x += this.writeText("", x, y, true);
        }
    });
}


    produit(produits) {
        if (!Array.isArray(produits)) {
            produits = [produits];
        }
    
        const h = this.fontHeight / 2;
        const spacing = 5;
        const maxPerLine = 3;
    
        const lineSpacing = this.fontHeight + 10;
        let baseY = this.lastArrowY; // récupère la position définie par les réactifs
        let x = 450;
        let y = baseY;
    
        produits.forEach((produit, index) => {
            if (index > 0 && index % maxPerLine === 0) {
                y += lineSpacing;
                x = 450;
            }
    
            let w = this.writeText(produit.formule, x, y);
            const callback = (event) => {
                const toAdd = event.button === 0 ? 1 : -1;
                this.controller.updateCoef(produit, toAdd, produits);
            };
    
            this.clickableZones.push(new ClickableZone(x, y - h, w, this.fontHeight, callback));
            x += w + spacing;
    
            if (index < produits.length - 1) {
                x += this.writeText("+", x, y, true) + spacing;
            }
        });
    
        // Mise à jour de currentY pour les blocs suivants
        this.currentY = y + lineSpacing;
    }
    
    

    drawArrow(x, y, length = 100, height = 10, lineWidth = 3) {
        const ctx = this.ctx;
        const headLength = 10; // longueur de la tête de flèche
    
        // Ligne principale
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.moveTo(x, y);
        ctx.lineTo(x + length - headLength, y);
        ctx.stroke();
    
        // Tête de flèche (triangle plein)
        ctx.beginPath();
        ctx.moveTo(x + length - headLength, y - height);
        ctx.lineTo(x + length, y);
        ctx.lineTo(x + length - headLength, y + height);
        ctx.closePath();
        ctx.fill(); // remplit le triangle
    }
}   
