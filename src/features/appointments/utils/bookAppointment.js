import Fetcher from "../../../utils/fetcher"

/**
 * 
 * @param {Number} schedule_id id of the schedule to book
 * @param {String} contact_number phone number of the patient where the otp is sent 
 * @param {Object} body body of information to be sent for appointment
 * @param {String} otp otp sent to the contact number 
 * @returns 
 */
export default function bookAppointment (schedule_id,contact_number,otp,body){
    console.log({schedule_id,contact_number,otp,body});
    const endpoint = `appointment/${schedule_id}?phone=${contact_number}`
    return new Fetcher(endpoint).postFetchUsers(body,{
        token:otp
    })
}