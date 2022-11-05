import CircularProgress from '@mui/material/CircularProgress';
import Stack  from '@mui/material/Stack';

const Loader = () => {
  return (
    <Stack sx={{ color: 'grey.500' , minWidth:"100%",minHeight:"100vh" , alignItems:"center",justifyContent:"center"}} spacing={2} direction="row">
      <CircularProgress color="secondary" />
    </Stack>
  )
}

export default Loader