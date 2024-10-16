import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../queryClient/queryClient.jsx";
import Fetcher from "../utils/fetcher.js";

const route = `profiles/doctors`;
export const useDoctorProfileById = (active_doctor_id) => {
  const endpoint = `/${route}/${active_doctor_id}`;
  const fetcherService = new Fetcher(endpoint);

  return useQuery(["doctor_profile", active_doctor_id], () =>
    fetcherService.getFetcherUsers()
  );
};
export const useDoctorProfileByEmail = (token) => {
  const endpoint = `${route}/myaccount`;
  const fetcherService = new Fetcher(endpoint);
  return useQuery(
    ["doctor_profile", "myaccount" , token],
    () => fetcherService.getFetcherProfiles(token),
  );
};