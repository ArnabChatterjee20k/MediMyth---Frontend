import Field from "../../../components/Form/Field"
import { useVacationContext } from "../context/VacationContextProvider"


export default function VacationDetails() {
    const {vacation,setVacation} = useVacationContext()
    const handleChange = (e)=>{
        setVacation(prevData=>{
            return {...prevData,[e.target.name]:e.target.value}
        })
    }
  return (
    <>
        <Field name="start" type="date" changeHandler={handleChange} label="Start" value={vacation.start}/>
        <Field name="end" type="date" changeHandler={handleChange} label="End" min={vacation.start}  value={vacation.end}/>
        <Field name="reason"  type="text" rows={10} multiline changeHandler={handleChange} label="Reason" value={vacation.reason} placeholder="Enter the reason(if any)"/>
    </>
  )
}
