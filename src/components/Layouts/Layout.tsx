import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout: React.FC = () => {
  return (
    <div className="bg-[#1F1F1F] text-white">
      <div className="max-w-[900px] mx-auto px-5 sm:px-0 py-5">
        <Header></Header>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Layout;
