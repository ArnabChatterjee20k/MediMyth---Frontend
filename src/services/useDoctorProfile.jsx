import { useQuery } from "@tanstack/react-query";
import { serverAddress } from "../data/Constants";
import { getFetcher } from "../utils/fetcher";

const endpoint = `${serverAddress}/profiles/doctors`
export const useDoctorProfileById = (active_doctor_id) => useQuery(["doctor_profile",active_doctor_id],()=>getFetcher(`${endpoint}/${active_doctor_id}`))
export const useDoctorProfileByEmail = (options=null,condition=true)=>useQuery(["doctor_profile","myaccount"],()=>getFetcher(`${endpoint}/myaccount`,options),{enabled:condition})