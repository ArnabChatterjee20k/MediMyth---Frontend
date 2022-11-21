import Fetcher from "../../../utils/fetcher"
export async function createSchedule(token,body){
    const endpoint = `schedule/`
        return new Fetcher(endpoint).postFetchProfiles(body,token)
}