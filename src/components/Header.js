import React from "react";
import MenuIcon from "../assets/icon-menu.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as DocIcon } from "../assets/icon-document.svg";
import { ReactComponent as SaveIcon } from "../assets/icon-save.svg";
import { ReactComponent as DeleteIcon } from "../assets/icon-delete.svg";

export const Header = () => {
  return (
    <div className="w-full h-72 bg-dark-gray-2 flex justify-between items-center pr-4">
      <div className="h-full w-fit flex items-center gap-6">
        <div className="h-full w-72 bg-dark-gray flex items-center justify-center cursor-pointer">
          <img src={MenuIcon} alt="" />
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
              <p className="text-white font-normal text-base">welcome.md</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <DeleteIcon className="cursor-pointer fill-light-gray-3 hover:fill-orange" />
        <button className="btn">
          <SaveIcon /> Save Changes
        </button>
      </div>
    </div>
  );
};
