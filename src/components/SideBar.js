import React, { useContext, useState } from "react";
import MarkdownContext from "../context/MarkdownContext";
import { ReactComponent as DocIcon } from "../assets/icon-document.svg";
import { AddDocument } from "./modals/AddDocument";
import moment from "moment";

export const SideBar = () => {
  const { documents, selectDoc } = useContext(MarkdownContext);
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      id="sidebar"
      className="fixed top-0 -left-64 w-250 bg-dark-gray-3 h-screen px-6 py-7 transition-all">
      <p className="text-light-gray-3 font-medium text-sm mb-7">MY DOCUMENTS</p>
      <button className="btn w-full mb-6" onClick={() => setShowModal(true)}>
        <span>+</span> New Document
      </button>
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
      {showModal && <AddDocument setShowModal={setShowModal} />}
    </div>
  );
};
