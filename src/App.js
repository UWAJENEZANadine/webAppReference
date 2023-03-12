import "./App.css";
import NavBar from "./components/NavaBar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
      <Route path="" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
