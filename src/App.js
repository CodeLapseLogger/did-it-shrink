import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import AppContext from "./contexts/AppContext";

import Login from "./components/Login";
import Home from "./components/Home";
import Contribute from "./components/Contribute";
import NotFound from "./components/NotFound";

const navLinkDataList = [
  {
    id: "home",
    name: "Home",
    navRoute: "/",
  },
  {
    id: "contribute",
    name: "Contribute",
    navRoute: "contribute",
  },
  {
    id: "leverage",
    name: "Leverage",
    navRoute: "leverage",
  },
  {
    id: "resources",
    name: "Resources",
    navRoute: "resources",
  },
];

function App() {
  const [selectedNavLinkId, setSelectedNavLinkId] = useState(
    navLinkDataList[0].id
  );
  const [isLightTheme, toggleIsLightTheme] = useState(true);

  return (
    <AppContext.Provider
      value={{
        navLinkDataList,
        selectedNavLinkId,
        setSelectedNavLinkId,
        isLightTheme,
        toggleIsLightTheme,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="contribute" element={<Contribute />} />
        <Route path="not-found" element={<NotFound />} />
        <Route render={() => <Navigate to="not-found" />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
