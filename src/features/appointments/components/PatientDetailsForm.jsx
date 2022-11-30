import Field from "../../../components/Form/Field";
import { useAppointmentFormContext } from "../context/AppointmentFormContextProvider";
import { PhoneNumber } from "../../../data/validErrorPatterns";
export default function PatientDetailsForm() {
    const {patientDetails,setPatientDetails} = useAppointmentFormContext()
    const {name,age,contact_number} = patientDetails
    const handleChange = (e)=>{
      setPatientDetails(prevData=>({...prevData,[e.target.name]:e.target.value}))
    }
    const inputValue = contact_number;
    const validInput = new RegExp(PhoneNumber).test(inputValue);
  return (
    <>
        <Field name="name" value={name}  type="text" label="Name" placeholder="Enter Your Name" changeHandler={handleChange} />
        <Field name="age" value={age}  type="text" label="Age" placeholder="Enter Your Age" changeHandler={handleChange}/>
        <Field name="contact_number" value={contact_number} showError={!validInput} helperText={!validInput && "Enter a valid Phone Number"}  type="text" label="Phone Number" placeholder="Enter Your Phone Number" changeHandler={handleChange}/>
    </>
  )
}
