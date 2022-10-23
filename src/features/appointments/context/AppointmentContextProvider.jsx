import { createContext, useContext, useState,useRef } from "react";

const AppointmentContext = createContext();

export const useAppointment = () => useContext(AppointmentContext);

const AppointmentContextProvider = ({ children }) => {
  const [appointment, setAppointment] = useState([]);

  // will be storing the primitive value of date object.
  // Storing primitive value here to cut down the problem of referential equality of objects
  // valueOf will give primitive values
  // ref used to avoid useless re renders
  const appointmentDate = useRef(null)
  const setAppointmentDate = (date)=> {appointmentDate.current=date}
  return (
    <AppointmentContext.Provider value={{ appointment, setAppointment , appointmentDate,setAppointmentDate }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentContextProvider;
