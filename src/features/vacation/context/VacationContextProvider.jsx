import { useContext, createContext, useState, useRef } from "react";
import { useAuthUser } from "react-auth-kit";
import useCreateVacation from "../services/useCreateVacation";

const VacationContext = createContext();

export const useVacationContext = () => useContext(VacationContext);

export default function VacationContextProvider({ children }) {
  const defaultVacationData = {
    start: "2022-12-10",
    end: "2022-12-17",
    reason: "sdf",
  };
  const [vacation, setVacation] = useState(defaultVacationData);
  const [schedules, setSchedules] = useState({});

  const getCheckedSchedulesId = () => {
    return Object.keys(schedules).filter((key) => {
      if (schedules[key] !== false) return key ;
    });
  };

  const { create } = useCreateVacation();

  const auth = useAuthUser()
  function submit() {
    const token = auth()?.token
    create(vacation, token,getCheckedSchedulesId());
  }

  return (
    <VacationContext.Provider
      value={{
        vacation,
        setVacation,
        schedules,
        setSchedules,
        submit
      }}
    >
      {children}
    </VacationContext.Provider>
  );
}
