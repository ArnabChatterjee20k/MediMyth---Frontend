import { format, parseISO} from "date-fns";
import { DateFormat } from "../../data/Constants";

export function getToday(){
    return format(new Date(), DateFormat)
}

export function getFormattedDate(dateObj,format=DateFormat){
    return format(dateObj,format)
}

export function parseDate(dateObj){
    return parseISO(dateObj)
}

export function parseTimeStamps(dateObj){
    return getFormattedDate(dateObj,"MMM d 'AT' h:m a")
}