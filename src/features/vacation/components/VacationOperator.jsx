import Stack from "@mui/material/Stack";
import { SecondaryLogo } from "../../../components/Logo/SecondaryLogo";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import IconButton from "@mui/material/IconButton";
import ComponentModal from "../../../components/ui/ComponentModal";
import { useModalContext } from "../../../contexts/ModalContextProvider/ModalContextProvider";
import VacationForm from "./VacationForm";
import useGetVacation from "../services/useGetVacation";
import { useAuthUser } from "react-auth-kit";
import Loader from "../../../components/ui/Loader";
import VacationCardsViewer from "./VacationCardsViewer";
export default function VacationOperator() {
  const auth = useAuthUser()
  const token = auth()?.token
  const {data,isLoading} = useGetVacation(token)
  const { handleOpen } = useModalContext();
  if (isLoading) return <Loader />;

  return (
    <>
      <ComponentModal />
      <Stack sx={{ paddingBlock: 2 }}>
        {data && data.length!==0 ?<VacationCardsViewer vacationData={data}/> :(
        <Stack flexDirection="row" justifyContent="center" alignItems="center">
          <SecondaryLogo text="No Vacations. Click + to add" />
        </Stack>
        )}
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
