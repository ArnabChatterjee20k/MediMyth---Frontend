import { useContext,createContext , useState  } from "react";

const VacationContext = createContext()

export const useVacationContext =()=> useContext(VacationContext)

export default function VacationContextProvider({children}) {
    const defaultVacationData = {
        start:"",
        end:"",
        reason:""
    }   
    const [vacation,setVacation] = useState(defaultVacationData)
  return (
    <VacationContext.Provider value={{vacation,setVacation}}>
        {children}
    </VacationContext.Provider>
  )
}
