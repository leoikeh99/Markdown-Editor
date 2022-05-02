import React, { useState } from "react";
import { Header } from "../components/Header";
import { Markdown } from "../components/Markdown";
import { Preview } from "../components/Preview";

export const Main = () => {
  const [showMarkdown, setShowMarkdown] = useState(true);
  return (
    <main id="main" className="transition-transform overflow-y-hidden z-0">
      <Header />
      <div className="flex">
        {showMarkdown && (
          <Markdown
            showMarkdown={showMarkdown}
            setShowMarkdown={setShowMarkdown}
          />
        )}
        <Preview
          showMarkdown={showMarkdown}
          setShowMarkdown={setShowMarkdown}
        />
      </div>
    </main>
  );
};
