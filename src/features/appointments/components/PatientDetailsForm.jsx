import Field from "../../../components/Form/Field";
import { useAppointmentFormContext } from "../context/AppointmentFormContextProvider";

export default function PatientDetailsForm() {
    const {patientDetails,setPatientDetails} = useAppointmentFormContext()
    const {name,age,appointment_date,contact_number} = patientDetails
    const handleChange = (e)=>{
        setData(prevData=>({...prevData,[e.target.name]:e.target.value}))
    }
    const inputValue = value || data[name];
    const validInput = new RegExp(errorPattern).test(inputValue);
  return (
    <>
        <Field name="name" value={name}  type="text" label="Name" placeholder="Enter Your Name" changeHandler={handleChange} error={validInput}/>
        <Field name="name" value={name}  type="text" label="Name" placeholder="Enter Your Name" changeHandler={handleChange} error={validInput}/>
        <Field name="name" value={name}  type="text" label="Name" placeholder="Enter Your Name" changeHandler={handleChange} error={validInput}/>
        <Field name="name" value={name}  type="text" label="Name" placeholder="Enter Your Name" changeHandler={handleChange} error={validInput}/>
    </>
  )
}
