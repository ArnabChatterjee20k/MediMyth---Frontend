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
      <SecondaryLogo text="26/11/11" />
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

export default function AppointmentCard() {
  // main card component
  return (
    <Stack
      flexDirection="row"
      sx={{
        position: "relative",
        maxWidth: {
          xs: "100%",
          md: "50%",
        },
      }}
    >
      <SideHeader active={true} />
      <Card
        sx={{
          backgroundColor: "#FFF4F7",
          boxShadow: "none",
          marginLeft: "50px",
          minWidth: "80%",
        }}
      >
        <CardHeader title={<Header active={true} />} />
        <CardContent>
          <Stack alignItems="flex-start" gap={1}>
            <Typography variant="body1">9:30am - 11:00am</Typography>
            <Typography variant="body1">Patients - 16/50</Typography>
            <SecondaryButton>Book</SecondaryButton>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}
