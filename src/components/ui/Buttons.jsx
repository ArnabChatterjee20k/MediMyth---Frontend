import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import {grey} from '@mui/material/colors'

/**
 * Primary Button is an abstraction the main button
 * We can pass any props that we pass to a button.
 */
export const PrimaryButton = styled(Button)(({theme})=>({
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    boxShadow:'none',
    '&:hover': {
        backgroundColor: grey[800],
      },

}))