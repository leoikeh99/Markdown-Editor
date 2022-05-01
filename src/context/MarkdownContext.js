import React, { createContext, useEffect, useState } from "react";
import data from "../data.json";

const MarkdownContext = createContext();

export const MarkdownProvider = ({ children }) => {
  const [markdown, setMarkdown] = useState("");
  const [documents, setDocuments] = useState([]);
  const [currentDoc, setCurrentDoc] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem("documents")) {
      localStorage.setItem("documents", JSON.stringify(data));
      setDocuments(data);
      setMarkdown(data[0].content);
    }
    if (
      localStorage.getItem("documents") &&
      JSON.parse(localStorage.getItem("documents")).length === 0
    ) {
      setDocuments([]);
      setCurrentDoc(null);
    } else {
      setDocuments(JSON.parse(localStorage.getItem("documents")));
      setMarkdown(JSON.parse(localStorage.getItem("documents"))[0].content);
    }
  }, []);

  const handleMarkdownChange = (e) => setMarkdown(e.target.value);

  const selectDoc = (index) => {
    setCurrentDoc(index);
    setMarkdown(documents[index].content);
  };

  return (
    <MarkdownContext.Provider
      value={{
        markdown,
        documents,
        currentDoc,
        handleMarkdownChange,
        selectDoc,
      }}>
      {children}
    </MarkdownContext.Provider>
  );
};

export default MarkdownContext;
