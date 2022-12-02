import Fetcher from "../../../utils/fetcher"

export default function deleteSchedule(id,accessToken){
    const endpoint = `schedule/${id}`
    return new Fetcher(endpoint).deleteFetchProfiles(accessToken)
}