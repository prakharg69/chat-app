import React from "react";
import Navbar from "./components/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Setting from "./pages/Setting";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signUp" element={<Signup></Signup>} />
        <Route path="/setting" element={<Setting></Setting>} />
        <Route path="/profile" element={<Profile></Profile>} />
      </Routes>
    </div>
  );
}

export default App;
