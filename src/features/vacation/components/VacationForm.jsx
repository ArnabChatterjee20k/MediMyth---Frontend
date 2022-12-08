import MultiStepperFormWrapper from "../../../components/Form/MultiStepperFormWrapper";
import VacationDetails from "./VacationDetails";

export default function VacationForm() {
  const elements = [{ Component: <VacationDetails />, label: "Vacation" }];
  return <MultiStepperFormWrapper steps={elements} />;
}