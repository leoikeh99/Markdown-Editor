import React from "react";
import { Header } from "../components/Header";
import { Markdown } from "../components/Markdown";
import { Preview } from "../components/Preview";

export const Main = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Markdown />
        <Preview />
      </div>
    </div>
  );
};
