import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { SecondaryTextColor } from "../../assets/styles/DefaultProperties";
import React from "react";

const PrimaryLink = styled(Link)(({ theme }) => ({
  color: SecondaryTextColor,
  textDecoration:"none"
}));
export default PrimaryLink;
