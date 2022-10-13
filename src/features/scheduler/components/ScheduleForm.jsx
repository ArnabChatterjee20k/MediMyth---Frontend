import Stack from "@mui/material/Stack";
import { WeekSelector } from "./WeekSelector";
import { DaySelector } from "./DaySelector";
import { ScheduleContextProvider } from "../context/ScheduleContextProvider";
import { SchduleDetails } from "./SchduleDetails";
export const ScheduleForm = () => {
    console.log("rendering");
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
