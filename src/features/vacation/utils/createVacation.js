import Fetcher from "../../../utils/fetcher"

export default function createVacation(accessToken,body,schedules_ids){
    const endpoint = "vacation/"
    const data = {...body,schedules_ids}
    return new Fetcher(endpoint).postFetchProfiles(data,accessToken)
}