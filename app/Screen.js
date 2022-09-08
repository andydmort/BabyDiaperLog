import * as document from "document";

/**
 * Base class for screen controllers.
 */
export class Screen{
    /**
     * Constructor
     * @param {str} id Specifies the main screen rect id.
     * @param {boolean} hide Specifies if the screen should start hidden.
     */
    constructor(id, hide = true){
        this.el = document.getElementById(id);
        if(hide)
            this.hide();
    }

    hide(){
        this.el.style.display = "none";
    }

    show(){
        this.el.style.display = "inline";
    }

    /**
     * Sets a button handler.
     * @param {Element} el Specifies a button element.
     * @param {*} handler Specifies the action taken when the button is clicked.
     */
    setBtnHandler(el, handler){
        if(!el)
            throw Error(`Unable to set handler on unassigned`);
        if(handler)
            el.addEventListener("click", handler);
    }

};