import {
  FooterBgContainer,
  FooterNavLinksList,
  FooterNavLinkItem,
  FooterText,
  StyledLink,
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
            <BrandName>
              Did It <BrandNamePartial>Shrink</BrandNamePartial>
            </BrandName>
            <FooterText>
              Did It Shrink
              <IconContext.Provider
                value={{
                  style: {
                    height: "1.5rem",
                    width: "1.5rem",
                    color: "#ffffff",
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
                    <StyledLink to={navRoute}>{name}</StyledLink>
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
