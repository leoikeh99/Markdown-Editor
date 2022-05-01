import React from "react";
import { Header } from "../components/Header";
import { Markdown } from "../components/Markdown";
import { Preview } from "../components/Preview";

export const Main = () => {
  return (
    <main id="main" className="transition-transform overflow-y-hidden">
      <Header />
      <div className="flex">
        <Markdown />
        <Preview />
      </div>
    </main>
  );
};
