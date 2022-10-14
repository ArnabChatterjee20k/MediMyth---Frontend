import { createContext , useState , useContext } from "react";

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
    const sendOTP = ()=>{
        alert("sending otp to",data.phone_no)
    }
    const validateOTP = ()=>{
        alert("validating otp for ",otp)
    }
    const createAccount = ()=>{
        console.log(data);
    }
    // we will define here all the react query hooks with fetcher function from utils and refetch option and then expose them as value
    // example {data:OTP,isLoading:otpLoading,error:otpError} = useQuery(fetcher)
    // or use some separate hooks
  return (
    <RegisterContext.Provider value={{data,setData,otp,setOTP,sendOTP,validateOTP,createAccount}}>{children}</RegisterContext.Provider>
  );
};

export default RegisterContextProvider;
