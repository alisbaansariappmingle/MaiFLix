import React from "react";
import { Route, Routes } from "react-router-dom";
import CommonLayout from "./components/Common/CommonLayout";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AboutBanner from "./components/AboutUs/AboutUs";
import Contact from "./components/ContactUs/Contact";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<CommonLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutBanner />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;