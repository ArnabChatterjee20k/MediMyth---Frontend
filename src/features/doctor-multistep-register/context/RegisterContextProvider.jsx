import { useMutation } from "@tanstack/react-query";
import { createContext , useState , useContext } from "react";
import { createDoctor } from "../utils/createDoctor";

const RegisterContext = createContext();

export const useRegisterContext =()=> useContext(RegisterContext)

const RegisterContextProvider = ({children}) => {
    const [data,setData] = useState({
        name:"",
        email:"",
        phone_no:"",
        reg_no:"",
        address:"",
        category:"",
        password:"",
        reff_code:""
    })

    const [otp,setOTP] = useState("")

    const doctorRes = useMutation((body)=>createDoctor(data.phone_no,otp,body))

    const sendOTP = ()=>{
        alert("sending otp to",data.phone_no)
    }
    const validateOTP = ()=>{
        doctorRes.mutate((data),console.log("done"))
        alert("validating otp for ",otp)
    }
    const createAccount = ()=>{
        console.log(data);
    }

  return (
    <RegisterContext.Provider value={{data,setData,otp,setOTP,sendOTP,validateOTP,createAccount}}>{children}</RegisterContext.Provider>
  );
};

export default RegisterContextProvider;
