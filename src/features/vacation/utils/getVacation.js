import Fetcher from "../../../utils/fetcher"
export default function getVacation(accessToken){
    const endpoint = "vacation/"
    return new Fetcher(endpoint).getFetcherProfiles(accessToken)
}