import Field from "../../../components/Form/Field";
import { useAppointmentFormContext } from "../context/AppointmentFormContextProvider";

export default function PatientDetailsForm() {
    const {patientDetails,setPatientDetails} = useAppointmentFormContext()
    const {name,age,appointment_date,contact_number} = patientDetails
    const handleChange = (e)=>{
      setPatientDetails(prevData=>({...prevData,[e.target.name]:e.target.value}))
    }
    // const inputValue = patientDetails[name];
    // const validInput = new RegExp(errorPattern).test(inputValue);
  return (
    <>
        <Field name="name" value={name}  type="text" label="Name" placeholder="Enter Your Name" changeHandler={handleChange} />
        <Field name="age" value={age}  type="text" label="Age" placeholder="Enter Your Sge" changeHandler={handleChange}/>
        <Field name="contact_number" value={contact_number}  type="text" label="Phone Number" placeholder="Enter Your Phone Number" changeHandler={handleChange}/>
    </>
  )
}
