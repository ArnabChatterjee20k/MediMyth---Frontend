import React from "react";
import PropTypes from "prop-types";
import Background from "../assets/img/ProfileBackground.svg";
import { SecondaryButton } from "../components/ui/Buttons";
import { PrimaryTextColor } from "../assets/styles/DefaultProperties";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import StayCurrentPortraitOutlinedIcon from "@mui/icons-material/StayCurrentPortraitOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
const DoctorProfile = ({ edit }) => {
  const dummyData = {
    name: "Arnab Chatterjee",
    activeDoctorId: 3512,
    phoneNumber: 906531234,
    email: "jennie.nichols@example.com",
    profilePicture: "https://randomuser.me/api/portraits/men/75.jpg",
    category: "Dentist",
  };
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${Background})`,
          width: "100%",
          minHeight: "300px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box sx={{ position: "relative", paddingInline: "2em" }}>
        {/* Profile image */}
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
            }}
          >
            <img
              loading="lazy"
              src={dummyData.profilePicture}
              alt={dummyData.name}
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

        {/* edit profile button */}
        {edit && (
          <Stack
            direction="row-reverse"
            maxWidth="48rem"
            marginX="auto"
            marginY="1em"
          >
            <SecondaryButton>Edit Profile</SecondaryButton>
          </Stack>
        )}

        {/* doctor details */}
        <Stack maxWidth="48rem" gap={0.5} marginX="auto">
          {dummyData?.name && (
            <Typography variant="h4" fontWeight={700}>
              {dummyData.name}
            </Typography>
          )}

          {dummyData?.activeDoctorId && (
            <Typography>@{dummyData.activeDoctorId}</Typography>
          )}

          {dummyData?.phoneNumber && (
            <Typography>{dummyData.phoneNumber}</Typography>
          )}

          {dummyData?.email && <Typography>{dummyData.email}</Typography>}

          {/* showing the badge of degree */}
          <Chip
            label={dummyData?.category}
            avatar={
              <WorkspacePremiumIcon
                sx={{ backgroundColor: "none", fill: "white" }}
              />
            }
            sx={{
              alignSelf: "flex-start",
              backgroundColor: "#2563EB",
              color: "white",
              marginBlock:1
            }}
            // color={"primary"}
          />
        </Stack>
      </Box>
    </Box>
  );
};

DoctorProfile.propTypes = {
  edit: PropTypes.bool.isRequired,
};
DoctorProfile.defaultProps = {
  edit: true,
};

export default DoctorProfile;
