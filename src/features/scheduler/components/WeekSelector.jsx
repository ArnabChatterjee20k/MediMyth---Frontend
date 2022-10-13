import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import { weeks } from "../data/weeks";
import { useScheduleData } from "../context/ScheduleContextProvider";
export const WeekSelector = () => {
  const { scheduleData, handleScheduleData } = useScheduleData();

  return (
    <Stack width={{ xs: "80%", sm: "60%" }}>
      <FormControl>
        <FormLabel>Week of the Month</FormLabel>
        <Select
          value={scheduleData.specific_week}
          name="specific_week"
          onChange={handleScheduleData}
        >
          {Object.keys(weeks).map((week) => {
            return (
              <MenuItem key={week} value={weeks[week]}>
                {week}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Stack>
  );
};
