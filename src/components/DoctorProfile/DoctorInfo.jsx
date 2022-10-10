import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import StayCurrentPortraitOutlinedIcon from "@mui/icons-material/StayCurrentPortraitOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import PropTypes from "prop-types";

const DoctorInfo = ({ doctorInfo }) => {
  return (
    <>
      {/* doctor details */}
      <Stack maxWidth="48rem" gap={0.5} marginX="auto" alignItems="flex-start">
        {doctorInfo?.name && (
          <Typography variant="h4" fontWeight={700}>
            {doctorInfo.name}
          </Typography>
        )}

        {doctorInfo?.activeDoctorId && (
          <Typography>@{doctorInfo.activeDoctorId}</Typography>
        )}

        {doctorInfo?.phoneNumber && (
          <Stack direction="row" gap={1} marginTop={0.5}>
            <StayCurrentPortraitOutlinedIcon />
            <Typography>{doctorInfo.phoneNumber}</Typography>
          </Stack>
        )}

        {doctorInfo?.email && (
          <Stack direction="row" gap={1} marginTop={0.5}>
            <EmailOutlinedIcon /> <Typography>{doctorInfo.email}</Typography>
          </Stack>
        )}

        {/* about the doctor degree and registration */}
        <Stack direction="row" alignItems="center" gap={1}>
          {doctorInfo?.category && (
            <Chip
              label={doctorInfo.category}
              avatar={
                <WorkspacePremiumIcon
                  sx={{ backgroundColor: "none", fill: "white" }}
                />
              }
              sx={{
                backgroundColor: "#2563EB",
                color: "white",
                marginBlock: 1,
              }}
            />
          )}
          {doctorInfo?.reg && (
            <Chip
              color="info"
              label={doctorInfo.reg}
              avatar={<HowToRegOutlinedIcon sx={{ fill: "white" }} />}
            />
          )}
        </Stack>
      </Stack>
    </>
  );
};

DoctorInfo.propTypes = {
  doctorInfo:PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
      reg: PropTypes.number,
      activeDoctorId: PropTypes.string,
      phoneNumber: PropTypes.string,
      email:  PropTypes.string,
      profilePicture:  PropTypes.string,
      category:  PropTypes.string.isRequired,
    }
  )
};

DoctorInfo.defaultProps = {
  doctorInfo:{
    name: "Arnab Chatterjee",
    reg: 3512,
    activeDoctorId: "MMD-12",
    phoneNumber: "906531234",
    email: "jennie.nichols@example.com",
    profilePicture: "https://randomuser.me/api/portraits/men/75.jpg",
    category: "Dentist",
  }
};

export default DoctorInfo;
