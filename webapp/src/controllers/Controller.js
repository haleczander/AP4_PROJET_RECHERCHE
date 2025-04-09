export default class Controller {

    constructor( container ) {
        this.container = container;
        this.eventListeners = [];
        this.subscriptions = [];
        init();
    }

    init() {}

    destroy() {
        this.eventListeners.forEach(
            ([target, event, callback]) => target.removeEventListener(event, callback)
        );
        this.subscriptions.forEach(
            subscription => subscription.unsubscribe()
        );
    }

    addListener( target, event, callback ) {
        target.addEventListener( event, callback );
        this.eventListeners.push( [target, event, callback] );
    }

    addSubscription( observable ) {
        const subscription = observable.subscribe();
        this.subscriptions.push( subscription );
    }
    
}