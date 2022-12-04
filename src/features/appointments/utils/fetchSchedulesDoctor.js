import Fetcher from "../../../utils/fetcher";

export default function fetchSchedulesDoctor(token) {
    const endpoint = "schedule/"
    return new Fetcher(endpoint).getFetcherProfiles(token)
}
