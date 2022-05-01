import React from "react";

export const Markdown = () => {
  return (
    <div className="basis-2/4 calcHeight">
      <div className="bg-light-gray-1/2 px-4 py-3">
        <h5 className="text-light-gray-3 text-sm font-medium tracking-2">
          MARKDOWN
        </h5>
      </div>
      <textarea className="border w-full py-2 px-4 overflow-y-auto calcHeight2 resize-none font-Roboto-Mono text-dark-gray font-normal text-sm"></textarea>
    </div>
  );
};
