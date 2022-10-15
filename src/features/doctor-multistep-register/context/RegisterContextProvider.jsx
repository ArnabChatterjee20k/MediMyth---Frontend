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

    const doctorRes = useMutation((body)=>{
        console.log("🚀 ~ file: RegisterContextProvider.jsx ~ line 25 ~ doctorRes ~ body", body)
        return createDoctor(data.phone_no,otp,body)})

    const sendOTP = ()=>{
        alert("sending otp to",data.phone_no)
        console.log(data);
    }

    const createAccount = ()=>{
        doctorRes.mutate(data,{
            onSuccess : (res)=>{
                console.log("Response from the server",res);
            },
            onError : (err)=>{
                console.log("Error",err);
            }
        })
        console.log(data);
    }

  return (
    <RegisterContext.Provider value={{data,setData,otp,setOTP,sendOTP,createAccount}}>{children}</RegisterContext.Provider>
  );
};

export default RegisterContextProvider;
