import { format, parseISO,getDay} from "date-fns";
import { DateFormat } from "../../data/Constants";

export function getToday(){
    return format(new Date(), DateFormat)
}

export function getFormattedDate(dateObj,dateFormat=DateFormat){
    return format(dateObj,dateFormat)
}

export function parseDate(dateObj){
    return parseISO(dateObj)
}

export function parseTimeStamps(dateObj){
    return getFormattedDate(dateObj,"MMM d 'AT' h:m a")
}

export function getWeekDay(dateObj){
    // it will get the index of the day of the weeek using the date like Nov 30
    return getDay(new Date(dateObj))
}