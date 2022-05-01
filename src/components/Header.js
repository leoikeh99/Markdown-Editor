import React, { useContext, useState } from "react";
import { ReactComponent as MenuIcon } from "../assets/icon-menu.svg";
import { ReactComponent as CloseIcon } from "../assets/icon-close.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as DocIcon } from "../assets/icon-document.svg";
import { ReactComponent as SaveIcon } from "../assets/icon-save.svg";
import { ReactComponent as DeleteIcon } from "../assets/icon-delete.svg";
import MarkdownContext from "../context/MarkdownContext";
import { DeleteDocument } from "./modals/DeleteDocument";

export const Header = () => {
  const { documents, currentDoc, saveDoc } = useContext(MarkdownContext);
  const [showModal, setShowModal] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    const main = document.getElementById("main");
    const sidebar = document.getElementById("sidebar");
    if (main.classList.contains("open")) {
      main.classList.remove("open");
      sidebar.classList.remove("openSidebar");
      setMenu(false);
    } else {
      main.classList.add("open");
      sidebar.classList.add("openSidebar");
      setMenu(true);
    }
  };

  const save = () => {
    if (currentDoc === false) {
      alert("Please create a new document first!");
    } else {
      saveDoc(currentDoc);
    }
  };

  return (
    <div className="w-full h-72 bg-dark-gray-2 flex justify-between items-center pr-4">
      <div className="h-full w-fit flex items-center gap-6">
        <div className="h-full w-72 bg-dark-gray flex items-center justify-center">
          {!menu ? (
            <MenuIcon onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <CloseIcon onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>
        <div className="h-full py-4 flex items-center gap-6">
          <span>
            <Logo />
          </span>
          <div className="w-fit h-full border-l border-light-gray-4 px-5-2 flex items-center gap-4">
            <DocIcon />
            <div>
              <p className="text-light-gray-3 font-light text-sm">
                Document Name
              </p>
              <p className="text-white font-normal text-base">
                {currentDoc !== false ? documents[currentDoc].name : "Untitled"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <DeleteIcon
          className="cursor-pointer fill-light-gray-3 hover:fill-orange"
          onClick={() => currentDoc !== false && setShowModal(true)}
        />
        <button className="btn" onClick={save}>
          <SaveIcon /> Save Changes
        </button>
      </div>
      {showModal && <DeleteDocument setShowModal={setShowModal} />}
    </div>
  );
};
