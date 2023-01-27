import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderBgContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9vh;
  width: 100%;
  padding: 1rem 2rem;
  background-color: #eacd3c;
`;

export const BrandName = styled.h1`
  font-family: "Kalam";
  font-size: 2rem;
  font-weight: 700;
  color: #f47622;
`;

export const BrandNamePartial = styled(BrandName)`
  font-weight: 300;
  margin-left: 0;
`;

export const HeaderMenuAndActionButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const HeaderMenuContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderMenuItem = styled.li`
  margin: 0 0.85rem;
  background-color: ${(props) =>
    props.isSelected ? "#ffffff" : "transparent"};
  color: ${(props) => (props.isSelected ? "#eacd3c" : "#ffffff")};
  /* flex: auto; */
  ${(props) =>
    props.isSelected &&
    `
    padding: 0.5rem 1rem;
    border-radius: 2rem;
  `}
`;

export const StyledLinkComponent = styled(Link)`
  font-family: "Montserrat";
  font-size: 1.5rem;
  font-weight: 500;
  color: inherit;
  text-decoration: none;
`;

export const HeaderActionButtonList = styled(HeaderMenuContainer)`
  justify-content: flex-start;
  border-left: 0.1rem solid #f9f5f5;
  margin-left: none;
`;

export const HeaderActionButtonListItem = styled.li`
  margin: 0 0.35rem 0 0.15rem;
`;

export const HeaderActionButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
`;
