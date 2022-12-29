import Fetcher from "../../../utils/fetcher";

export default function updatePassword(phone,email,password,otp) {
    const endpoint = `doctor/password?phone=${phone}`
    const body = {email,password}
    const fetcher = new Fetcher(endpoint)
    return fetcher.putFetchUsers(body,{"Content-Type": "application/json",token:otp})
}