import React, { useContext } from "react";
import MarkdownContext from "../context/MarkdownContext";
import { ReactComponent as OpenEye } from "../assets/icon-show-preview.svg";
import { ReactComponent as CloseEye } from "../assets/icon-hide-preview.svg";

export const Markdown = ({ showMarkdown, setShowMarkdown }) => {
  const { markdown, handleMarkdownChange } = useContext(MarkdownContext);

  return (
    <div
      className={`basis-full calcHeight ${
        !showMarkdown && "hidden"
      } md2:block md2:basis-2/4`}>
      <div className="bg-light-gray-1/2 px-4 py-3 flex items-center justify-between">
        <h5 className="text-light-gray-3 text-sm font-medium tracking-2">
          MARKDOWN
        </h5>
        {showMarkdown ? (
          <OpenEye
            onClick={() => setShowMarkdown(!showMarkdown)}
            className="cursor-pointer md2:hidden"
          />
        ) : (
          <CloseEye
            onClick={() => setShowMarkdown(!showMarkdown)}
            className="cursor-pointer md2:hidden"
          />
        )}
      </div>
      <textarea
        className="border w-full py-2 px-4 overflow-y-auto calcHeight2 resize-none font-Roboto-Mono text-dark-gray font-normal text-sm"
        value={markdown}
        onChange={handleMarkdownChange}></textarea>
    </div>
  );
};
