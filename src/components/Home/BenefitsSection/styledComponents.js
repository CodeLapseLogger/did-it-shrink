import styled from "styled-components";
import { HomeSectionContainer2 } from "../styledComponents";

export const BenefitsSectionContainer = styled(HomeSectionContainer2)`
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const BenefitsHeader = styled.h1`
  color: #f1dc68;
  font-family: "Montserrat";
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  border: 0.5rem inset #84680b;
  padding: 0.75rem 1.25rem;
  background-color: #a08016;
`;

export const BenefitsList = styled.ul`
  list-style-type: none;
  padding-left: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const BenefitsListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

export const BenefitName = styled.p`
  font-family: "Montserrat";
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 0.5rem;
  color: #faed7b;
`;
