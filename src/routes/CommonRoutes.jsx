import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const TaskDone = lazy(()=>import("../pages/TaskDone"))
const Home = lazy(()=>import("../pages/Home/Home"))
export default function CommonRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/achivement" element={<TaskDone/>}/>
    </Routes>
  )
}
