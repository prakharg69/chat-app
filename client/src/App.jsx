import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Setting from "./pages/Setting";
import Profile from "./pages/Profile";
import { useAuthStore } from "./store/useAuthStore";
import ChatLoader from "./components/ChatLoader";
import {Toaster} from "react-hot-toast"

function App() {
  const { authUser, isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  },[checkAuth]);
if(isCheckingAuth && !authUser){
  return(<ChatLoader></ChatLoader>)
}
  return (
    <div className="bg-[#1e1f22]">
      <Navbar />
      <Routes>
        <Route path="/" element={authUser? <Home /> :<Navigate to="/login"></Navigate>} />
        <Route path="/login" element={!authUser ? <Login />:<Navigate to="/"></Navigate>} />
        <Route path="/signup" element={!authUser? <Signup />:<Navigate to="/"></Navigate>} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
