import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { MarkdownProvider } from "./context/MarkdownContext";

function App() {
  return (
    <MarkdownProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </MarkdownProvider>
  );
}

export default App;
