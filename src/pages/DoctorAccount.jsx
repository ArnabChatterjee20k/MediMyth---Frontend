import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Typography from "@mui/material/Typography";
import { useNotificationContext } from "../contexts/ToastContextProvider/NotificationContextProvider";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

export default function DoctorAccount() {
  const { notify } = useNotificationContext();
  const signout = useSignOut();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        maxWidth: 600,
        marginInline: "auto",
        minHeight: "80vh",
        marginBlock: 4,
      }}
    >
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyItems="center"
        gap={1}
      >
        <Typography
          textAlign="center"
          fontSize="1.5rem"
          fontWeight="bold"
          marginY={5}
        >
          Thanks for joining MediMyth
        </Typography>
        <TaskAltIcon color="success" fontSize="large" />
        <IconButton
          onClick={() => {
            signout();
            notify("Signed Out!", "warning");
            navigate("/account/doctor");
          }}
        >
          <LogoutIcon color="action" />
        </IconButton>
      </Stack>
      <Stepper activeStep={2} orientation="vertical">
        <Step>
          <StepLabel>
            <Typography variant="h6">Account Created</Typography>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel>
            <Typography variant="h6">Email Sent to Admin</Typography>
          </StepLabel>
        </Step>

        <Step>
          <StepLabel error={true}>
            <Typography color="error" variant="h6">
              Account Not Activated
            </Typography>
          </StepLabel>
          <StepContent>
            <Typography color="error">
              First Admin Will View the Profile. Then They will activate the
              account.
            </Typography>
          </StepContent>
        </Step>
      </Stepper>
    </Box>
  );
}
