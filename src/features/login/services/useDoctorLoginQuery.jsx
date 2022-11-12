import { useQuery } from "@tanstack/react-query";
import { loginDoctor } from "../utils/loginDoctor";

export const useDoctorLoginQuery = (data) =>
  useQuery(
    ["Doctor Login", data.email],
    () => loginDoctor(data.email, data.password),
    {
      enabled: false,
    }
  );
