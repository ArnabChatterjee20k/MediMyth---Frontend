import React from "react";
import Background from "../../assets/img/ProfileBackground.svg";
import { SecondaryButton } from "../../components/ui/Buttons";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import DoctorInfo from "../../components/DoctorProfile/DoctorInfo";
import DoctorImage from "../../components/DoctorProfile/DoctorImage";
import PropTypes from "prop-types";

const AboutDoctor = ({ edit }) => {
  const dummyData = {
    name: "Arnab Chatterjee",
    reg: 3512,
    activeDoctorId: "MMD-12",
    phoneNumber: "906531234",
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
        <DoctorImage
          profilePicture={dummyData?.profilePicture}
          name={dummyData?.name}
        />

        {/* edit profile button */}
        <Stack
          direction="row-reverse"
          maxWidth="48rem"
          marginX="auto"
          marginY="1em"
        >
          {/* if edit is true then edit profile other wise book appointment*/}
          {edit ? (
            <SecondaryButton>Edit Profile</SecondaryButton>
          ) : (
            <SecondaryButton>Book</SecondaryButton>
          )}
        </Stack>

        {/* About the doctor personal info */}
        <DoctorInfo doctorInfo={dummyData} />
      </Box>
    </Box>
  );
};

AboutDoctor.propTypes = {
  edit: PropTypes.bool.isRequired,
};
AboutDoctor.defaultProps = {
  edit: true,
};

export default AboutDoctor;
