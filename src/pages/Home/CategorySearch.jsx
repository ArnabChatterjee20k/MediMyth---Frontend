import Tile from "../../components/Category/Tile";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useCategories from "../../services/useCategories";

export default function CategorySearch() {
  const { data, isLoading } = useCategories();
  if (isLoading) return <h1>Loading.....</h1>;
  return (
    <Stack sx={{ width: "100%" }} padding={2}>
      {data && (
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem" },
            paddingLeft: { xs: 0, sm: "1.5rem" },
          }}
        >
          Search By Category
        </Typography>
      )}
      <Stack flexDirection="row" gap={5} flexWrap="wrap" padding={5} sx={{justifyContent:{xs:"flex-start",md:"center"}}}>
        {data?.map(({ category, id }) => {
          return (
            <Box key={id} sx={{width:{xs:"100%",sm:"auto"}}}>
              <Tile title={category} />
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
}
