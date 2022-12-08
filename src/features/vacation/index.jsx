import VacationOperator from "./components/VacationOperator"
import VacationContextProvider from "./context/VacationContextProvider"
export default function VacationManager() {
  return (
    <VacationContextProvider>
        <VacationOperator/>
    </VacationContextProvider>
  )
}
