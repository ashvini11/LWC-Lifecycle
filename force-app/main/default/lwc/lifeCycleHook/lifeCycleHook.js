import { LightningElement } from 'lwc';

export default class LifeCycleHook extends LightningElement {
    //name;
    displayChild = false;

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

    // changeHandler(event)
    // {
    //     this.name = event.target.value
    // }

    // errorCallback(error,stack)
    // {
    //     console.log(error.message);
    //     console.log(stack);
    // }

    handleClick()
    {
        this.displayChild = !this.displayChild;
    }


}