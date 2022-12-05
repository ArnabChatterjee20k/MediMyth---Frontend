import Stack from "@mui/material/Stack";
import { useAppointment } from "../context/AppointmentContextProvider";
import EventCards from "./EventCards";
import { useModalContext } from "../../../contexts/ModalContextProvider/ModalContextProvider";
import ComponentModal from "../../../components/ui/ComponentModal";
import AppointmentForm from "./AppointmentForm";
import { useAppointmentFormContext } from "../context/AppointmentFormContextProvider";
import { useNavigate } from "react-router-dom";
import { getFormattedDate } from "../../../utils/dateTime";

const Events = ({ edit }) => {
  const { appointment, appointmentDate } = useAppointment();
  const { handleOpen } = useModalContext();
  const { setAppointmentDate, appointment_date } = useAppointmentFormContext();

  const naviagte = useNavigate();
  const openModal = (id) => {
    setAppointmentDate(appointmentDate);
    handleOpen(<AppointmentForm schedule_id={id} />);
  };
  const redirect = () => {
    const date = getFormattedDate(appointmentDate, "yyyy-MM-dd");
    naviagte(`/doctor/profile/schedule/${date}`);
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
                edit={edit}
                buttonText={edit ? "View" : "Book"}
                cardAction={() => {
                  edit ? redirect() : openModal(id);
                }}
              />
            );
          }
        )}
      </Stack>
    </>
  );
};

export default Events;
