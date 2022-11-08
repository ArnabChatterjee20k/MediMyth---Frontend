import Stack from "@mui/material/Stack";
import { lazy } from "react";
const WeekSelector = lazy(()=>import("./WeekSelector"));
const DaySelector = lazy(()=>import("./DaySelector"));
const SchduleDetails = lazy(()=>import("./SchduleDetails"));
import { ScheduleContextProvider } from "../context/ScheduleContextProvider";
const ScheduleForm = () => {
  return (
    <ScheduleContextProvider>
      <Stack alignItems="center" width="100%" gap={3}>
        <SchduleDetails />
        <WeekSelector />
        <DaySelector />
      </Stack>
    </ScheduleContextProvider>
  );
};

export default ScheduleForm;