import Fetcher from "../../../utils/fetcher";

export default function getSchedule(token){
    const endpoint = "schedule/"
    return new Fetcher(endpoint).getFetcherProfiles(token)
}