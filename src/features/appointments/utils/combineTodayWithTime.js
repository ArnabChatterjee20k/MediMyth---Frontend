/**
 * 
 * @param {*String} timeString the time string
 * @returns Date Object. The time will just change.
 */
export default function combineTodayWithTime(timeString){
    const curDateTime = new Date()
    const curDate = curDateTime.getDate()
    const curMonth = curDateTime.getMonth() + 1
    const curYear = curDateTime.getFullYear()

    return new Date(`${curMonth} ${curDate} ${curYear},${timeString}`)
}