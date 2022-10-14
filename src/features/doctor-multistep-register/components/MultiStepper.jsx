import { useState } from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { PrimaryButton } from "../../../components/ui/Buttons";
const MultiStepper = ({steps}) => {
  const [activeForm, setActiveForm] = useState(0);
  const maxSteps = steps.length;
  const {Component} = steps[activeForm];
  const handleNext = (e) => {
    e.preventDefault()
    steps[activeForm].onSubmit && steps[activeForm].onSubmit()
    setActiveForm((prevActiveForm) => prevActiveForm + 1);
  };

  const handleBack = () => {
    setActiveForm((prevActiveForm) => prevActiveForm - 1);
  };
  return (
    <Box
      sx={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        square
        elevation={1}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{steps[activeForm].label}</Typography>
      </Paper>
      {/* rendering a form for validation */}
        <Stack component="form" onSubmit={handleNext} padding={2} alignItems="center">
            <Component/>
            <MobileStepper
             sx={{width:"80%"}}
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeForm}
              nextButton={
                <PrimaryButton
                  type="submit"
                  size="small"
                  disabled={steps[activeForm].onSubmit?false:activeForm === maxSteps - 1}
                >
                  Next
                </PrimaryButton>
              }
              backButton={
                <PrimaryButton
                  size="small"
                  onClick={handleBack}
                  disabled={activeForm === 0}
                >
                  Back
                </PrimaryButton>
              }
            />
        </Stack>
    </Box>
  );
};

export default MultiStepper;
