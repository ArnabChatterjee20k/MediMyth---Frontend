import { createContext, useState, useContext } from "react";
import { weeks } from "../data/weeks";
import { days } from "../data/days";
import { useNotificationContext } from "../../../contexts/ToastContextProvider/NotificationContextProvider";

const ScheduleContext = createContext();

export const useScheduleData = () => useContext(ScheduleContext);
export const ScheduleContextProvider = ({ children }) => {
  const defaultScheduleStructure = {
    phone_no: "",
    day: `${days["Monday"]}`, // it will be string as html value is always string while setting state but we need to convert it into int while sending the data to server
    specific_week: weeks.EveryWeek,
    slot_start: "",
    slot_end: "",
    booking_start: "7",
    booking_end: "24",
    fees: "0",
    patient_limit: "",
    clinic_name: "",
    medical_shop: "",
    address: "",
  }

  const {notify} = useNotificationContext()

  const [scheduleData, setSchduleData] = useState(defaultScheduleStructure);

  const handleScheduleData = (event) => {
    setSchduleData((prevScheduleData) => {
      return { ...prevScheduleData, [event.target.name]: event.target.value };
    });
  };

  const reset = ()=>{
    setSchduleData(defaultScheduleStructure)
    notify("Fields Reset!","warning")
  }
  return (
    <ScheduleContext.Provider value={{ scheduleData, handleScheduleData , reset }}>
      {children}
    </ScheduleContext.Provider>
  );
};
