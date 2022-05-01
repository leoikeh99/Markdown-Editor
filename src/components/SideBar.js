import React from "react";
import { ReactComponent as DocIcon } from "../assets/icon-document.svg";

export const SideBar = () => {
  return (
    <div
      id="sidebar"
      className="fixed top-0 -left-64 w-250 bg-dark-gray-3 h-screen px-6 py-7 transition-all">
      <p className="text-light-gray-3 font-medium text-sm mb-7">MY DOCUMENTS</p>
      <button className="btn w-full mb-6">
        <span>+</span> New Document
      </button>
      <div className=" flex items-center gap-4 mb-6 cursor-pointer group">
        <DocIcon />
        <div>
          <p className="text-light-gray-3 font-light text-sm">01 April 2022</p>
          <p className="text-white font-normal text-base group-hover:text-orange">
            welcome.md
          </p>
        </div>
      </div>
    </div>
  );
};
