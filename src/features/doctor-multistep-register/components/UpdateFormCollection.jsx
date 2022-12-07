import { lazy, useEffect } from "react";
import { useRegisterContext } from "../context/RegisterContextProvider";
const ContactInfoForm =  lazy(()=>import("./ContactInfoForm"));
const DegreeInfoForm =  lazy(()=>import("./DegreeInfoForm"));
import { useDoctorProfileByEmail } from "../../../services/useDoctorProfile";
import { useAuthUser } from "react-auth-kit";

import MultiStepperFormWrapper from "../../../components/Form/MultiStepperFormWrapper";


export default function UpdateFormCollection() {
    const auth = useAuthUser()
    const token = auth()?.token

    const {data:profileData} = useDoctorProfileByEmail(token)

    const {setData,updateAccount,resetData} = useRegisterContext()

    useEffect(() => {
        profileData && setData(prevData=>{return {...prevData,...profileData[0]} })
      return () => {
        resetData()
      }
    }, [profileData])
    


    const label = "Update Profile"
    const elements = [
        { Component: <ContactInfoForm noPassword/>,label:label},
        { Component: <DegreeInfoForm />,label:label,onSubmit:()=>updateAccount(token) },
      ]
    return profileData?<MultiStepperFormWrapper steps={elements}/>:<h1>Loading...</h1>
}
