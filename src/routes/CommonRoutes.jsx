import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const TaskDone = lazy(()=>import("../pages/TaskDone"))
export default function CommonRoutes() {
  return (
    <Routes>
        <Route path="/achivement" element={<TaskDone/>}/>
    </Routes>
  )
}
