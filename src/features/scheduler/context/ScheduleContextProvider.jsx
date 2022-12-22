import { createContext, useState, useContext } from "react";
import { weeks } from "../../../data/weeks";
import { days } from "../../../data/days";
import { useNotificationContext } from "../../../contexts/ToastContextProvider/NotificationContextProvider";

const ScheduleContext = createContext();

export const useScheduleData = () => useContext(ScheduleContext);
export const ScheduleContextProvider = ({ children }) => {
  const defaultScheduleStructure = {
    phone_no: "",
    day: [days["Monday"]], // it will be string as html value is always string while setting state but we need to convert it into int while sending the data to server
    specific_week: [weeks.EveryWeek],
    slot_start: "",
    slot_end: "",
    booking_start: "7",
    booking_end: "24",
    fees: "0",
    patient_limit: "",
    clinic_name: "",
    medical_shop: "",
    address: "",
  };

  const { notify } = useNotificationContext();

  const [scheduleData, setSchduleData] = useState(defaultScheduleStructure);

  const handleScheduleData = (event) => {
    setSchduleData((prevScheduleData) => {
      return { ...prevScheduleData, [event.target.name]: event.target.value };
    });
  };

  const handleSelection = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value)
    setSchduleData((prevScheduleData) => {
      return { ...prevScheduleData, [event.target.name]: value };
    });
  };

  const reset = () => {
    setSchduleData(defaultScheduleStructure);
    notify("Fields Reset!", "warning");
  };

  const getScheduleData = () => {
    // this is a abstraction of the schedule data so that empty fields get converted to null while submiting data
    const submissionData = {}
    // to send only the data entered. But we can send null value even to the server. But some fields are having "" instead of null. So not sending them.
    Object.keys(scheduleData)
      .filter((e) => scheduleData[e] !== "" && scheduleData[e] !== null)
      .map((e)=>submissionData[e]=scheduleData[e])
    if(! Number.parseInt(submissionData["specific_week"])){
      delete submissionData["specific_week"];
    }
    return submissionData
  };
  return (
    <ScheduleContext.Provider
      value={{ scheduleData, handleScheduleData, reset , getScheduleData , handleSelection}}
    >
      {children}
    </ScheduleContext.Provider>
  );
};
