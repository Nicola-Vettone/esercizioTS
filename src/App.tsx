import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AllArticle from "./components/AllArticle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/article/:id" element={<AllArticle />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
