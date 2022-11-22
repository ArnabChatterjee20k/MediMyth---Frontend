import AppointmentViewer from "../components/DoctorProfile/AppointmentViewer"
import ScheduleOperator from "../features/scheduler/components/ScheduleOperator"
import Scheduler from "../features/scheduler/index"

export const doctorProfileActions = [
    {name:"Schedule",link:"",Componenent:()=><Scheduler/>},
    {name:"Appointment",link:"appointment",Componenent:()=><AppointmentViewer/>},
    // {name:"Schedule",link:"/",componenent:<h2>Hellow</h2>}
]