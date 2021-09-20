import { LightningElement } from 'lwc';

export default class LifeCycleHookErrorCallback extends LightningElement {

    constructor()
    {
        super();
        console.log('Inside child Constructor');
    }

    connectedCallback()
    {
        console.log('Inside child Connected callback');
        //throw new Error('Loading of child compoenet is failed');
    }

    renderedCallback()
    {
        console.log("Inside child Rendered Callback");
    }
}