import Stack from "@mui/material/Stack";
import { lazy } from "react";
import { PrimaryButton } from "../../../components/ui/Buttons";
import { useScheduleData } from "../context/ScheduleContextProvider";
const WeekSelector = lazy(()=>import("./WeekSelector"));
const DaySelector = lazy(()=>import("./DaySelector"));
const SchduleDetails = lazy(()=>import("./SchduleDetails"));

const ScheduleForm = () => {
  const {reset} = useScheduleData()

  return (
      <Stack alignItems="center" width="100%" gap={3} component="form">
        <SchduleDetails />
        <WeekSelector />
        <DaySelector />
        <Stack flexDirection="row" maxWidth="48rem" width="100%" padding="1em 0.5em" justifyContent="space-between">
          <PrimaryButton onClick={reset}>Cancel</PrimaryButton>
          <PrimaryButton>Create</PrimaryButton>
        </Stack>
      </Stack>
  );
};

export default ScheduleForm;