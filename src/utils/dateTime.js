import { DateFormat } from "../data/Constants";
import { CustomDateFns } from "../lib/CustomDateFns/CustomDateFns";

export function getToday(){
    return CustomDateFns.formatDate(new Date(), DateFormat)
}

export function getFormattedDate(dateObj,dateFormat=DateFormat){
    return CustomDateFns.formatDate(dateObj,dateFormat)
}

export function parseDate(dateObj){
    return CustomDateFns.parseDateISO(dateObj)
}

export function parseTimeStamps(dateObj){
    return CustomDateFns.formatDate(dateObj,"MMM d 'AT' h:m a")
}

export function getWeekDay(dateObj){
    // it will get the index of the day of the weeek using the date like Nov 30
    return CustomDateFns.getDayIndex(new Date(dateObj))
}

export function getDifferenceDates(dateLeft,dateRight){
    return CustomDateFns.calendarDifferenceDates(dateLeft,dateRight)
}

export function getDifferenceHours(dateLeft,dateRight){
    return CustomDateFns.hoursBetweenDates(dateLeft,dateRight)
}

export function subtractHoursFromDate(date,hours){
    return CustomDateFns.subtractHoursFromDate(date,hours)
}

export function isToday(date){
    return CustomDateFns.isToday(date)
}

export function isTimeBeforeNow(date){
    return CustomDateFns.isBefore(new Date(),date)
}

export function isDayAfterToday(date){
    return CustomDateFns.isAfter(date,new Date())
}

 /*** 
* @param {String} timeString it is the time string
*/
export function format12hour(timeString){
   return new Date(new Date().toDateString()+" "+timeString).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
}