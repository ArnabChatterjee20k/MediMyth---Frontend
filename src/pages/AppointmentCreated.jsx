import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
import {SecondaryLogo} from "../components/Logo/SecondaryLogo"
import Stack  from '@mui/material/Stack';
import { useParams } from 'react-router-dom';

export default function AppointmentCreated() {
  const {id} = useParams()

  return (
    <Stack width="100%" justifyContent="center" alignItems="center" minHeight="80vh" gap={3}>
        <VerifiedSharpIcon sx={{fontSize:"15.5rem",marginTop:"2rem",color:"green"}}/>
        <SecondaryLogo text="Your Appointment Is Created"/>
        {id && <SecondaryLogo text={`Your id is ${id}`}/>};
    </Stack>
  )
}
