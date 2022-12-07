import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Typography from "@mui/material/Typography";

export default function DoctorAccount() {
  return (
    <Box
      sx={{
        maxWidth: 600,
        marginInline: "auto",
        minHeight: "80vh",
        marginBlock: 4,
      }}
    >
      <Stack flexDirection="row" alignItems="center" justifyItems="center" gap={1}>
        <Typography
          textAlign="center"
          fontSize="1.5rem"
          fontWeight="bold"
          marginY={5}
        >
          Thanks for joining MediMyth
        </Typography>
        <TaskAltIcon color="success" fontSize="large"/>
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
          <StepLabel>
            <Typography variant="h6">Account Activated</Typography>
          </StepLabel>
          <StepContent>
            <Typography>
              Admin Viewed the Profile. They will activate the account.
            </Typography>
          </StepContent>
        </Step>
      </Stepper>
    </Box>
  );
}
