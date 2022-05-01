import React, { createContext, useState } from "react";

const MarkdownContext = createContext();

export const MarkdownProvider = ({ children }) => {
  const [markdown, setMarkdown] = useState("");

  const handleMarkdownChange = (e) => setMarkdown(e.target.value);

  return (
    <MarkdownContext.Provider value={{ markdown, handleMarkdownChange }}>
      {children}
    </MarkdownContext.Provider>
  );
};

export default MarkdownContext;
