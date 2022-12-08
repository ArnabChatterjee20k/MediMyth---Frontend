import Stack from "@mui/material/Stack";
import { SecondaryLogo } from "../../../components/Logo/SecondaryLogo";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import IconButton from "@mui/material/IconButton";
import ComponentModal from "../../../components/ui/ComponentModal";
import { useModalContext } from "../../../contexts/ModalContextProvider/ModalContextProvider";
import VacationForm from "./VacationForm";
export default function VacationOperator() {
    const { handleOpen } = useModalContext();
  return (
    <>
      <ComponentModal />
      <Stack sx={{ paddingBlock: 2 }}>
        (
        <Stack flexDirection="row" justifyContent="center" alignItems="center">
          <SecondaryLogo text="No Vacations. Click + to add" />
        </Stack>
        )
        <IconButton
            onClick={() => handleOpen(<VacationForm />)}
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
