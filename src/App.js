import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import AppContext from "./contexts/AppContext";

import ProtectedRoute from "./components/higher-order-components/ProtectedRoute";
import MappedPage from "./components/higher-order-components/MappedPage";

import Login from "./components/Login";
import Home from "./components/Home";
import Contribute from "./components/Contribute";
import Leverage from "./components/Leverage";
import Resources from "./components/Resources";
import NotFound from "./components/NotFound";

const navLinkDataList = [
  {
    home: {
      id: "home",
      name: "Home",
      navRoute: "/",
    },
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
        <ProtectedRoute
          path="/"
          element={<MappedPage bodyElement={<Home />} />}
        />
        <Route path="login" element={<Login />} />
        <ProtectedRoute
          path="contribute"
          element={<MappedPage bodyElement={<Contribute />} />}
        />
        <ProtectedRoute
          path="leverage"
          element={<MappedPage bodyElement={<Leverage />} />}
        />
        <ProtectedRoute
          path="resources"
          element={<MappedPage bodyElement={<Resources />} />}
        />
        <ProtectedRoute
          path="not-found"
          element={<MappedPage bodyElement={<NotFound />} />}
        />
        <Route render={() => <Navigate to="not-found" />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
