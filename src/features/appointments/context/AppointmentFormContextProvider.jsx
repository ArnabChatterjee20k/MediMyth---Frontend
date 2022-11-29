import { createContext, useContext, useState, useRef } from "react";
import { getFormattedDate } from "../../../utils/dateTime";

const AppointmentFormContext = createContext();

export const useAppointmentFormContext = () =>
  useContext(AppointmentFormContext);

export default function AppointmentFormContextProvider({ children }) {
  const [patientDetails, setPatientDetails] = useState({
    name: "",
    age: "",
    contact_number: "",
  });

  const [otp, setOTP] = useState("");
  const appointment = useRef();
  const setAppointmentDate = (date) => {
    appointment.current = getFormattedDate(new Date(date), "yyyy/MM/dd");
  };
  return (
    <AppointmentFormContext.Provider
      value={{
        patientDetails,
        setPatientDetails,
        otp,
        setOTP,
        setAppointmentDate,
        appointment_date: appointment.current,
      }}
    >
      {children}
    </AppointmentFormContext.Provider>
  );
}
