import ReactionMVCView from "../reaction.mvc.view";

export default class CanvasReactionMVCView extends ReactionMVCView {

    listeners = [];

    constructor( controller, canvas ) {
        super( controller )
        this.canvas = canvas;
        this.ctx = this.canvas.getContext( "2d" );
    }

    clear() {
        this.listeners.forEach( listener => {
            this.canvas.removeEventListener( "mousedown", listener );
        }   );
        this.listeners = [];
            
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    reactionComplete( reactionComplete ) {
        this.clear();
        super.reactionComplete( reactionComplete );
    }


    rpReactifs( reactifs ) {
        let x = 10;
        const y = 50;
        const spacing = 20;
        
        // Stocke les positions des zones cliquables
        const zonesCliquables = [];
        
        reactifs.forEach(reactif => {
            const text = `${reactif.coefStoechiometrique} ${reactif.formule}`;
            this.ctx.fillText(text, x, y);
            const textWidth = this.ctx.measureText(text).width;
        
            zonesCliquables.push({
                reactif: reactif,
                xStart: x,
                xEnd: x + textWidth,
                yStart: y - 10,
                yEnd: y + 10
            });
        
            x += textWidth + spacing;
        });
        
        // Un seul listener ajouté
        const onClick = (event) => {
            event.preventDefault();
            const rect = this.canvas.getBoundingClientRect();
            const clickX = event.clientX - rect.left;
            const clickY = event.clientY - rect.top;
        
            zonesCliquables.forEach(zone => {
                if (clickX >= zone.xStart && clickX <= zone.xEnd &&
                    clickY >= zone.yStart && clickY <= zone.yEnd) {
                    const toAdd = event.button === 0 ? 1 : -1;
                    this.controller.updateStoechiometrie(zone.reactif, toAdd, reactifs);
                }
            });
        }
        this.canvas.addEventListener("mousedown", onClick);
        this.listeners.push(onClick);
        
    }

    _reactif( reactif, x, y ) {
        console.log( "Not implemented" );
    }

    rpSolvants( solvants ) {
        console.log( "Not implemented" );
    }

    rpCatalyseurs( catalyseurs ) {
        console.log( "Not implemented" );
    }

    rpActivations( activations ) {
        console.log( "Not implemented" );
    }

    ptReactifs( reactifs ) {
        console.log( "Not implemented" );
    }

    ptActivations( activations ) {
        console.log( "Not implemented" );
    }

    purifReactifs( reactifs ) {
        console.log( "Not implemented" );
    }

    purifActivations( activations ) {
        console.log( "Not implemented" );
    }

    produit( produit ) {
        console.log( "Not implemented" );
    }
    
}