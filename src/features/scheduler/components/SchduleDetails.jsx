import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useScheduleData } from "../context/ScheduleContextProvider";
import { isValidPhone } from "../data/Validations";
import { PhoneNumber } from "../../../data/validErrorPatterns";
const SchduleDetails = () => {
  const { scheduleData, handleScheduleData } = useScheduleData();
  return (
    <Stack
      gap={2}
      width={{ xs: "100%", sm: "80%" }}
      paddingY={2}
      sx={{ paddingInline: { xs: 2, sm: 4 } }}
    >
      <TextField
        onChange={handleScheduleData}
        name="slot_start"
        type="time"
        value={scheduleData["slot_start"]}
        placeholder="Time for starting slot"
        label="Slot Start"
        required
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        onChange={handleScheduleData}
        name="slot_end"
        type="time"
        value={scheduleData["slot_end"]}
        label="Slot End(default null)"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        onChange={handleScheduleData}
        name="booking_start"
        type="number"
        value={scheduleData["booking_start"]}
        placeholder="Default is 7 days before the slot"
        label="Booking Start Day"
        required
        InputLabelProps={{ shrink: true }}
        sx={{
          "& input::placeholder": { fontSize: { xs: "0.8rem", sm: "1rem" } },
        }}
      />
      <TextField
        onChange={handleScheduleData}
        name="booking_end"
        type="number"
        value={scheduleData["booking_end"]}
        placeholder="Hours before slot booking will end"
        InputProps={{inputProps:{min:"24"}}}
        label="Booking End Time"
        required
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        onChange={handleScheduleData}
        name="fees"
        type="number"
        InputProps={{inputProps:{min:"0"}}}
        value={scheduleData["fees"]}
        placeholder="Default is 0"
        label="Fees"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        onChange={handleScheduleData}
        name="patient_limit"
        type="number"
        InputProps={{inputProps:{min:"0"}}}
        value={scheduleData["patient_limit"]}
        placeholder="default null"
        label="Patient Limit"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        onChange={handleScheduleData}
        name="phone_no"
        inputProps={{pattern:PhoneNumber}}
        value={scheduleData["phone_no"]}
        placeholder="10 digit"
        label="Phone number"
        error={!isValidPhone(scheduleData["phone_no"])}
        helperText={!isValidPhone(scheduleData["phone_no"]) && "Invalid Number"}
        InputLabelProps={{ shrink: true }}
        required
      />
      <TextField
        onChange={handleScheduleData}
        name="clinic_name"
        value={scheduleData["clinic_name"]}
        placeholder="Name of the clinic(if any)"
        label="Clinic Name"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        onChange={handleScheduleData}
        name="medical_shop"
        value={scheduleData["medical_shop"]}
        placeholder="Name of the Medical Shop(if any)"
        label="Medical Shop"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        onChange={handleScheduleData}
        name="address"
        value={scheduleData["address"]}
        placeholder="Proper address of the clinic or medical shop"
        label="Address"
        rows={10}
        multiline
        required
        InputLabelProps={{ shrink: true }}
      />
    </Stack>
  );
};

export default SchduleDetails;