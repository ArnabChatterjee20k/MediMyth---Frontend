import React from "react";
import Modal from "@mui/material/Modal";
import { useModalContext } from "../../contexts/ModalContextProvider/ModalContextProvider";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { SecondaryLogo } from "../Logo/SecondaryLogo";
/**
 * 
 * set component inside it using the ModalContext. Take care of the context of the component. If that is an isolated component use the Modal directly inside your feature component
 */
export default function ComponentModal() {
  const { open, handleClose, Component } = useModalContext();
  return (
    <Modal open={open} sx={{ overflowY: "scroll" }}>
        <Box sx={{ backgroundColor: "white" }}>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          px={2}
          pb={3}
          pt={2}
          borderBottom="1px dotted black"
          mb={2}
        >
          <SecondaryLogo text="MediMyth" />
          <IconButton onClick={handleClose} sx={{ alignSelf: "flex-end" }}>
            <ClearIcon />
          </IconButton>
        </Stack>
          {Component !== null ? Component : null}
        </Box>
    </Modal>
  );
}
