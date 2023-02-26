import { serverAddress } from "../../../data/Constants"

/**
 * 
 * @param {string} phone phone number where otp is sent
 * @param {*} receivedOTP otp received
 * @param {*} body details of the doctor
 */
export const createDoctor = (phone, receivedOTP, body) => {
    const registerDoctor = "doctor/register?phone="
    const url = serverAddress + registerDoctor + phone
    const headers = {
        "Content-Type": "application/json",
        token: receivedOTP
    }
    const jsonBody = JSON.stringify(body)
    // console.log("🚀 ~ file: createDoctor.js ~ line 20 ~ createDoctor ~ phone,receivedOTP", phone, receivedOTP)
    return fetch(url, { headers: headers, body: jsonBody, method: "POST" })
}