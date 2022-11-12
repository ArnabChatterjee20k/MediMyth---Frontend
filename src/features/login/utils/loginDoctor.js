import { serverAddress } from "../../../data/Constants"

/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
export const loginDoctor = (email,password)=>{
    const registerDoctor = `/doctor?email=${email}&password=${password}`
    const url = serverAddress+registerDoctor
    return fetch(url)
}