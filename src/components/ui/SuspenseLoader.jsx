import {Dna} from "react-loader-spinner"
import Stack  from "@mui/material/Stack"
const SuspenseLoader = () => {
  return (
    <Stack alignItems="center" justifyContent="center" sx={{
      width:"100%",minHeight:"100vh"
    }}>
      <Dna
      height = "80"
      width = "80"
      radius = "9"
      color = 'green'
    />
    </Stack>
  )
}

export default SuspenseLoader