import * as document from "document";
import { Screen } from "./Screen";
import { DateFromJson, FormatDate } from "./DateHelpers";

/**
 * History screen controller
 */
export class ScreenHistory extends Screen {
    /**
     * Constructor
     * @param {object} options
     * @param {str} options.id Specifies the history screen rect id.
     * @param {str} options.btnRtnId Specifies the return button id.
     * @param {function} options.btnRtnClickHandler Specifies the action taken when the return button is
     * clicked.
     * @param {boolean} options.hide Specifies if this screen should start hidden.
     * @param {str} options.recordUiId Specifies the main portion of a record element. The list of 
     * record element should take the form "<recordUiId>[N]". N being and index up to  options.numRecordItems"
     * @param {str} options.numRecordItems Specifies the number of available records in the history screen.
     */
    constructor({
        id='history-screen__rect', 
        btnRtnId = 'history-screen__rtn-btn',
        btnRtnClickHandler = undefined,
        hide = true,
        recordUiId = 'history-screen__item',
        numRecordItems = 10 // Specifies the number of ui screen items
    }){
        super(id, hide);
        // Return button
        this.btnRtn = document.getElementById(btnRtnId);
        this.setBtnHandler(this.btnRtn, btnRtnClickHandler);
        this.recordUiId = recordUiId;
        this.numRecordItems = numRecordItems;
    };

    /**
     * Alters the UI according to a list of records.
     * @param {{side: str, date: Date}[]} records 
     */
    setHistoryUI(records){
        for(let idx = 0; idx < this.numRecordItems; idx++){
            const uiItemId = `${this.recordUiId}[${idx}]`;
            const uiItem = document.getElementById(uiItemId);
            const record = records[idx];
            if(record){
                const side = record.side;
                const date = DateFromJson(record.date);
                uiItem.text = `${FormatDate(date)} | ${side}`;
                uiItem.style.display = 'inline';
            }
            else{
                uiItem.style.display = 'none';
            }
        }    
    }

};