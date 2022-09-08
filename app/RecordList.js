import { DateToJson } from "./DateHelpers";

/**
 * An ordered list of records.
 */
export class RecordList{
    /**
     * @param {object} options Specifies the options. 
     * @param {FileIoInterface} options.fileIOInterface Specifies a fileIO interface that reads and writes
     * js objects.
     * @param {function(object[])} options.onRecord Specifies a function that is called when a 
     * record is added. The function called will get an updated list of records.
     * @param {number} options.recordMax Specifies the maximun records in the records list.
     */
    constructor({fileIoInterface, onRecord, recordMax = 10}){
        this.onRecord = onRecord;
        this.max = recordMax;
        this.io = fileIoInterface;
        try{
            this.records = this.io.read();
        }
        catch(err){
            console.error(err);
            console.log("Setting records to []");
            this.records = [];
        }
        // Records need to be an array
        if(!Array.isArray(this.records))
            this.records = [];
    }

    /**
     * Adds a record to the record list.
     * @param {str} side Specifies the side of the event.
     * @param {date} date Specifies the date of the event.
     */
    addRecord(side, date){
        // add record to record
        const record = {side, date: DateToJson(date)};
        this.records.unshift(record);
        // remove any extra records
        while(this.records.length > this.max){
            this.records.pop();
        }
        // Alert the UI.
        this.onRecord(this.records);
        // Reset the store
        this.io.write(this.records);
    } 

    /**
     * @returns {object[]} Returns the list of records.
     */
    getRecords(){
        return this.records;
    }
}