import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AllArticle from "./components/AllArticle";
import TopBar from "./components/TopBar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container fluid>
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/article/:id" element={<AllArticle />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
