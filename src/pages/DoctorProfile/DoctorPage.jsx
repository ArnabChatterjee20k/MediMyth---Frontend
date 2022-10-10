import React from 'react'
import AboutDoctor from './DoctorSubPages/AboutDoctor'
import { Outlet } from 'react-router-dom'
const DoctorPage = ({edit}) => {
  return (
    <>
        <AboutDoctor edit={edit}/>
        {/* for rendering the child */}
        <Outlet/> 
    </>
  )
}

export default DoctorPage