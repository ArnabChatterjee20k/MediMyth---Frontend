import { useMutation } from "@tanstack/react-query";
import { createContext, useState, useContext } from "react";
import { createDoctor } from "../utils/createDoctor";
import { useNotificationContext } from "../../../contexts/ToastContextProvider/NotificationContextProvider";
const RegisterContext = createContext();

export const useRegisterContext = () => useContext(RegisterContext);

const RegisterContextProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "Arnab",
    email: "homeuse.hu.1@gmail.com",
    phone_no: "9832791417",
    reg_no: "123",
    address: "adf",
    category: "dentist",
    password: "1234",
    reff_code: "1212",
  });

  const [otp, setOTP] = useState("");

  // accessing notification
  const { notify } = useNotificationContext();

  // function for sending post request for creating doctor account
  const doctorRes = useMutation((body) =>
    createDoctor(data.phone_no, otp, body).then(
        (res)=>res
    )
  );

  const sendOTP = () => {
    alert("sending otp to", data.phone_no);
    console.log(data);
  };

  const createAccount = () => {
    doctorRes.mutate(data, {
      onSuccess: async(res) => {
        const data = await res.json()
        const status = res.status
        
        console.log("🚀 ~ file: RegisterContextProvider.jsx ~ line 46 ~ createAccount ~ data,status", data,status)
        if(status == 200){
            data.status && notify(data.status,"success");
        }
        else{
            data.status && notify(data.status,"error");
        }
      },
      onError: (err) => {
        console.log(err);
        notify(err,"success");
      },
    });
  };

  return (
    <RegisterContext.Provider
      value={{ data, setData, otp, setOTP, sendOTP, createAccount }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContextProvider;
