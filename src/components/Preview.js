import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import MarkdownContext from "../context/MarkdownContext";
import { ReactComponent as OpenEye } from "../assets/icon-show-preview.svg";
import { ReactComponent as CloseEye } from "../assets/icon-hide-preview.svg";

export const Preview = ({ showMarkdown, setShowMarkdown }) => {
  const { markdown } = useContext(MarkdownContext);
  return (
    <div
      className={`${
        showMarkdown ? "basis-2/4" : "basis-full"
      } border-l border-light-gray calcHeight`}>
      <div className="bg-light-gray-1/2 px-4 py-3 flex items-center justify-between">
        <h5 className="text-light-gray-3 text-sm font-medium tracking-2">
          PREVIEW
        </h5>
        {showMarkdown ? (
          <OpenEye
            onClick={() => setShowMarkdown(!showMarkdown)}
            className="cursor-pointer"
          />
        ) : (
          <CloseEye
            onClick={() => setShowMarkdown(!showMarkdown)}
            className="cursor-pointer"
          />
        )}
      </div>
      <div
        className={`py-2 px-4 overflow-y-auto calcHeight2 preview ${
          !showMarkdown && "max-w-672"
        } m-auto`}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};
