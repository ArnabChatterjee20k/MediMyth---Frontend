import DoctorImage from "../../../components/DoctorProfile/DoctorImage";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { SecondaryButton } from "../../../components/ui/Buttons";
import { useNavigate } from "react-router-dom";
export default function SearchedDoctorCards({name,profile_pic,id,category}) {
    const navigate = useNavigate()

    const redirect = ()=>{
      navigate(`/doctor/${id}`)
    }
  return (
    <Stack
      flexDirection="row"
      alignItems="flex-end"
      justifyContent="space-between"
      gap={10}
      paddingX={4}
      paddingY={2}
      sx={{
        width: "100%",
        borderRadius: "15px",
        boxShadow:
          "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
      }}
    >
      <Stack flexDirection="row" alignItems="center" gap={2}>
        <DoctorImage
          name={name}
          profilePicture={profile_pic}
          displayInFree={false}
          imageProps={{ width: "100px", height: "100px" }}
        />
        <Stack sx={{ alignSelf: "flex-end", paddingBlockEnd: "0.3em" }}>
          <Typography fontSize="1.5rem">{name}</Typography>
          <Typography fontSize="1rem">{category}</Typography>
        </Stack>
      </Stack>

      <SecondaryButton
        sx={{ alignSelf: "flex-end", marginBlockEnd: "0.5em" }}
        onClick={redirect}
      >
        Book
      </SecondaryButton>
    </Stack>
  );
}