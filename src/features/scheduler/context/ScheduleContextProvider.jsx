import { createContext, useState, useContext } from "react";
import { weeks } from "../data/weeks";
import { days } from "../data/days";
const ScheduleContext = createContext();

export const useScheduleData = () => useContext(ScheduleContext);
export const ScheduleContextProvider = ({ children }) => {
  const [scheduleData, setSchduleData] = useState({
    phone_no: "",
    day: `${days["Monday"]}`, // it will be string as html value is always string while setting state but we need to convert it into int while sending the data to server
    specific_week: weeks.EveryWeek,
    slot_start: "",
    slot_end: "",
    booking_start: "",
    booking_end: "",
    fees: 0,
    patient_limit: "",
    clinic_name: "",
    medical_shop: "",
    address: "",
  });

  const handleScheduleData = (event) => {
    setSchduleData((prevScheduleData) => {
      return { ...prevScheduleData, [event.target.name]: event.target.value };
    });
  };
  return (
    <ScheduleContext.Provider value={{ scheduleData, handleScheduleData }}>
      {children}
    </ScheduleContext.Provider>
  );
};
