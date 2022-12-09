import MultiStepperFormWrapper from "../../../components/Form/MultiStepperFormWrapper";
import { useVacationContext } from "../context/VacationContextProvider";
import SchedulesList from "./SchedulesList";
import VacationDetails from "./VacationDetails";

export default function VacationForm() {
  const {submit} = useVacationContext()
  const elements = [{ Component: <VacationDetails />, label: "Vacation" },{Component:<SchedulesList/>,label:"Schedule List",onSubmit:submit}];
  return <MultiStepperFormWrapper steps={elements} />;
}