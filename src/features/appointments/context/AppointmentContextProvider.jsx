import { createContext, useContext, useState } from "react";

const AppointmentContext = createContext();

export const useAppointment = () => useContext(AppointmentContext);

const AppointmentContextProvider = ({ children }) => {
  const [appointment, setAppointment] = useState([]);
  return (
    <AppointmentContext.Provider value={{ appointment, setAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentContextProvider;
