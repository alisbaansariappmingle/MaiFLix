import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const CommonLayout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
     
      <header className="w-full">
        <Header />
      </header>
      
      <main className="flex-grow w-full ">
        <Outlet />
      </main>
    </div>
  );
};

export default CommonLayout;
