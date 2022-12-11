import React from 'react'
import Typography  from '@mui/material/Typography'
import Stack  from '@mui/material/Stack'
const Footer = () => {
  return (
    <Stack direction="row" justifyContent="center">
        <Typography fontWeight={400} fontSize="1rem" lineHeight="44px">
            MediMyth @ 2022 ALL RIGHTS RESERVED
        </Typography>
    </Stack>
  )
}

export default Footer