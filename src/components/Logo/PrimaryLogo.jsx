import PropTypes from 'prop-types'
import Typography  from '@mui/material/Typography'
import { PrimaryTextColor , PrimaryFontWeigth } from '../../assets/styles/DefaultProperties'

/**
 * 
 * @param {string} text the text of the logo
 * @param {any} properties if any other properties you want to apply. You can apply style , properties of the typography component,etc
 * @returns 
 */
export const PrimaryLogo = ({text,children,...properties}) => {
  return (
    <Typography variant='h4' fontWeight={PrimaryFontWeigth} color={PrimaryTextColor} {...properties}>
        {text}
    </Typography>
  )
}

PrimaryLogo.propTypes = {
    text:PropTypes.string.isRequired,
    properties:PropTypes.any
}
PrimaryLogo.defaultProps = {
    text:"PrimaryLogo"
}