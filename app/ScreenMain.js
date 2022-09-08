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
     * @param {Object} options.btnWetId Specifies the Wet button id.
     * @param {Object} options.btnWetHandler Specifies the action to take when the wet button is 
     * clicked.
     * @param {Object} options.btnMixtId Specifies the mix button id.
     * @param {Object} options.btnMixHandler Specifies the action to take when the mix button
     * is clicked.
     * @param {Object} options.btnPoopytId Specifies the poopy button id.
     * @param {Object} options.btnPoopyHandler Specifies the action to take when the poopy button
     * is clicked.
     * @param {Object} options.btnHistId Specifies the history button id.
     * @param {Object} options.btnHistHandler Specifies the action taken when the history button 
     * is clicked.
     * @param {Object} options.diaperTypeTextId Specifies the id of the diaper type text element.
     * @param {Object} options.dataTextId Specifies the id fo the data text element..
     * @param {Object} options.hide Specifies if the screen should start hidden.
     */
    constructor({
        id="main-screen__rect",
        btnWetId="btn-wet",
        btnWetHandler = undefined,
        btnMixId="btn-mix",
        btnMixHandler = undefined,
        btnPoopyId="btn-poopy",
        btnPoopyHandler = undefined,
        btnHistId = "btn-history",
        btnHistHandler = undefined,
        diaperTypeTextId = 'main-screen__center-diaper-type-text',
        dateTextId = 'main-screen__center-date-text',
        hide = true
    }){
        super(id, hide);
        // Mix button
        this.btnMix = document.getElementById(btnMixId)
        this.setBtnHandler(this.btnMix, btnMixHandler);
        // Wet button
        this.btnWet = document.getElementById(btnWetId)
        this.setBtnHandler(this.btnWet, btnWetHandler);
        // Poopy button
        this.btnPoopy = document.getElementById(btnPoopyId)
        this.setBtnHandler(this.btnPoopy, btnPoopyHandler);
        // Right button
        this.btnHist = document.getElementById(btnHistId)
        this.setBtnHandler(this.btnHist, btnHistHandler);
        // diaperType text
        this.diaperTypeText = document.getElementById(diaperTypeTextId);
        // Date text
        this.dateText = document.getElementById(dateTextId);
    }

    /**
     * Alters the Main screen ui according to a record.
     * @param {{diaperType: string, date: Date}} record Specifies a record to display.
     */
    setMainUi(record){
        if(record)
        {
            this.dateText.text = FormatDate(DateFromJson(record.date));
            this.diaperTypeText.text = record.diaperType;
        }
    }
}