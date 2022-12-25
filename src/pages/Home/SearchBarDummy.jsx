import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";

export default function SearchBarDummy() {
    const redirect = useNavigate();
    const redirectToSearch = ()=>{
        redirect("/search")
    }
  return (
    <Paper
      sx={{
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        paddingBlock: 2,
        paddingInline: 4,
        marginInline: "auto",
        gap: { xs: 5, md: 20 },
        backgroundColor: "#eeeeee",
        cursor:"pointer"
      }}
      onClick={redirectToSearch}
    >
        <Typography sx={{ fontSize: {xs:"0.8rem",sm:"1rem"} }}>
          Search for the doctor,location,category
        </Typography>
        <SearchOutlinedIcon sx={{ fontSize: {xs:"1rem",sm:"2rem"} }} />
    </Paper>
  );
}
