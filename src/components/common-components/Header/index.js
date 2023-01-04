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
  StyledNavigateComponent,
} from "./styledComponents";

const Header = (props) => {
  return (
    <AppContext.Consumer>
      {(appContextData) => {
        const { navLinkDataList, selectedNavLinkId, isLightTheme } =
          appContextData;

        return (
          <HeaderBgContainer isLightTheme={isLightTheme}>
            <StyledNavigateComponent to="/">
              <BrandName>
                Did It <BrandNamePartial>Shrink</BrandNamePartial>
              </BrandName>
            </StyledNavigateComponent>
            <HeaderMenuAndAccountContainer>
              <HeaderMenuContainer>
                {navLinkDataList.map((navLinkDataItem) => (
                  <HeaderMenuItem
                    key={navLinkDataItem.id}
                    isSelected={navLinkDataItem.id === selectedNavLinkId}
                    isLightTheme={isLightTheme}
                  >
                    <StyledNavigateComponent to={navLinkDataItem.navRoute}>
                      {navLinkDataItem.name}
                    </StyledNavigateComponent>
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
