import React, { useContext, useState } from "react";
import MarkdownContext from "../../context/MarkdownContext";

export const AddDocument = ({ setShowModal }) => {
  const { addDoc } = useContext(MarkdownContext);
  const [name, setName] = useState("");

  const addDocument = () => {
    if (name.trim() !== "") {
      addDoc(name);
      setShowModal(false);
      const main = document.getElementById("main");
      const sidebar = document.getElementById("sidebar");

      main.classList.remove("open");
      sidebar.classList.remove("openSidebar");
    }
  };

  return (
    <>
      <div className="overlay" onClick={() => setShowModal(false)}></div>
      <div className="w-343 p-6 bg-white dark:bg-dark-gray-3 rounded animate-pop-in fixed top-0 left-0 right-0 bottom-0 m-auto h-fit">
        <h4 className="text-dark-gray dark:text-white text-xl mb-4 font-bold">
          Create new Document
        </h4>
        <label className="text-dark-gray dark:text-light-gray-2 text-sm">
          Document Name:
        </label>
        <input
          className="h-12 w-full rounded border-0 p-3 bg-light-gray-1/2 dark:bg-dark-gray mb-4 text-dark-gray dark:text-light-gray"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn" onClick={addDocument}>
          <span>+</span>Create
        </button>
      </div>
    </>
  );
};
