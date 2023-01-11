import { IconContext } from "react-icons";
import { MdAccountCircle } from "react-icons/md";

import AppContext from "../../../contexts/AppContext";

import {
  AccountButton,
  BrandName,
  BrandNamePartial,
  HeaderBgContainer,
  HeaderMenuAndAccountContainer,
  HeaderMenuContainer,
  HeaderMenuItem,
  StyledLinkComponent,
} from "./styledComponents";

const Header = (props) => {
  return (
    <AppContext.Consumer>
      {(appContextData) => {
        const { navLinkData, selectedNavLinkId, isLightTheme } = appContextData;

        return (
          <HeaderBgContainer isLightTheme={isLightTheme}>
            <StyledLinkComponent to="/">
              <BrandName>
                Did It <BrandNamePartial>Shrink</BrandNamePartial>
              </BrandName>
            </StyledLinkComponent>
            <HeaderMenuAndAccountContainer>
              <HeaderMenuContainer>
                {Object.values(navLinkData).map((navLinkDataItem) => (
                  <HeaderMenuItem
                    key={navLinkDataItem.id}
                    isSelected={navLinkDataItem.id === selectedNavLinkId}
                    isLightTheme={isLightTheme}
                  >
                    <StyledLinkComponent to={navLinkDataItem.navRoute}>
                      {navLinkDataItem.name}
                    </StyledLinkComponent>
                  </HeaderMenuItem>
                ))}
              </HeaderMenuContainer>
              <AccountButton
                type="button"
                onClick={() => {}}
                isLightTheme={isLightTheme}
              >
                <IconContext.Provider
                  value={{
                    style: {
                      height: "2rem",
                      width: "2rem",
                      color: "#ffffff",
                    },
                  }}
                >
                  <MdAccountCircle />
                </IconContext.Provider>
              </AccountButton>
            </HeaderMenuAndAccountContainer>
          </HeaderBgContainer>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Header;
