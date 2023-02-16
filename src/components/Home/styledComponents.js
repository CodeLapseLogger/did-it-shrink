import styled from "styled-components";

export const HomeBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
`;

export const HomeSectionContainer1 = styled.section`
  background-color: #f5e482;
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  height: ${(props) => props.sectionHeight ?? "60vh"};
`;

export const HomeSectionContainer2 = styled(HomeSectionContainer1)`
  background-color: #dcc027;
`;

export const HomeSectionContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
`;

export const HomeSectionHeader1 = styled.h1`
  color: #323131;
  font-family: "Montserrat";
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: start;
`;

export const HomeSectionHeader2 = styled(HomeSectionHeader1)`
  color: #ffffff;
`;

export const HomeSectionText2 = styled.p`
  font-family: "Montserrat";
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0.5rem;
`;

export const CallToActionButton = styled.button`
  background-color: #6f6a52;
  border: none;
  border-radius: 0.25rem;
  padding: 0.75rem 1.25rem;
  font-family: "Montserrat";
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  align-self: flex-start;
  margin-top: 0.5rem;
`;
