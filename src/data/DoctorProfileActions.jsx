import AppointmentViewer from "../components/DoctorProfile/AppointmentViewer"
import Scheduler from "../features/scheduler/index"
import VacationManager from "../features/vacation"

export const doctorProfileActions = [
    {name:"Schedule",link:"",Componenent:()=><Scheduler/>},
    {name:"Appointment",link:"appointment",Componenent:()=><AppointmentViewer edit={true}/>},
    {name:"Vacation",link:"vacation",Componenent:()=><VacationManager/>}
]