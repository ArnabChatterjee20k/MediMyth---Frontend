import Box from "@mui/material/Box";
import { PrimaryTextColor } from "../../assets/styles/DefaultProperties";
import PropTypes from "prop-types";
import Avatar  from "@mui/material/Avatar";
import deepOrange  from "@mui/material/colors/deepOrange";
import IconButton  from "@mui/material/IconButton";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
const DoctorImage = ({ profilePicture, name ,displayInFree,imageProps,imageBoxProps}) => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "48rem",
          marginInline: "auto",
          marginBlockEnd: displayInFree && "2em",
          minHeight: "1em",
        }}
      >
        <Box
          sx={{
            position: displayInFree && "absolute",
            top: displayInFree && "-6rem",
            borderRadius: "800px",
            border: `6px solid ${PrimaryTextColor}`,
            backgroundColor: "white",
            ...imageBoxProps
          }}
        >
          {profilePicture?(<img
            loading="lazy"
            src={profilePicture}
            alt={name}
            style={{
              maxWidth: "100%",
              borderRadius: "1000px",
              height: "154px",
              width: "154px",
              objectFit: "cover",
              objectPosition: "center",
              ...imageProps
            }}
          />):<Avatar sx={{bgcolor:deepOrange[500],height: "154px",
          width: "154px",fontSize:"4rem",...imageProps}}>{name.charAt(0)}</Avatar>}
        </Box>
        
        {/* update / upload image */}
        <IconButton sx={{position:"absolute",top:"2rem",marginLeft:"7rem",backgroundColor:"white",":hover":{backgroundColor:"#f2f2f2"}}}><AddAPhotoIcon/></IconButton>
      </Box>
    </>
  );
};

DoctorImage.propTypes = {
  profilePicture: PropTypes.string,
  name:PropTypes.string.isRequired,
  displayInFree:PropTypes.bool.isRequired
};

DoctorImage.defaultProps = {
  profilePicture: "Tile",
  name:"Doctorname",
  displayInFree:true
};

export default DoctorImage;
