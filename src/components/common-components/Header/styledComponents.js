import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderBgContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem 2rem;
  background-color: #eacd3c;
`;

export const BrandName = styled.h1`
  font-family: "Kalam";
  font-size: 3.5rem;
  font-weight: 700;
  color: #f47622;
`;

export const BrandNamePartial = styled(BrandName)`
  font-weight: 300;
`;

export const HeaderMenuAndAccountContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderMenuContainer = styled.ul`
  list-style-type: none;
  padding-left: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderMenuItem = styled.li`
  margin: 0 0.5rem;
  background-color: ${(props) =>
    props.isSelected ? "#ffffff" : "transparent"};
  color: ${(props) => (props.isSelected ? "#eacd3c" : "#ffffff")};
  flex: auto;
`;

export const StyledLinkComponent = styled(Link)`
  font-family: "Montserrat";
  font-size: 2rem;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
`;

export const AccountButton = styled.button`
  border: none;
  border-left: 0.1rem solid #ffffff;
  outline: none;
  cursor: pointer;
  background: transparent;
`;
