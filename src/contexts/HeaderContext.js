import { React } from "react";

const HeaderContext = React.createContext({
  selectedNavLinkId: "",
  setSelectedNavLinkId: () => {},
  isLightTheme: true,
  toggleIsLightTheme: () => {},
});

export default HeaderContext;
