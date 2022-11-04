import Box from "@mui/material/Box";
import { PrimaryTextColor } from "../../assets/styles/DefaultProperties";
import PropTypes from "prop-types";
import Avatar  from "@mui/material/Avatar";
import deepOrange  from "@mui/material/colors/deepOrange";
const DoctorImage = ({ profilePicture, name }) => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "48rem",
          marginInline: "auto",
          marginBlockEnd: "2em",
          minHeight: "1em"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-6rem",
            borderRadius: "800px",
            border: `6px solid ${PrimaryTextColor}`,
            backgroundColor: "white",
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
            }}
          />):<Avatar sx={{bgcolor:deepOrange[500],height: "154px",
          width: "154px",fontSize:"4rem"}}>{name.charAt(0)}</Avatar>}
        </Box>
      </Box>
    </>
  );
};

DoctorImage.propTypes = {
  profilePicture: PropTypes.string.isRequired,
  name:PropTypes.string.isRequired
};

DoctorImage.defaultProps = {
  profilePicture: "Tile",
  name:"Doctorname"
};

export default DoctorImage;
