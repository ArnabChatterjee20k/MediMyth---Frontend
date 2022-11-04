import { createContext, useContext, useState } from "react";

const AppointmentContext = createContext();

export const useAppointment = () => useContext(AppointmentContext);

const AppointmentContextProvider = ({ children }) => {
  const [appointment, setAppointment] = useState([]);
  
  // will be storing the primitive value of date object.
  // Storing primitive value here to cut down the problem of referential equality of objects
  // valueOf will give primitive values
  const [appointmentDate,setAppointmentDate] = useState(null)
  return (
    <AppointmentContext.Provider value={{ appointment, setAppointment , appointmentDate,setAppointmentDate }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentContextProvider;
