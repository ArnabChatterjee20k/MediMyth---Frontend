import { useMutation } from "@tanstack/react-query";
import bookAppointment from "../utils/bookAppointment";
import {useNotificationContext} from "../../../contexts/ToastContextProvider/NotificationContextProvider"
import { useNavigate } from "react-router-dom";

export default function useAppointmentMaker() {
  const {notify} = useNotificationContext()
  const redirect = useNavigate()
  const appointmentMaker = useMutation(({schedule_id,contact_number,otp,body})=>bookAppointment(schedule_id,contact_number,otp,body))

  function book(schedule_id,contact_number,otp,body){
    const response = appointmentMaker.mutate({schedule_id,contact_number,otp,body},{
        onSuccess:(data)=>{
            const {status,appointment_id} = data
            // redirect to the page where appointment_id will be visible
            // send the otp 
            redirect(`/active-appointment/${appointment_id}`)
        },
        onError:(err)=>{
          try{
              const {res} = err
              res?notify(res,"error"):notify("some error occured!","error")
            }
            catch{
              notify("some error occured!","error")
            }
        }
    })
  }

  return {book}

}
