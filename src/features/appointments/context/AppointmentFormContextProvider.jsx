import { createContext, useContext, useState , useRef } from "react";

const AppointmentFormContext = createContext();

export const useAppointmentFormContext = useContext(AppointmentFormContext)

export default function AppointmentFormContextProvider({ children }) {
  const [patientDetails, setPatientDetails] = useState({
    name: "",
    age: "",
    appointment_date: "",
    contact_number: "",
  });

  const [otp,setOTP] = useState("")

  return (
    <AppointmentFormContext.Provider value={{patientDetails,setPatientDetails,otp,setOTP}}>
      {children}
    </AppointmentFormContext.Provider>
  );
}
