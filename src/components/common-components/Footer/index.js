import {
  FooterBgContainer,
  FooterNavLinksList,
  FooterNavLinkItem,
  FooterText,
  StyledLink,
  StyledNavLink,
} from "./styledComponents";

import {
  BrandName,
  BrandNamePartial,
} from "../../common-styled-components/commonStyledComponents";

import { IconContext } from "react-icons";
import { MdOutlineCopyright } from "react-icons/md";

import AppContext from "../../../contexts/AppContext";

const Footer = (props) => {
  return (
    <AppContext.Consumer>
      {(appContextData) => {
        const { navLinkData, isLightTheme } = appContextData;

        return (
          <FooterBgContainer>
            <StyledLink to={navLinkData.home.navRoute}>
              <BrandName as="p">
                Did It <BrandNamePartial as="span">Shrink</BrandNamePartial>
              </BrandName>
            </StyledLink>

            <FooterText>
              Did It Shrink
              <IconContext.Provider
                value={{
                  style: {
                    height: "1.5rem",
                    width: "1.5rem",
                    color: "#ffffff",
                    margin: "0 0.5rem -0.25rem",
                  },
                }}
              >
                <MdOutlineCopyright />
              </IconContext.Provider>
              2023. All Rights Reserved.
            </FooterText>
            <FooterNavLinksList>
              {Object.values(navLinkData).map((navLinkDataItem) => {
                const { id, name, navRoute } = navLinkDataItem;

                return (
                  <FooterNavLinkItem key={id}>
                    <StyledNavLink to={navRoute}>{name}</StyledNavLink>
                  </FooterNavLinkItem>
                );
              })}
            </FooterNavLinksList>
          </FooterBgContainer>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Footer;
