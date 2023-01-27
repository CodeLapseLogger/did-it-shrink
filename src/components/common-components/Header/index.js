import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  MdAccountCircle,
  MdOutlineNightlightRound,
  MdLightMode,
} from "react-icons/md";
import Cookies from "js-cookie";

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
  const navigate = useNavigate();

  const headerActionButtonDataList = [
    {
      iconComponent: <FiLogOut />,
      clickHandler: onLogout,
    },
  ];

  function onLogout(logoutEvent) {
    logoutEvent.preventDefault();

    Cookies.remove("did-it-shrink-jwt-token");
    navigate("/login", { replace: true });
  }

  const renderHeaderActionButtonList = (isLightTheme) => {
    const headerActionButtonListItems = headerActionButtonDataList.map(
      (buttonDataItem) => (
        <HeaderActionButton
          type="button"
          onClick={buttonDataItem.clickHandler}
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
            {buttonDataItem.iconComponent}
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
        const {
          navLinkData,
          selectedNavLinkId,
          isLightTheme,
          toggleIsLightTheme,
        } = appContextData;
        headerActionButtonDataList.unshift({
          iconComponent: isLightTheme ? (
            <MdOutlineNightlightRound />
          ) : (
            <MdLightMode />
          ),
          clickHandler: () => toggleIsLightTheme(!isLightTheme),
        });

        return (
          <HeaderBgContainer isLightTheme={isLightTheme}>
            <StyledLinkComponent to="/">
              <BrandName>
                Did It <BrandNamePartial as="span">Shrink</BrandNamePartial>
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

              {renderHeaderActionButtonList(isLightTheme, toggleIsLightTheme)}
            </HeaderMenuAndActionButtonsContainer>
          </HeaderBgContainer>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Header;
