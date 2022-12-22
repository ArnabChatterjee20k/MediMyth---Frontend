import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import { weeks } from "../../../data/weeks";
import { useScheduleData } from "../context/ScheduleContextProvider";
const WeekSelector = () => {
  const { scheduleData, handleScheduleData , handleSelection } = useScheduleData();

  return (
    <Stack width={{ xs: "80%", sm: "60%" }}>
      <FormControl>
        <FormLabel>Week of the Month</FormLabel>
        <Select
          value={scheduleData.specific_week}
          name="specific_week"
          onChange={handleSelection}
          multiple
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {Object.keys(weeks).map((week) => {
            return (
              <MenuItem key={week} value={weeks[week]}>
                <Checkbox checked={scheduleData.specific_week.indexOf(weeks[week]) > -1} />
                <ListItemText primary={week} />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default WeekSelector;