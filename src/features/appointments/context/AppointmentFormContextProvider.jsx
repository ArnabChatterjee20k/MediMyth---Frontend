import { createContext, useContext, useState, useRef } from "react";
import { getFormattedDate } from "../../../utils/dateTime";

const AppointmentFormContext = createContext();

export const useAppointmentFormContext = () =>
  useContext(AppointmentFormContext);

export default function AppointmentFormContextProvider({ children }) {
  const [patientDetails, setPatientDetails] = useState({
    name: "Arnab CHatterjee",
    age: "18",
    contact_number: "9064846599",
  });

  const [otp, setOTP] = useState("");
  const appointment = useRef();
  const setAppointmentDate = (date) => {
    appointment.current = getFormattedDate(new Date(date), "yyyy/MM/dd");
  };
  const sendOTP = ()=>{
    console.log(appointment.current);
    alert("sending otp to "+appointment.current);
  }
  const registerPatient = ()=>{
    console.log(patientDetails);
  }
  return (
    <AppointmentFormContext.Provider
      value={{
        patientDetails,
        setPatientDetails,
        otp,
        setOTP,
        setAppointmentDate,
        appointment_date: appointment.current,
        sendOTP,
        registerPatient
      }}
    >
      {children}
    </AppointmentFormContext.Provider>
  );
}
