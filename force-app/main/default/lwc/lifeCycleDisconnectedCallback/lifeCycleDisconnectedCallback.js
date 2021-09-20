import { LightningElement } from 'lwc';

export default class LifeCycleDisconnectedCallback extends LightningElement {

    constructor()
    {
        super();
        console.log("Inside Constructor");
    }

    connectedCallback()
    {
        console.log("Inside Connected Callback");
    }

    renderedCallback()
    {
        console.log("Inside Rendered Callback");
    }

    disconnectedCallback()
    {
        alert('Inside Child Compoenet Disconnected callback called');
    }
}