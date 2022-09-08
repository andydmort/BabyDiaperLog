import * as document from "document";
import { DateFromJson, FormatDate } from "./DateHelpers";
import { Screen } from "./Screen";

/**
 * Main screen controller
 */
export class ScreenMain extends Screen {
    /**
     * Constuctor
     * @param {Object} options 
     * @param {Object} options.id Specifies the main screen rect id.
     * @param {Object} options.btnLeftId Specifies the left button id.
     * @param {Object} options.btnLeftHandler Specifies the action to take when the left button is 
     * clicked.
     * @param {Object} options.btnRightId Specifies the right button id.
     * @param {Object} options.btnRightHandler Specifies the action to take when the right button
     * is clicked.
     * @param {Object} options.btnHistId Specifies the history button id.
     * @param {Object} options.btnHistHandler Specifies the action taken when the history button 
     * is clicked.
     * @param {Object} options.sideTextId Specifies the id of the side text element.
     * @param {Object} options.dataTextId Specifies the id fo the data text element..
     * @param {Object} options.hide Specifies if the screen should start hidden.
     */
    constructor({
        id="main-screen__rect",
        btnLeftId="btn-left",
        btnLeftHandler = undefined,
        btnRightId="btn-right",
        btnRightHandler = undefined,
        btnHistId = "btn-history",
        btnHistHandler = undefined,
        sideTextId = 'main-screen__center-side-text',
        dateTextId = 'main-screen__center-date-text',
        hide = true
    }){
        super(id, hide);
        // Right button
        this.btnRight = document.getElementById(btnRightId)
        this.setBtnHandler(this.btnRight, btnRightHandler);
        // Right button
        this.btnLeft = document.getElementById(btnLeftId)
        this.setBtnHandler(this.btnLeft, btnLeftHandler);
        // Right button
        this.btnHist = document.getElementById(btnHistId)
        this.setBtnHandler(this.btnHist, btnHistHandler);
        // Side text
        this.sideText = document.getElementById(sideTextId);
        // Date text
        this.dateText = document.getElementById(dateTextId);
    }

    /**
     * Alters the Main screen ui according to a record.
     * @param {{side: string, date: Date}} record Specifies a record to display.
     */
    setMainUi(record){
        if(record)
        {
            this.dateText.text = FormatDate(DateFromJson(record.date));
            this.sideText.text = record.side;
        }
    }
}