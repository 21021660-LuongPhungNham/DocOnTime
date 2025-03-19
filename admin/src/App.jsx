import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Login />
      <ToastContainer />
    </div>
  );
}

export default App;
