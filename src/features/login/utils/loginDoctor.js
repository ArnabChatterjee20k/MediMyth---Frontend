import Fetcher from "../../../utils/fetcher"

/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
export const loginDoctor = (email,password)=>{
    const endpoint = `/doctor/?email=${email}&password=${password}`
    return new Fetcher(endpoint).getFetcherProfiles()
}