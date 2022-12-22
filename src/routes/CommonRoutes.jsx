import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const AppointmentCreated = lazy(()=>import("../pages/AppointmentCreated"))
const Home = lazy(()=>import("../pages/Home/Home"))
const SearchEngine = lazy(()=>import("../features/searchengine"))

export default function CommonRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path={"/achievement/appointment/:id"} element={<AppointmentCreated/>}/>
    </Routes>
  )
}
