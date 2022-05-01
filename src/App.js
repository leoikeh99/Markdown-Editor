import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { MarkdownProvider } from "./context/MarkdownContext";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <MarkdownProvider>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </MarkdownProvider>
  );
}

export default App;
