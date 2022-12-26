import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Home from "./components/Home";
import Contribute from "./components/Contribute";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contribute" element={<Contribute />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route render={() => <Navigate to="/not-found" />} />
    </Routes>
  );
}

export default App;
