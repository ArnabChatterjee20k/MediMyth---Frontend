import { useQuery } from "@tanstack/react-query";
import { serverAddress } from "../data/Constants";
import { getFetcher } from "../utils/fetcher";

const endpoint = `${serverAddress}/profiles/doctors`
const useDoctorProfile = (active_doctor_id) => useQuery(["doctor_profile",active_doctor_id],()=>getFetcher(`${endpoint}/${active_doctor_id}`))

export default useDoctorProfile