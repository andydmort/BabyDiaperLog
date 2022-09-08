import { FileIOFitbit } from "./FileIO";
import { ScreenHistory } from "./ScreenHistory";
import { ScreenMain } from "./ScreenMain";
import { RecordList } from "./RecordList";
const NUMBER_HISTORY_ITEMS = 100;
let screenMain;
let screenHistory;
// Create the RecordList
const fileIO = new FileIOFitbit({ encoding: 'json' });
const recordList = new RecordList({
  fileIoInterface: fileIO, 
  recordMax: NUMBER_HISTORY_ITEMS,
  onRecord: (records)=>{
    screenHistory.setHistoryUI(records);
    screenMain.setMainUi(records[0]);
  }
});
// Create the screens
screenMain = new ScreenMain({
  btnWetHandler: (evt)=>{
    console.log("Wet clicked");
    recordList.addRecord("WET", new Date());
  },
  btnMixHandler: (evt)=>{
    console.log("Mix clicked");
    recordList.addRecord("MIX", new Date());
  },
  btnPoopyHandler: (evt)=>{
    console.log("Poopy clicked");
    recordList.addRecord("POOPY", new Date());
  },
  btnHistHandler: (evt)=>{
    console.log("HISTORY clicked");
    screenMain.hide();
    screenHistory.show();
  } 
});
screenHistory = new ScreenHistory({
  numRecordItems: NUMBER_HISTORY_ITEMS,
  btnRtnClickHandler: (evt)=>{
    screenHistory.hide();
    console.log("RETURN clicked");
    screenMain.show();
  }
});
let startingRecords = recordList.getRecords();
console.log(`Starting Records: ${JSON.stringify(startingRecords)}`);
console.log("Setting previous history");
screenHistory.setHistoryUI(startingRecords);
console.log("Setting Main screen text");
screenMain.setMainUi(startingRecords[0]);
console.log("Showing main screen");
screenMain.show();