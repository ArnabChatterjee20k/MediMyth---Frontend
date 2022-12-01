import Stack from "@mui/material/Stack";
import { useAppointment } from "../context/AppointmentContextProvider";
import EventCards from "./EventCards";
import { useModalContext } from "../../../contexts/ModalContextProvider/ModalContextProvider";
import ComponentModal from "../../../components/ui/ComponentModal";
import AppointmentForm from "./AppointmentForm";
import { useAppointmentFormContext } from "../context/AppointmentFormContextProvider";

const Events = () => {
  const { appointment, appointmentDate } = useAppointment();
  const { handleOpen } = useModalContext();
  const {setAppointmentDate,appointment_date} = useAppointmentFormContext(

  )
  const openModal = (id) => {
    setAppointmentDate(appointmentDate);
    console.log(appointment_date);
    handleOpen(<AppointmentForm schedule_id={id}/>);
  };
  return (
    <>
      <ComponentModal />
      <Stack gap={3}>
        {appointment.map(
          (
            {
              id,
              slot_start,
              slot_end,
              address,
              booking_start,
              booking_end,
              patient_limit,
              appointment_data,
            },
            index
          ) => {
            return (
              <EventCards
                id={id}
                key={index}
                start={slot_start}
                end={slot_end}
                address={address}
                date={appointmentDate}
                booking_start={booking_start}
                booking_end={booking_end}
                limit={patient_limit}
                appointment_data={appointment_data}
                cardAction={()=>openModal(id)}
              />
            );
          }
        )}
      </Stack>
    </>
  );
};

export default Events;
