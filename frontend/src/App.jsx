import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Workspace } from "./pages/Workspace";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes />
      <Route path="/" element={<Home />} />
      <Route path="workspace" element={<Workspace />} />
      <Routes />
    </>
  );
}

export default App;
