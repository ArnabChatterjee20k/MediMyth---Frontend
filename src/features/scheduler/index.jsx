import  ScheduleForm from "./components/ScheduleForm";
import { ScheduleContextProvider } from "./context/ScheduleContextProvider";
function Scheduler(){
    return <ScheduleContextProvider><ScheduleForm/></ScheduleContextProvider>
}
export default Scheduler