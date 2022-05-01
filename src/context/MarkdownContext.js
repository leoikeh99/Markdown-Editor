import React, { createContext, useEffect, useState } from "react";
import data from "../data.json";

const MarkdownContext = createContext();

export const MarkdownProvider = ({ children }) => {
  const [markdown, setMarkdown] = useState("");
  const [documents, setDocuments] = useState([]);
  const [currentDoc, setCurrentDoc] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("documents")) {
      localStorage.setItem("documents", JSON.stringify(data));
      setCurrentDoc(0);
      setDocuments(data);
      setMarkdown(data[0].content);
    }
    if (
      localStorage.getItem("documents") &&
      JSON.parse(localStorage.getItem("documents")).length === 0
    ) {
      setDocuments([]);
      setCurrentDoc(false);
    } else {
      setDocuments(JSON.parse(localStorage.getItem("documents")));
      setMarkdown(JSON.parse(localStorage.getItem("documents"))[0].content);
      setCurrentDoc(0);
    }
  }, []);

  const handleMarkdownChange = (e) => setMarkdown(e.target.value);

  const selectDoc = (index) => {
    setCurrentDoc(index);
    setMarkdown(documents[index].content);
  };

  const addDoc = (name) => {
    const newDoc = {
      name,
      content: "",
      createdAt: new Date().toLocaleString(),
    };
    setDocuments([...documents, newDoc]);
    localStorage.setItem("documents", JSON.stringify([...documents, newDoc]));
    setCurrentDoc(documents.length);
    setMarkdown(newDoc.content);
  };

  const deleteDoc = (index) => {
    setDocuments(documents.filter((doc, i) => i !== index));
    localStorage.setItem(
      "documents",
      JSON.stringify(documents.filter((doc, i) => i !== index))
    );

    if (documents.length === 1) {
      setCurrentDoc(false);
      setMarkdown("");
    } else {
      setCurrentDoc(documents.length - 2);
      setMarkdown(documents[documents.length - 2].content);
    }
  };

  const saveDoc = (index) => {
    setDocuments(
      documents.map((doc, i) =>
        index === i ? { ...doc, content: markdown } : doc
      )
    );
    localStorage.setItem(
      "documents",
      JSON.stringify(
        documents.map((doc, i) =>
          index === i ? { ...doc, content: markdown } : doc
        )
      )
    );
  };

  return (
    <MarkdownContext.Provider
      value={{
        markdown,
        documents,
        currentDoc,
        addDoc,
        handleMarkdownChange,
        selectDoc,
        deleteDoc,
        saveDoc,
      }}>
      {children}
    </MarkdownContext.Provider>
  );
};

export default MarkdownContext;
