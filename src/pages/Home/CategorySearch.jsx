import Tile from "../../components/Category/Tile";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import useCategories from "../../services/useCategories";

export default function CategorySearch() {
  const { data, isLoading } = useCategories();
  if(isLoading) return  <h1>Loading.....</h1>
  return (
    <Stack sx={{ width: "100%" }} padding={2}>
      {data && <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem" },
          paddingLeft: { xs: 0, sm: "1.5rem" },
        }}
      >
        Search By Category
      </Typography>}
      <Grid2
        container
        rowSpacing={1}
        columnGap={2}
        rowGap={2}
        justifyContent="space-between"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        marginX="auto"
        py={2}
        sx={{ paddingInline: { xs: 0, sm: 5 } }}
      >
        {
          data?.map(({category,id})=>{
          return <Grid2 xs={12} sm={3} paddingX={1} key={id}><Tile title={category} /></Grid2>
        })
        }
      </Grid2>
    </Stack>
  );
}
