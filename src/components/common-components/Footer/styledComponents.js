import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterBgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eacd3c;
  width: 100%;
  height: 9vh;
  padding: 1rem 2rem;
`;

export const FooterText = styled.p`
  font-family: "Montserrat";
  font-size: 1.2rem;
  font-weight: 500;
  color: #ffffff;
`;

export const FooterNavLinksList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FooterNavLinkItem = styled.li`
  margin: 0.5rem 0;
`;

export const StyledLink = styled(Link, FooterText)`
  text-decoration: none;
`;
