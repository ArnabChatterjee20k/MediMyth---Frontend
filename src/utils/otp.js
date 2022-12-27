import Fetcher from "./fetcher"

export default function requestOTP(phone){
    return new Fetcher(`otp/${phone}`).getFetcherUsers()
}