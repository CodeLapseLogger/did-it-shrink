import React from "react";

const AppContext = React.createContext({
  navLinkData: {},
  selectedNavLinkId: "",
  setSelectedNavLinkId: () => {},
  isLightTheme: true,
  toggleIsLightTheme: () => {},
});

export default AppContext;
