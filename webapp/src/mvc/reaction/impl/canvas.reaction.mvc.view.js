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

class HoverableZone {
    constructor(x, y, w, h, tooltipData) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.tooltipData = tooltipData;
        this.isHovered = false;
    }

    contains(x, y) {
        return x >= this.x && x <= this.x + this.w && y >= this.y && y <= this.y + this.h;
    }

    mouseMove(x, y) {
        const wasHovered = this.isHovered;
        this.isHovered = this.contains(x, y);
        return wasHovered !== this.isHovered; // retourne true si l'état a changé
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
        LINE_SPACING: 10,
        TOOLTIP: {
            PADDING: 10,
            BACKGROUND: "rgba(255, 255, 240, 0.95)",
            BORDER: "#888",
            FONT: "14px Arial",
            MAX_WIDTH: 300,
            LINE_HEIGHT: 18
        }
    };

    clickableZones = [];
    hoverableZones = [];
    activeTooltip = null;

    constructor(controller, canvas) {
        super(controller);
        this.canvas = canvas;
        this.canvas.width = 1000;
        this.canvas.height = 250;
        this._initCtx();
        this.currentY = 0;
        this.canvas.addEventListener('contextmenu', (event) => event.preventDefault());
        this.canvas.addEventListener("mousedown", (event) => this._onClick(event));
        this.canvas.addEventListener("mousemove", (event) => this._onMouseMove(event));
        this.canvas.addEventListener("mouseout", () => this._hideTooltip());
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
        this.fontSmall = "12px Arial";
    }

    reset() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.clickableZones = [];
        this.hoverableZones = [];
        this.activeTooltip = null;
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

    _onMouseMove(event) {
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Vérifier si la souris est sur une zone survolable
        let hoveredZone = null;
        let stateChanged = false;

        for (let i = 0; i < this.hoverableZones.length; i++) {
            const zone = this.hoverableZones[i];
            const changed = zone.mouseMove(x, y);

            if (changed) {
                stateChanged = true;
            }

            if (zone.isHovered) {
                hoveredZone = zone;
                // On ne sort pas de la boucle pour s'assurer que tous les états sont mis à jour
            }
        }

        // Si la souris est sur une nouvelle zone ou si elle a quitté toutes les zones
        if (stateChanged || (this.activeTooltip && !hoveredZone)) {
            // Effacer l'ancien tooltip et redessiner le contenu principal
            this._renderMainContent();

            // Si on a une nouvelle zone survolée, afficher son tooltip
            if (hoveredZone) {
                this._showTooltip(hoveredZone, x, y);
            } else {
                this.activeTooltip = null;
            }
        }
        // Si on a déjà un tooltip actif et qu'on reste sur la même zone, juste mettre à jour sa position
        else if (this.activeTooltip && hoveredZone === this.activeTooltip) {
            this._showTooltip(this.activeTooltip, x, y);
        }
    }

    _renderMainContent() {
        // Effacer le canvas et redessiner tout le contenu principal
        if (this._cachedReactionComplete) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            super.reactionComplete(this._cachedReactionComplete);
        }
    }

    _showTooltip(zone, mouseX, mouseY) {
        this.activeTooltip = zone;

        const tooltipLayout = CanvasReactionMVCView.LAYOUT.TOOLTIP;
        const padding = tooltipLayout.PADDING;
        const tooltipData = zone.tooltipData;
        const lineHeight = tooltipLayout.LINE_HEIGHT;

        // Sauvegarder le contexte pour restaurer les styles après
        this.ctx.save();

        // Configurer le style pour l'infobulle
        this.ctx.font = tooltipLayout.FONT;

        // Mesurer le texte pour déterminer la taille de l'infobulle
        const content = tooltipData.content || "Aucune information disponible";
        const lines = this._wrapText(content, tooltipLayout.MAX_WIDTH - padding * 2);

        // Calculer la largeur maximale nécessaire pour le contenu
        let contentWidth = 0;
        lines.forEach(line => {
            const lineWidth = this.ctx.measureText(line).width;
            if (lineWidth > contentWidth) {
                contentWidth = lineWidth;
            }
        });

        // Calculer la largeur pour le titre s'il existe
        let titleWidth = 0;
        if (tooltipData.title) {
            this.ctx.font = `bold ${tooltipLayout.FONT}`;
            titleWidth = this.ctx.measureText(tooltipData.title).width;
            this.ctx.font = tooltipLayout.FONT;
        }

        // Largeur finale du tooltip (max entre titre et contenu + padding)
        const tooltipWidth = Math.max(
            Math.min(Math.max(contentWidth, titleWidth) + padding * 2, tooltipLayout.MAX_WIDTH),
            150 // Largeur minimale
        );

        // Hauteur du tooltip basée sur le nombre de lignes + titre éventuel
        const titleHeight = tooltipData.title ? lineHeight : 0;
        const tooltipHeight = lines.length * lineHeight + titleHeight + padding * 2;

        // Positionner l'infobulle près du curseur mais éviter qu'elle sorte du canvas
        let tooltipX = mouseX + 10;
        let tooltipY = mouseY - tooltipHeight - 10;

        // Ajuster si l'infobulle sort du canvas
        if (tooltipX + tooltipWidth > this.canvas.width) {
            tooltipX = this.canvas.width - tooltipWidth - 5;
        }

        if (tooltipY < 0) {
            tooltipY = mouseY + 20;

            // Si même en dessous ça sort du canvas, positionner à droite du curseur
            if (tooltipY + tooltipHeight > this.canvas.height) {
                tooltipY = Math.max(5, mouseY - tooltipHeight / 2);
            }
        }

        // Dessiner le fond de l'infobulle avec un peu plus d'espace
        this.ctx.fillStyle = tooltipLayout.BACKGROUND;
        this.ctx.strokeStyle = tooltipLayout.BORDER;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.roundRect(tooltipX, tooltipY, tooltipWidth, tooltipHeight, 5);
        this.ctx.fill();
        this.ctx.stroke();

        // Dessiner le titre si présent
        this.ctx.fillStyle = "black";
        let textY = tooltipY + padding;

        if (tooltipData.title) {
            this.ctx.font = `bold ${tooltipLayout.FONT}`;
            this.ctx.fillText(tooltipData.title, tooltipX + padding, textY + lineHeight / 2);
            textY += lineHeight;
            this.ctx.font = tooltipLayout.FONT;
        }

        // Dessiner le contenu
        lines.forEach(line => {
            this.ctx.fillText(line, tooltipX + padding, textY + lineHeight / 2);
            textY += lineHeight;
        });

        // Restaurer le contexte
        this.ctx.restore();
    }

    _wrapText(text, maxWidth) {
        // Diviser le texte en lignes distinctes d'abord (pour gérer les retours à la ligne explicites)
        const textLines = text.split('\n');
        const lines = [];

        textLines.forEach(textLine => {
            // Pour chaque ligne, vérifier si elle a besoin d'être enroulée
            const words = textLine.split(' ');
            if (words.length === 0) {
                lines.push('');
                return;
            }

            let currentLine = words[0];

            for (let i = 1; i < words.length; i++) {
                const word = words[i];
                const width = this.ctx.measureText(currentLine + ' ' + word).width;

                if (width < maxWidth) {
                    currentLine += ' ' + word;
                } else {
                    lines.push(currentLine);
                    currentLine = word;
                }
            }

            lines.push(currentLine);
        });

        return lines;
    }

    _hideTooltip() {
        if (this.activeTooltip) {
            this.activeTooltip = null;
            this._renderMainContent();
        }
    }

    reactionComplete(reactionComplete) {
        this.reset();
        this._cachedReactionComplete = reactionComplete;
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

    drawChemicalFormula(text, x, y) {
        let cursorX = x;

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const isSubscript = /\d/.test(char);
            if (isSubscript) {
                this.ctx.font = this.fontSmall;
                this.ctx.fillText(char, cursorX, y + 3); // décalé vers le bas
                cursorX += this.ctx.measureText(char).width;
                this.ctx.font = this.font;
            } else {
                this.ctx.fillText(char, cursorX, y);
                cursorX += this.ctx.measureText(char).width;

            }
        }

        return cursorX - x; // largeur totale du texte
    }

    // Méthode générique pour créer une zone cliquable avec du texte
    createClickableText(text, x, y, bold = false, callback, formula = false) {
        let w;
        if (formula) {
            w = this.drawChemicalFormula(text, x, y)
        } else {
            w = this.writeText(text, x, y, bold);
        }
        const h = this.fontHeight / 2;
        this.clickableZones.push(new ClickableZone(x, y - h, w, this.fontHeight, callback));
        return w;
    }

    // Nouvelle méthode pour créer une zone survolable avec infobulle
    createHoverableText(text, x, y, bold = false, tooltipData) {
        const w = this.writeText(text, x, y, bold);
        const h = this.fontHeight / 2;
        this.hoverableZones.push(new HoverableZone(x, y - h, w, this.fontHeight, tooltipData));
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

            // Créer une zone cliquable pour la formule
            let wFormule = this.createClickableText(reactif.formule, x, y, false, callback, true);

            // Créer également une zone survolable pour l'infobulle
            const tooltipData = {
                title: reactif.formule,
                content: this._getReactifTooltipContent(reactif)
            };
            this.hoverableZones.push(new HoverableZone(x, y - this.fontHeight / 2, wFormule, this.fontHeight, tooltipData));

            x += wFormule + spacing;
        });

        return {
            totalLines: Math.ceil(reactifs.length / maxPerLine),
            baseY: baseY
        };
    }

    // Méthode pour générer le contenu de l'infobulle pour un réactif
    _getReactifTooltipContent(reactif) {
        let content = "";

        // Informations de base
        content += `Nom: ${reactif.nom || '<?>'}\n`;
        content += `Formule: ${reactif.formule || '<?>'}\n`;

        // Coefficient stœchiométrique
        if (reactif.coefStoechiometrique !== undefined) {
            content += `Coefficient stœchiométrique: ${reactif.coefStoechiometrique}\n`;
        }

        content += `Masse molaire: ${reactif.masseMolaire !== undefined ? reactif.masseMolaire + ' g/mol' : '<?>'}\n`;

        // Propriétés physico-chimiques
        content += `Densité: ${reactif.densite !== undefined ? reactif.densite + ' g/mL' : '<?>'}\n`;

        content += `Pureté: ${reactif.purete !== undefined ? reactif.purete + '%' : '<?>'}\n`;

        // Informations quantitatives
        content += `Volume: ${reactif.volume !== undefined ? reactif.volume + ' mL' : '<?>'}\n`;

        // Informations commerciales - toujours afficher le prix
        content += `Prix: ${reactif.prixG !== undefined ? reactif.prixG + ' €/g' : '<?>'}\n`;

        content += `Recyclabilite: ${reactif.recyclabilite !== undefined ? reactif.recyclabilite + ' ' : '<?>'}\n`;

        return content;
    }

    // Méthode générique pour les éléments en ligne (solvants, catalyseurs, activations)
    renderInlineElements(elements, centerX, y, getTextFunc, removeCallback = null, formula = false) {
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
            const element = elements[index];
            const callback = removeCallback ?
                (event) => removeCallback(element, elements) :
                null;

            let w;
            if (callback) {
                w = this.createClickableText(text, x, y, false, callback, formula);

                // Ajouter également une zone survolable
                const tooltipData = {
                    title: element.formule || element.symbole || text,
                    content: this._getElementTooltipContent(element)
                };
                this.hoverableZones.push(new HoverableZone(x, y - h, w, this.fontHeight, tooltipData));
            } else {
                w = this.writeText(text, x, y);
            }

            x += w;

            if (index < texts.length - 1) {
                x += this.writeText(", ", x, y, true);
            }
        });

        return { finalX: x };
    }

    // Méthode pour générer le contenu de l'infobulle pour un élément générique
    _getElementTooltipContent(element) {
        let content = "";

        // Vérifier les propriétés communes possibles
        const properties = [
            { key: 'nom', label: 'Nom ' },
            { key: 'description', label: 'Description ' },
            { key: 'type', label: 'Type ' },
            { key: 'puissance', label: 'Puissance ' },
            { key: 'dureeM', label: 'Durée (min) ' },
            { key: 'volume', label: 'Volume (mL) ' }
        ];

        properties.forEach(prop => {
            if (element[prop.key]) {
                content += `${prop.label}: ${element[prop.key]}\n`;
            }
        });

        // Si aucune information supplémentaire n'est disponible
        if (!content) {
            content = "Aucune information supplémentaire disponible";
        }

        return content;
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

            // Ajouter une zone survolable pour l'infobulle
            const tooltipData = {
                title: activation.symbole,
                content: `Type: ${activation.type || "Activation"}\nDurée: ${activation.dureeM} min\nPuissance: ${activation.puissance} W`
            };
            this.hoverableZones.push(new HoverableZone(x, y - this.fontHeight / 2, w, this.fontHeight, tooltipData));

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
            (element, array) => this.controller.removeElement(element, array),
            true
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
            (element, array) => this.controller.removeElement(element, array),
            true
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

    produit(produit) {
        if (!produit) return;
        if (!this.lastArrowY) return;

        const layout = CanvasReactionMVCView.LAYOUT.PRODUIT;

        // Formule avec son coefficient stœchiométrique
        let x = layout.START_X;
        let y = this.lastArrowY;

        // Afficher le coefficient
        let wCoef = this.writeText(produit.coefStoechiometrique, x, y, true);
        x += wCoef;

        // Formule avec zone cliquable
        const callback = (event) => {
            const toAdd = event.button === 0 ? 1 : -1;
            this.controller.updateProduit(produit, toAdd);
        };

        const wFormule = this.createClickableText(produit.formule, x, y, false, callback, true);

        // Ajouter une zone survolable pour l'infobulle du produit
        const tooltipData = {
            title: produit.formule,
            content: this._getReactifTooltipContent(produit)
        };
        this.hoverableZones.push(new HoverableZone(x, y - this.fontHeight / 2, wFormule, this.fontHeight, tooltipData));
    }
}