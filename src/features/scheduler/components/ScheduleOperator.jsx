import { lazy } from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import useSchedule from "../services/useSchedule";
import { SecondaryLogo } from "../../../components/Logo/SecondaryLogo";
import { useNotificationContext } from "../../../contexts/ToastContextProvider/NotificationContextProvider";
import { useModalContext } from "../../../contexts/ModalContextProvider/ModalContextProvider";
import Loader from "../../../components/ui/Loader";
import ScheduleForm from "./ScheduleForm";
import ComponentModal from "../../../components/ui/ComponentModal";

const ScheduleTimeline = lazy(() => import("./ScheduleTimeline"));

export default function ScheduleOperator() {
  const { data, isLoading, isFetching, isError } = useSchedule();
  const { notify } = useNotificationContext();
  const { handleOpen } = useModalContext();
  if (isLoading) return <Loader />;
  if (isError) {
    notify("Some error Ocuured!", "error");
    return <SecondaryLogo text="Some Error Occured" />;
  }
  return (
    <>
      <ComponentModal />
      <Stack sx={{ paddingBlock: 2 }}>
        {data.length !== 0 ? (
          <ScheduleTimeline scheduleData={data} />
        ) : (
          <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <SecondaryLogo text="No Schedules. Click + to add" />
          </Stack>
        )}
        <IconButton
          onClick={() => handleOpen(<ScheduleForm />)}
          aria-label="fingerprint"
          sx={{
            position: "sticky",
            bottom: 16,
            right: 16,
            alignSelf: "flex-end",
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
        >
          <SpeedDialIcon
            fontSize="large"
            sx={{ ".MuiSvgIcon-root": { fill: "white" } }}
          />
        </IconButton>
      </Stack>
    </>
  );
}
