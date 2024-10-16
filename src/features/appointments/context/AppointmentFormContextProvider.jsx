import { createContext, useContext, useState, useRef } from "react";
import { getFormattedDate } from "../../../utils/dateTime";
import useAppointmentMaker from "../services/useAppointmentMaker";
import requestOTP from "../../../utils/otp"
import { useNotificationContext } from "../../../contexts/ToastContextProvider/NotificationContextProvider";

const AppointmentFormContext = createContext();

export const useAppointmentFormContext = () =>
useContext(AppointmentFormContext);

export default function AppointmentFormContextProvider({ children }) {
  const {notify} = useNotificationContext()
  const [patientDetails, setPatientDetails] = useState({
    name: "",
    age: "",
    contact_number: "",
  });
  
  const [otp, setOTP] = useState("");
  const appointment = useRef();
  const setAppointmentDate = (date) => {
    const format = "yyyy-MM-dd";// format accepting by server
    appointment.current = getFormattedDate(new Date(date), format);
  };
  
  const {book} = useAppointmentMaker()

  const sendOTP = ()=>{
    alert("sending otp to "+patientDetails.contact_number)
    requestOTP(Number.parseInt(patientDetails.contact_number))
  }
  const registerPatient = (schedule_id)=>{
    notify("Verifying OTP","info")
    book(schedule_id,patientDetails.contact_number,otp,{...patientDetails,appointment_date:appointment.current,age:Number.parseInt(patientDetails.age)})
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
