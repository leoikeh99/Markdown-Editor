import React, { useContext } from "react";
import MarkdownContext from "../../context/MarkdownContext";

export const DeleteDocument = ({ setShowModal }) => {
  const { deleteDoc, currentDoc } = useContext(MarkdownContext);

  const handleDelete = () => {
    deleteDoc(currentDoc);
    setShowModal(false);
  };

  return (
    <>
      <div className="overlay" onClick={() => setShowModal(false)}></div>
      <div className="w-343 p-6 bg-white dark:bg-dark-gray-3 rounded animate-pop-in fixed top-0 left-0 right-0 bottom-0 m-auto h-fit font-Roboto-Slab">
        <h4 className="text-dark-gray dark:text-white text-xl mb-4 font-bold">
          Delete this document?
        </h4>
        <p className="text-light-gray-3 dark:text-light-gray-2 text-sm mb-4">
          Are you sure you want to delete the ‘welcome.md’ document and its
          contents? This action cannot be reversed.
        </p>
        <button className="btn w-full" onClick={handleDelete}>
          Confirm & Delete
        </button>
      </div>
    </>
  );
};
