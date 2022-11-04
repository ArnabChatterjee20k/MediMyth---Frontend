import PropTypes from 'prop-types'
import Typography  from '@mui/material/Typography'
import { PrimaryTextColor , PrimaryFontWeigth } from '../../assets/styles/DefaultProperties'

/**
 * 
 * @param {string} text the text of the logo
 * @param {any} properties if any other properties you want to apply. You can apply style , properties of the typography component,etc
 * @returns 
 */
export const SecondaryLogo = ({text,...properties})=>{
    return(
        <Typography fontWeight={PrimaryFontWeigth} color={PrimaryTextColor} variant='h5'>
            {text}
        </Typography>
    )
}

SecondaryLogo.propTypes = {
    text:PropTypes.string.isRequired,
    properties:PropTypes.any
};
SecondaryLogo.defaultProps = {
    text:"SecondaryLogo"
}