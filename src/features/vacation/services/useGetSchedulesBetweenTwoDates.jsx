import { useQuery } from "@tanstack/react-query";
import getSchedulesBetweenTwoDates from "../utils/getSchedulesBetweenTwoDates";
import { useVacationContext } from "../context/VacationContextProvider";

export default function useGetSchedulesBetweenTwoDates(accessToken) {
  const { vacation } = useVacationContext();
  const { start, end } = vacation;
  return useQuery(["schedules", accessToken, start, end], () =>
    getSchedulesBetweenTwoDates(start, end, accessToken)
  );
}