import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Topbar from "../Header/Topbar";
import Footer from "../Home/Footer/Footer";

const CommonLayout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
     
      <header className="w-full">
      <Topbar/>
        <Header />
      </header>
      
      <main className="flex-grow w-full ">
        <Outlet />
        <Footer/>
      </main>
      <footer/>
    </div>
  );
};

export default CommonLayout;
