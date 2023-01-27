import { IconContext } from "react-icons";
import {
  MdAccountCircle,
  MdOutlineNightlightRound,
  MdLightMode,
} from "react-icons/md";

import { FiLogOut } from "react-icons/fi";

import AppContext from "../../../contexts/AppContext";

import {
  HeaderActionButtonList,
  HeaderActionButtonListItem,
  HeaderActionButton,
  BrandName,
  BrandNamePartial,
  HeaderBgContainer,
  HeaderMenuAndActionButtonsContainer,
  HeaderMenuContainer,
  HeaderMenuItem,
  StyledLinkComponent,
} from "./styledComponents";

const Header = (props) => {
  const headerActionButtonIconList = [<FiLogOut />];

  const renderHeaderActionButtonList = (isLightTheme) => {
    const headerActionButtonListItems = headerActionButtonIconList.map(
      (iconListItem) => (
        <HeaderActionButton
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
            {iconListItem}
          </IconContext.Provider>
        </HeaderActionButton>
      )
    );

    const headerActionButtonListUI = (
      <HeaderActionButtonList>
        {headerActionButtonListItems.map((actionButtonListItem) => (
          <HeaderActionButtonListItem>
            {actionButtonListItem}
          </HeaderActionButtonListItem>
        ))}
      </HeaderActionButtonList>
    );

    return headerActionButtonListUI;
  };

  return (
    <AppContext.Consumer>
      {(appContextData) => {
        const { navLinkData, selectedNavLinkId, isLightTheme } = appContextData;
        headerActionButtonIconList.unshift(
          isLightTheme ? <MdOutlineNightlightRound /> : <MdLightMode />
        );

        return (
          <HeaderBgContainer isLightTheme={isLightTheme}>
            <StyledLinkComponent to="/">
              <BrandName>
                Did It<BrandNamePartial as="span">Shrink</BrandNamePartial>
              </BrandName>
            </StyledLinkComponent>
            <HeaderMenuAndActionButtonsContainer>
              <HeaderMenuContainer>
                {Object.values(navLinkData).map((navLinkDataItem) => {
                  const isCurrentLinkSelected =
                    navLinkDataItem.id === selectedNavLinkId;

                  return (
                    <HeaderMenuItem
                      key={navLinkDataItem.id}
                      isSelected={isCurrentLinkSelected}
                      isLightTheme={isLightTheme}
                    >
                      <StyledLinkComponent to={navLinkDataItem.navRoute}>
                        {navLinkDataItem.name}
                      </StyledLinkComponent>
                    </HeaderMenuItem>
                  );
                })}
              </HeaderMenuContainer>

              {renderHeaderActionButtonList(isLightTheme)}
            </HeaderMenuAndActionButtonsContainer>
          </HeaderBgContainer>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Header;
