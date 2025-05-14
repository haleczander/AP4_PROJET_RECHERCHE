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
    // Configuration de mise en page
    static LAYOUT = {
        REACTION_PRINCIPALE: {
            TITLE_X: 0,
            TITLE_Y: 10,
            REACTIFS_START_X: 10,
            REACTIFS_Y: 100,
            ARROW_X: 300,
            ARROW_LENGTH: 100,
            MAX_REACTIFS_PER_LINE: 3,
            SOLVANTS_OFFSET_Y: 20,
            CATALYSEURS_OFFSET_Y: -20,
            ACTIVATIONS_OFFSET_Y: 50
        },
        POST_TRAITEMENT: {
            TITLE_X: 690,
            TITLE_Y: 10,
            REACTIFS_START_X: 700,
            REACTIFS_Y: 80,
            ACTIVATIONS_START_X: 700,
            ACTIVATIONS_START_Y: 35
        },
        PURIFICATION: {
            TITLE_X: 690,
            TITLE_Y: 125,
            REACTIFS_START_X: 700,
            REACTIFS_Y: 195,
            ACTIVATIONS_START_X: 700,
            ACTIVATIONS_START_Y: 150
        },
        PRODUIT: {
            START_X: 450,
            MAX_PER_LINE: 3
        },
        SPACING: 5,
        LINE_SPACING: 10
    };

    clickableZones = [];

    constructor(controller, canvas) {
        super(controller);
        this.canvas = canvas;
        this.canvas.width = 1000;
        this.canvas.height = 200;
        this._initCtx();
        this.currentY = 0;
        this.canvas.addEventListener('contextmenu', (event) => event.preventDefault());
        this.canvas.addEventListener("mousedown", (event) => this._onClick(event));
    }

    _initCtx() {
        this.ctx = this.canvas.getContext("2d");
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

    // Méthodes d'aide au rendu
    writeText(text, x, y, bold = false) {
        this.ctx.font = bold ? this.boldFont : this.font;
        this.ctx.fillText(text, x, y);
        const w = this.ctx.measureText(text).width;
        this.ctx.font = this.font;
        return w;
    }

    activationText(activation) {
        return `${activation.symbole} (${activation.dureeM}min, ${activation.puissance}W)`;
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

    // Méthode générique pour créer une zone cliquable avec du texte
    createClickableText(text, x, y, bold = false, callback) {
        const w = this.writeText(text, x, y, bold);
        const h = this.fontHeight / 2;
        this.clickableZones.push(new ClickableZone(x, y - h, w, this.fontHeight, callback));
        return w;
    }

    // Méthode générique pour les réactifs (utilisée par rpReactifs, ptReactifs, purifReactifs)
    renderReactifs(reactifs, startX, startY, maxPerLine = Infinity, separatorChar = "+") {
        let x = startX;
        let y = startY;
        const spacing = CanvasReactionMVCView.LAYOUT.SPACING;
        const lineSpacing = this.fontHeight + CanvasReactionMVCView.LAYOUT.LINE_SPACING;
        const baseY = y;

        reactifs.forEach((reactif, index) => {
            if (index > 0 && maxPerLine !== Infinity && index % maxPerLine === 0) {
                y += lineSpacing;
                x = startX;
            }
    
            if (x !== startX && separatorChar) {
                x += this.writeText(separatorChar, x, y, true);
                x += spacing;
            }
    
            // Coefficient
            let wCoef = this.writeText(reactif.coefStoechiometrique, x, y, true);
            x += wCoef;
            
            // Formule avec zone cliquable
            const callback = (event) => {
                const toAdd = event.button === 0 ? 1 : -1;
                this.controller.updateCoef(reactif, toAdd, reactifs);
            };
            
            let wFormule = this.createClickableText(reactif.formule, x, y, false, callback);
            x += wFormule + spacing;
        });

        return {
            totalLines: Math.ceil(reactifs.length / maxPerLine),
            baseY: baseY
        };
    }

    // Méthode générique pour les éléments en ligne (solvants, catalyseurs, activations)
    renderInlineElements(elements, centerX, y, getTextFunc, removeCallback = null) {
        const spacing = CanvasReactionMVCView.LAYOUT.SPACING;
        const h = this.fontHeight / 2;
        
        // Préparer les textes et calculer la largeur totale
        const texts = elements.map(getTextFunc);
        
        let totalWidth = 0;
        texts.forEach((text, index) => {
            totalWidth += this.ctx.measureText(text).width;
            if (index < texts.length - 1) {
                totalWidth += this.ctx.measureText(", ").width;
            }
        });
        
        // Centrer horizontalement
        let x = centerX - totalWidth / 2;
        
        texts.forEach((text, index) => {
            const callback = removeCallback ? 
                (event) => removeCallback(elements[index], elements) :
                null;
                
            const w = callback ? 
                this.createClickableText(text, x, y, false, callback) :
                this.writeText(text, x, y);
                
            x += w;
            
            if (index < texts.length - 1) {
                x += this.writeText(", ", x, y, true);
            }
        });
        
        return { finalX: x };
    }

    // Méthode générique pour les activations (utilisée par toutes les méthodes d'activation)
    renderActivations(activations, startX, startY, vertical = true) {
        if (activations.length === 0) return;
        
        let x = startX;
        let y = startY;
        const spacing = CanvasReactionMVCView.LAYOUT.SPACING;
        const lineHeight = this.fontHeight;
        
        activations.forEach((activation, index) => {
            const text = this.activationText(activation);
            
            const callback = (event) => {
                this.controller.removeElement(activation, activations);
            };
            
            const w = this.createClickableText(text, x, y, false, callback);
            
            if (vertical) {
                // Mode vertical: passage à la ligne suivante
                y += lineHeight;
            } else {
                // Mode horizontal: continuation sur la même ligne
                x += w + spacing;
                if (index < activations.length - 1) {
                    x += this.writeText(", ", x, y, true);
                }
            }
        });
    }

    // Implémentation des méthodes spécifiques utilisant les méthodes génériques
    rpReactifs(reactifs) {
        const layout = CanvasReactionMVCView.LAYOUT.REACTION_PRINCIPALE;
        
        this.writeText("Réaction principale :", layout.TITLE_X, layout.TITLE_Y, true);
        
        const result = this.renderReactifs(
            reactifs, 
            layout.REACTIFS_START_X, 
            layout.REACTIFS_Y, 
            layout.MAX_REACTIFS_PER_LINE
        );
        
        // Calcul de la position verticale de la flèche en fonction du nombre de lignes
        const arrowY = result.baseY + ((result.totalLines - 1) * (this.fontHeight + CanvasReactionMVCView.LAYOUT.LINE_SPACING)) / 2;
        
        this.drawArrow(layout.ARROW_X, arrowY, layout.ARROW_LENGTH);
        
        // Sauvegarder la position de la flèche pour les autres éléments
        this.lastArrowX = layout.ARROW_X;
        this.lastArrowY = arrowY;
        this.arrowLength = layout.ARROW_LENGTH;
    }

    rpSolvants(solvants) {
        if (!this.lastArrowX || !this.arrowLength) return;
        
        const centerX = this.lastArrowX + this.arrowLength / 2;
        const y = this.lastArrowY + CanvasReactionMVCView.LAYOUT.REACTION_PRINCIPALE.SOLVANTS_OFFSET_Y;
        
        this.renderInlineElements(
            solvants,
            centerX,
            y,
            (solvant) => solvant.formule,
            (element, array) => this.controller.removeElement(element, array)
        );
    }

    rpCatalyseurs(catalyseurs) {
        if (!this.lastArrowX || !this.arrowLength) return;
        
        const centerX = this.lastArrowX + this.arrowLength / 2;
        const y = this.lastArrowY + CanvasReactionMVCView.LAYOUT.REACTION_PRINCIPALE.CATALYSEURS_OFFSET_Y;
        
        this.renderInlineElements(
            catalyseurs,
            centerX,
            y,
            (catalyseur) => catalyseur.formule,
            (element, array) => this.controller.removeElement(element, array)
        );
    }

    rpActivations(activations) {
        if (!this.lastArrowX || !this.arrowLength) return;
        
        const centerX = this.lastArrowX + this.arrowLength / 2;
        const y = this.lastArrowY + CanvasReactionMVCView.LAYOUT.REACTION_PRINCIPALE.ACTIVATIONS_OFFSET_Y;
        
        this.renderInlineElements(
            activations,
            centerX,
            y,
            (activation) => this.activationText(activation),
            (element, array) => this.controller.removeElement(element, array)
        );
    }

    ptReactifs(reactifs) {
        const layout = CanvasReactionMVCView.LAYOUT.POST_TRAITEMENT;
        
        this.writeText(" Traitement post-réactionnel :", layout.TITLE_X, layout.TITLE_Y, true);
        
        this.renderReactifs(
            reactifs,
            layout.REACTIFS_START_X,
            layout.REACTIFS_Y
        );
    }

    ptActivations(activations) {
        const layout = CanvasReactionMVCView.LAYOUT.POST_TRAITEMENT;
        
        this.renderActivations(
            activations,
            layout.ACTIVATIONS_START_X,
            layout.ACTIVATIONS_START_Y,
            true // mode vertical
        );
    }

    purifReactifs(reactifs) {
        const layout = CanvasReactionMVCView.LAYOUT.PURIFICATION;
        
        this.writeText(" Purification :", layout.TITLE_X, layout.TITLE_Y, true);
        
        this.renderReactifs(
            reactifs,
            layout.REACTIFS_START_X,
            layout.REACTIFS_Y
        );
    }

    purifActivations(activations) {
        const layout = CanvasReactionMVCView.LAYOUT.PURIFICATION;
        
        this.renderActivations(
            activations,
            layout.ACTIVATIONS_START_X,
            layout.ACTIVATIONS_START_Y,
            true // mode vertical
        );
    }

    produit(produits) {
        if (!Array.isArray(produits)) {
            produits = [produits];
        }
        
        if (!this.lastArrowY) return;
        
        const layout = CanvasReactionMVCView.LAYOUT.PRODUIT;
        
        this.renderReactifs(
            produits,
            layout.START_X,
            this.lastArrowY,
            layout.MAX_PER_LINE
        );
    }
}