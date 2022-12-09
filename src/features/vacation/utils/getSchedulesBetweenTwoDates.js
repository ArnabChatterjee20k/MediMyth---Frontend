import Fetcher from "../../../utils/fetcher"

export default function getSchedulesBetweenTwoDates(start,end,accessToken) {
    const endpoint = `schedule/?start=${start}&end=${end}`
    return new Fetcher(endpoint).getFetcherProfiles(accessToken)
}
