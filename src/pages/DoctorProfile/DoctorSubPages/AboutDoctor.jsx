import React from "react";
import Background from "../../../assets/img/ProfileBackground.svg";
import { SecondaryButton } from "../../../components/ui/Buttons";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import DoctorInfo from "../../../components/DoctorProfile/DoctorInfo";
import DoctorImage from "../../../components/DoctorProfile/DoctorImage";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import useDoctorProfile from "../../../services/useDoctorProfile";
import Loader from "../../../components/ui/Loader";
import { Outlet } from 'react-router-dom'

const AboutDoctor = ({ edit }) => {
  const {id:active_doctor_id} = useParams();
  const {data,isLoading,isError,error} = useDoctorProfile(active_doctor_id)

  // const dummydoctorProfile = {
  //   name: "Arnab Chatterjee",
  //   reg_no: 3512,
  //   activeId: [{"active_doctor_id": "MMD-1"}],
  //   phone_no: "906531234",
  //   email: "jennie.nichols@example.com",
  //   profile_pic: "https://randomuser.me/api/portraits/men/75.jpg",
  //   category: "Dentist",
  //   active:true
  // };
  
  if(isLoading) return <Loader/>
  if(isError) {
    if(error.status === "redirect"){
      return <img src="https://embed.lottiefiles.com/animation/84885" width="100%" height="100vh"></img>
    }
    return <h1>Error</h1>
  }
  const doctorProfile = data[0]
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
          profilePicture={doctorProfile?.profile_pic}
          name={doctorProfile?.name}
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
        <DoctorInfo doctorInfo={doctorProfile} />
      </Box>
      {/* for rendering the child */}
      <Outlet/> 
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