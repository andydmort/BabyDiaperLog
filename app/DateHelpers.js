
export function DateToJson(date){
    return date.toJSON();
}

export function DateFromJson(jsonStr){
    return new Date(jsonStr);
}

/**
 * Creates a string from a number with a padded 0 in front.
 * @param {number} val Specifies a number that should be padded.
 * @returns {string} String form of the padded number.
 */
function Pad(val){
    if(val < 10)
        return `0${val}`; 
    else
        return `${val}`;
}

/**
 * Creates a formated time string.
 * @param {Number} hours Hours from Js Date object. Exected values 0 - 23.
 * @param {Number} mins Minutes from Js Date object. Exected values 0 - 59.
 * @returns {String} Formated time string.
 */
function FormatTime(hours, mins){
    let amPm = "";
    if(hours < 12)
        amPm = "AM";
    else
        amPm = "PM";
    let formatedHours = (hours+1)%12;
    let formatedMins = mins+1;

    return `${Pad(formatedHours)}:${Pad(formatedMins)} ${amPm}`;
}
/**
 * Creates a formated Day string.
 * @param {Number} month month from Js Date object. Exected values 0 - 11.
 * @param {Number} day date from Js Date object. Exected values 0 - 31.
 * @returns {String} Formated date string.
 */
function FormatDay(month, day){
    return `${Pad(month+1)}/${Pad(day)}`;
}

/**
 * Formats a date string from a js Date object.
 * @param {Date} date Js date object.
 * @returns {String} Formatted date string.
 */
export function FormatDate(date){
    let hours = date.getHours(); // 0 - 23
    let mins = date.getMinutes(); // 0 - 59

    let month = date.getMonth(); // 0 - 11
    let day = date.getUTCDate(); // 1 - 31

    return `${FormatDay(month, day)} ${FormatTime(hours, mins)}`;
}