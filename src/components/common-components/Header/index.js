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
import { userLogout } from "../../../appwrite-api/appwrite-api";
import { isAuthenticated } from "../../../utils/Authentication";

import {
  HeaderActionButtonList,
  HeaderActionButtonListItem,
  HeaderActionButton,
  HeaderBgContainer,
  HeaderMenuAndActionButtonsContainer,
  HeaderMenuContainer,
  HeaderMenuItem,
  StyledLinkComponent,
} from "./styledComponents";

import {
  BrandName,
  BrandNamePartial,
} from "../../common-styled-components/commonStyledComponents";

const Header = (props) => {
  const navigate = useNavigate();

  const headerActionButtonDataList = [
    {
      id: "logout",
      iconComponent: isAuthenticated() && <FiLogOut />,
      clickHandler: onLogout,
    },
  ];

  let navLinkDataChangeCallback = null;

  function onLogout(logoutEvent) {
    logoutEvent.preventDefault();

    Cookies.remove("did-it-shrink-jwt-token");
    userLogout();
    navLinkDataChangeCallback();
    navigate("/login", { replace: true });
  }

  const renderHeaderActionButtonList = (isLightTheme) => {
    const headerActionButtonComponentDataList = headerActionButtonDataList.map(
      (buttonDataItem) => ({
        id: buttonDataItem.id,
        actionButtonComponent: (
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
        ),
      })
    );

    const headerActionButtonListUI = (
      <HeaderActionButtonList>
        {headerActionButtonComponentDataList.map(
          (actionButtonComponentDataItem) => (
            <HeaderActionButtonListItem key={actionButtonComponentDataItem.id}>
              {actionButtonComponentDataItem.actionButtonComponent}
            </HeaderActionButtonListItem>
          )
        )}
      </HeaderActionButtonList>
    );

    return headerActionButtonListUI;
  };

  return (
    <AppContext.Consumer>
      {(appContextData) => {
        const {
          navLinkData,
          updateNavLinkData,
          selectedNavLinkId,
          isLightTheme,
          toggleIsLightTheme,
        } = appContextData;
        headerActionButtonDataList.unshift({
          id: "appTheme",
          iconComponent: isLightTheme ? (
            <MdOutlineNightlightRound />
          ) : (
            <MdLightMode />
          ),
          clickHandler: () => toggleIsLightTheme(!isLightTheme),
        });

        navLinkDataChangeCallback = updateNavLinkData;

        return (
          <HeaderBgContainer isLightTheme={isLightTheme}>
            <StyledLinkComponent to="/">
              <BrandName as="p">
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
