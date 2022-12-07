import Fetcher from "../../../utils/fetcher";

export default function updateDoctor(body,accessToken){
    const endpoint = "doctor/"
    return new Fetcher(endpoint).putFetchProfiles(body,accessToken)
}