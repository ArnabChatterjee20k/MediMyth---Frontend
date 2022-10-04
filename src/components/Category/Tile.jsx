import React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TileIcon from "../../assets/img/Category-Tile-Icon.svg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Tile = ({ title }) => {
  return (
    <IconButton
      size="large"
      sx={{
        width:{xs:"100%",sm:"auto"},
        flexDirection: {sm:"column"},
        
        backgroundColor: "#4a62ff",
        borderRadius: "10px",
        paddingBlock: "18px",
        paddingInline: "27px",
        gap: "20px",
        alignItems:{xs:"center",sm:"flex-start"},
        justifyContent:"flex-start",
        '&:hover':{
            backgroundColor:"#5F75FF"
        }
      }}
    >
      <Avatar
        src={TileIcon}
        variant="rounded"
        sx={{ width: {xs:"3.2rem",lg:"4.2rem"}, height: {xs:"3rem",lg:"4rem"}  }}
      />
      <Typography
        sx={{ fontWeight: "bold", color: "white", fontSize: {xs:"1.5rem",lg:"2.2rem"}}}
      >
        {title}
      </Typography>
      <ArrowForwardIosIcon sx={{marginLeft:"auto",color:"white",display:{sm:"none"}}}/>
    </IconButton>
  );
};

Tile.propTypes = {
  title: PropTypes.string,
};

Tile.defaultProps = {
  title: "Tile",
};
export default Tile;
