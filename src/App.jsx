import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUP from "./components/SignUP";
import Login from "./components/Login";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
