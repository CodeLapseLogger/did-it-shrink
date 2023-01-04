import React from "react";

const AppContext = React.createContext({
  navLinkDataList: [],
  selectedNavLinkId: "",
  setSelectedNavLinkId: () => {},
  isLightTheme: true,
  toggleIsLightTheme: () => {},
});

export default AppContext;
