import ScheduleOperator from "./components/ScheduleOperator";
import { ScheduleContextProvider } from "./context/ScheduleContextProvider";
function Scheduler(){
    return <ScheduleContextProvider><ScheduleOperator/></ScheduleContextProvider>
}
export default Scheduler