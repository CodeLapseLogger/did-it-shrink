import React from "react";

const AppContext = React.createContext({
  navLinkData: {},
  updateNavLinkData: () => {},
  selectedNavLinkId: "",
  setSelectedNavLinkId: () => {},
  isLightTheme: true,
  toggleIsLightTheme: () => {},
});

export default AppContext;
