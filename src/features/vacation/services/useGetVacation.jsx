import { useQuery } from "@tanstack/react-query";
import getVacation from "../utils/getVacation";

export default function useGetVacation(accessToken) {
  return useQuery(["vacation",accessToken],()=>getVacation(accessToken))
}