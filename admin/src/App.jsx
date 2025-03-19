import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";  // Chỉ cần Routes & Route
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/AdminContext";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ListAppointment from "./pages/Admin/ListAppointment";
import ListDoctor from "./pages/Admin/ListDoctor";
import Dashboard from "./pages/Admin/Dashboard";
import AddDoctors from "./pages/Admin/AddDoctors";

const App = () => {
  const { aToken } = useContext(AdminContext);

  return aToken ? (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">
          <Routes>
          <Route path="/" element={<></>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/list-appointment" element={<ListAppointment />} />
            <Route path="/add-doctor" element={<AddDoctors />} />
            <Route path="/list-doctor" element={<ListDoctor />} />
          </Routes>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
