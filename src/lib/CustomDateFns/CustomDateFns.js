import { format, parseISO,getDay, differenceInCalendarDays , differenceInHours} from "date-fns";
export class CustomDateFns{
    /**
     * 
     * @param {*Date} -  dateObj date object
     * @param {*String} -  dateFormat format of the date
     * @returns formatted date
     */
    static formatDate(dateObj,dateFormat){
        return format(dateObj,dateFormat)
    }
    /**
     * 
     * @param {*Date} -  dateObj date object
     * @returns parsed date
     */
    static parseDateISO(dateObj){
        return parseISO(dateObj)
    }
    /**
     * 
      * @param {*Date} - dateObj date object
     * @returns the index of the date(0 to 6)
     */
    static getDayIndex(dateObj){
        return getDay(dateObj)
    }

    /**
     * 
     * @param {*Date} - date on left
     * @param {*Date} - date on right
     * @returns the calendar difference between 2 dates.
     */
    static calendarDifferenceDates(dateLeft,dateRight){
        return differenceInCalendarDays(dateLeft,dateRight)
    }

    /**
     * 
     * @param {*Date} dateLeft 
     * @param {*Date} dateRight 
     * @returns 
     */
    static hoursBetweenDates(dateLeft,dateRight){
        return differenceInHours(dateLeft,dateRight)
    }
}