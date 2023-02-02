import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import AppContext from "./contexts/AppContext";

import ProtectedElement from "./components/higher-order-components/ProtectedElement";
import MappedPage from "./components/higher-order-components/MappedPage";

import Login from "./components/Login";
import Home from "./components/Home";
import Contribute from "./components/Contribute";
import Leverage from "./components/Leverage";
import Resources from "./components/Resources";
import NotFound from "./components/NotFound";

const navLinkData = {
  home: {
    id: "home",
    name: "Home",
    navRoute: "/",
  },
  contribute: {
    id: "contribute",
    name: "Contribute",
    navRoute: "/contribute",
  },
  leverage: {
    id: "leverage",
    name: "Leverage",
    navRoute: "/leverage",
  },
  resources: {
    id: "resources",
    name: "Resources",
    navRoute: "/resources",
  },
};

function App() {
  const [selectedNavLinkId, setSelectedNavLinkId] = useState(
    navLinkData["home"].id
  );
  const [isLightTheme, toggleIsLightTheme] = useState(true);

  return (
    <AppContext.Provider
      value={{
        navLinkData,
        selectedNavLinkId,
        setSelectedNavLinkId,
        isLightTheme,
        toggleIsLightTheme,
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedElement
              mappedPage={
                <MappedPage
                  navLinkIdSetter={() =>
                    setSelectedNavLinkId(navLinkData.home.id)
                  }
                  bodyElement={<Home />}
                />
              }
            />
          }
        />
        <Route path="login" element={<MappedPage bodyElement={<Login />} />} />
        <Route
          path="contribute"
          element={
            <ProtectedElement
              mappedPage={
                <MappedPage
                  navLinkIdSetter={() =>
                    setSelectedNavLinkId(navLinkData.contribute.id)
                  }
                  bodyElement={<Contribute />}
                />
              }
            />
          }
        />
        <Route
          path="leverage"
          element={
            <ProtectedElement
              mappedPage={
                <MappedPage
                  navLinkIdSetter={() =>
                    setSelectedNavLinkId(navLinkData.leverage.id)
                  }
                  bodyElement={<Leverage />}
                />
              }
            />
          }
        />
        <Route
          path="resources"
          element={
            <ProtectedElement
              mappedPage={
                <MappedPage
                  navLinkIdSetter={() =>
                    setSelectedNavLinkId(navLinkData.resources.id)
                  }
                  bodyElement={<Resources />}
                />
              }
            />
          }
        />
        <Route
          path="not-found"
          element={
            <ProtectedElement
              mappedPage={<MappedPage bodyElement={<NotFound />} />}
            />
          }
        />
        <Route path="*" element={<Navigate to="not-found" />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
