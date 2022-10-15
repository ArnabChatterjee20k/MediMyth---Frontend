import { serverAddress , registerDoctor } from "../../../data/Constants"

/**
 * 
 * @param {string} phone phone number where otp is sent
 * @param {*} receivedOTP otp received
 * @param {*} body details of the doctor
 */
export const createDoctor = (phone,receivedOTP,body)=>{
    const url = serverAddress+registerDoctor+phone
    console.log(url);
    const headers = {
        "Content-Type": "application/json",
        token:receivedOTP
    }
    const jsonBody = JSON.stringify(body)
    return fetch(url,{headers,jsonBody,method:"POST"}).then(res=>res.json)
}