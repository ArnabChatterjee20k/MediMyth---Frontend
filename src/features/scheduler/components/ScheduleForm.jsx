import Stack from "@mui/material/Stack";
import { lazy, useCallback } from "react";
import { PrimaryButton } from "../../../components/ui/Buttons";
import { useScheduleData } from "../context/ScheduleContextProvider";
import { useAuthUser } from "react-auth-kit";
import useCreateSchedule from "../services/useCreateSchedule";
import { useNotificationContext } from "../../../contexts/ToastContextProvider/NotificationContextProvider";
const WeekSelector = lazy(()=>import("./WeekSelector"));
const DaySelector = lazy(()=>import("./DaySelector"));
const SchduleDetails = lazy(()=>import("./SchduleDetails"));

const ScheduleForm = () => {
  const {reset,getScheduleData} = useScheduleData()
  const user = useAuthUser()
  const token = user()?.token
  const {create,isLoading} = useCreateSchedule()
  const {notify} = useNotificationContext()
  return (
      <Stack alignItems="center" width="100%" gap={3} component="form" onSubmit={(e)=>{
        e.preventDefault()
        const body = getScheduleData();
        const clinicGiven = !body["clinic_name"] && !body["medical_shop"]
        if(!clinicGiven) create({token,body})
        else notify("Plz provide atleast medical shop name or clinic name","warning")
      }}>
        <SchduleDetails />
        <WeekSelector />
        <DaySelector />
        <Stack flexDirection="row" maxWidth="48rem" width="100%" padding="1em 0.5em" justifyContent="space-between">
          <PrimaryButton onClick={reset} disabled={isLoading}>{isLoading?"Submitting...":"Cancel"}</PrimaryButton>
          <PrimaryButton disabled={isLoading} type="submit">{isLoading?"Submitting...":"Create"}</PrimaryButton>
        </Stack>
      </Stack>
  );
};

export default ScheduleForm;