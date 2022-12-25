import { Suspense } from "react";
import CategorySearch from "./CategorySearch";
import Stack from "@mui/material/Stack";
import HomeBanner from "../../assets/img/Banner.png";
export default function Home() {
  return (
    <>
      <Stack flexDirection="row" sx={{
        marginInline:"auto",
        maxWidth:{"xs":"90%",sm:"80%"},
        marginBottom:5
      }}>
        <img src={HomeBanner} alt="" loading="lazy" style={{maxWidth:"100%"}}/>
      </Stack>
      <CategorySearch />
    </>
  );
}
