import React from "react";
import ReactMarkdown from "react-markdown";
import { ReactComponent as OpenEye } from "../assets/icon-show-preview.svg";
import data from "../data.json";

export const Preview = () => {
  return (
    <div className="basis-2/4 border-l border-light-gray calcHeight">
      <div className="bg-light-gray-1/2 px-4 py-3 flex items-center justify-between">
        <h5 className="text-light-gray-3 text-sm font-medium tracking-2">
          PREVIEW
        </h5>
        <OpenEye />
      </div>
      <div className="py-2 px-4 overflow-y-auto calcHeight2 preview">
        <ReactMarkdown>{data[1].content}</ReactMarkdown>
      </div>
    </div>
  );
};
