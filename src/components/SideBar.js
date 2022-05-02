import React, { useContext, useEffect, useState } from "react";
import MarkdownContext from "../context/MarkdownContext";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as DocIcon } from "../assets/icon-document.svg";
import { ReactComponent as Sun } from "../assets/icon-light-mode.svg";
import { ReactComponent as Moon } from "../assets/icon-dark-mode.svg";
import { AddDocument } from "./modals/AddDocument";
import { ToastContainer } from "react-toastify";
import moment from "moment";

export const SideBar = () => {
  const { documents, selectDoc } = useContext(MarkdownContext);
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else if (localStorage.getItem("theme") === "light") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      id="sidebar"
      className="fixed top-0 -left-64 w-250 bg-dark-gray-3 h-screen px-6 py-7 transition-all">
      <ToastContainer theme={theme === "light" ? "dark" : "light"} />
      <Logo />
      <p className="text-light-gray-3 font-medium text-sm mb-7 mt-6">
        MY DOCUMENTS
      </p>
      <button className="btn w-full mb-6" onClick={() => setShowModal(true)}>
        <span>+</span> New Document
      </button>
      <div className="calcHeight3 overflow-y-auto">
        {documents.map((doc, index) => (
          <div
            className=" flex items-center gap-4 mb-6 cursor-pointer group"
            key={index}
            onClick={() => selectDoc(index)}>
            <DocIcon />
            <div>
              <p className="text-light-gray-3 font-light text-sm">
                {moment(doc.createdAt).format("Do MMMM YYYY")}
              </p>
              <p className="text-white font-normal text-base group-hover:text-orange">
                {doc.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      {showModal && <AddDocument setShowModal={setShowModal} />}
      <div className="flex items-center gap-3">
        <Moon
          className={`${theme === "dark" ? "fill-white" : "fill-light-gray-4"}`}
        />
        <div
          className="bg-light-gray-4 w-12 h-6 rounded-2xl relative flex items-center cursor-pointer"
          onClick={toggleTheme}>
          <span
            className={`block bg-white rounded-full w-3 h-3 absolute ${
              theme === "dark" ? "translate-x-2" : "translate-x-7"
            } transition-all`}
          />
        </div>
        <Sun
          className={`${
            theme === "light" ? "fill-white" : "fill-light-gray-4"
          }`}
        />
      </div>
    </div>
  );
};
