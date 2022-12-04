import { useQuery } from "@tanstack/react-query";
import { fetchSchedules } from "../utils/fetchSchedules";
import fetchSchedulesDoctor from "../utils/fetchSchedulesDoctor";

export const useSchedulesPatient = (doctor_id) => {
  return useQuery(["doctor-schedules-id", doctor_id], () => {
    return fetchSchedules(doctor_id);
  });
};

export const useSchedulesDoctor = (token) => {
  return useQuery(["doctor-schedules-token", token], () => {
    return fetchSchedulesDoctor(token);
  });
};