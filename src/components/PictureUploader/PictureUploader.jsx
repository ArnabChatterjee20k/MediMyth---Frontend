import React, { useState,useRef } from "react";
import DoctorImage from "../DoctorProfile/DoctorImage";
import Stack from "@mui/material/Stack";
import { PrimaryButton , SecondaryButton} from "../ui/Buttons";
import { useNotificationContext } from "../../contexts/ToastContextProvider/NotificationContextProvider";


/**
 * 
 * @param onUpload must have an argument body. The body or the image will be provided by the PictureUploader 
 * @returns 
 */
export default function PictureUploader({ name, defaultImage, onUpload }) {
  const [picture, setPicture] = useState(defaultImage);
  const uploadRef = useRef()
  const form = useRef({image:""})
  const {notify} = useNotificationContext()
  const handleUpload = ()=>{
    const newForm = new FormData()
    newForm.set("image",form.current.image)
    form.current.image!=="" && onUpload(newForm)
    notify("Uploading Your Picture")
  }
  return (
    <Stack
      component="form"
      sx={{ 
        minHeight: "100vh",
        paddingTop: "2rem",
        alignItems: "center",
        gap: 2,
      }}
    >
      <DoctorImage name={name} profilePicture={picture} displayInFree={false} />
      <input
        type="file"
        placeholder="Choose Your Image"
        ref={uploadRef}
        hidden
        required={true}
        onChange={(e) => {
          const image = e.target.files[0];
          setPicture(URL.createObjectURL(image));
          form.current.image = image
        }}
      />
      <Stack gap={1}>
        <SecondaryButton onClick={()=>uploadRef.current.click()}>Choose Image</SecondaryButton>
      </Stack>
        <PrimaryButton disabled={form.current.image===""} onClick={handleUpload}>Upload</PrimaryButton>
    </Stack>
  );
}
