import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { SecondaryButton } from "./Buttons";
import { SecondaryLogo } from "../Logo/SecondaryLogo";
import "../../assets/styles/AppointmentCardStyles.css";

function Header({ active }) {
  // a helper component
  return (
    <Stack flexDirection="row" justifyContent="space-between" width="100%">
      <SecondaryLogo text="MediMyth" />
      <Box
        component="span"
        sx={{
          bgcolor: active ? "success.light" : "error.main",
          width: 10,
          height: 10,
          borderRadius: "50%",
        }}
      />
    </Stack>
  );
}

function SideHeader({ active }) {
  // helper component for sideheader
  return (
    <Box className={`card ${active ? "availableCard" : "unavailableCard"}`}>
      <Typography sx={{ rotate: "270deg", fontSize: "1.35rem" }}>
        {active ? "Available" : "Unavailable"}
      </Typography>
    </Box>
  );
}

export default function AppointmentCard({
  edit,
  active,
  time,
  patientLimit,
  totalPatient,
  buttonText,
  cardAction,
  helperText
}) {
  // main card component
  return (
    <Stack
      flexDirection="row"
      sx={{
        position: "relative",
        maxWidth: "100%",
        marginLeft: "1.5rem",
      }}
    >
      <SideHeader active={active} />
      <Card
        sx={{
          backgroundColor: "#FFF4F7",
          boxShadow: "none",
          marginLeft: "50px",
          minWidth: "80%",
        }}
      >
        <CardHeader title={<Header active={active} />} />
        <CardContent>
          <Stack alignItems="flex-start" gap={1}>
            {helperText && <Typography variant="body1" fontWeight="bold" color={active?"green":"red"}>{helperText}</Typography>}
            <Typography variant="body1">{time}</Typography>
            <Typography variant="body1">
              Patients - {totalPatient}/
              {patientLimit === null ? "Not Mentioned" : patientLimit}
            </Typography>
            <SecondaryButton
              disabled={edit ? false : !active}
              onClick={(edit || active) ? cardAction : null}
            >
              {buttonText}
            </SecondaryButton>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}
