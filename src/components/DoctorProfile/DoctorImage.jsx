import Box from "@mui/material/Box";
import { PrimaryTextColor } from "../../assets/styles/DefaultProperties";
import PropTypes from "prop-types";

const DoctorImage = ({ profilePicture, name }) => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "48rem",
          marginInline: "auto",
          marginBlockEnd: "2em",
          minHeight: "1em",
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
          <img
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
          />
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
