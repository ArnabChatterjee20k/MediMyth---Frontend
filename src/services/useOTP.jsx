import { useQuery } from "@tanstack/react-query";
import requestOTP from "../utils/otp";

export default function useOTP(phone) {
  return useQuery(["request-otp",phone],()=>requestOTP(Number(phone)),{enabled:false})
}
