import styled from "styled-components";

export const HomeBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HomeSectionContainer1 = styled.section`
  background-color: #f5e482;
  display: flex;
  justify-content: center;
`;

export const HomeSectionContainer2 = styled(HomeSectionContainer1)`
  background-color: #dcc027;
`;

export const HomeSectionContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`;

export const HomeSectionImageContainer = styled(HomeSectionContent)`
  justify-content: center;
`;
export const HomeSectionHeader1 = styled.h1`
  color: #323131;
  font-family: "Montserrat";
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const HomeSectionHeader2 = styled(HomeSectionHeader1)`
  color: #ffffff;
`;

export const TopSectionSubHeader1 = styled.p`
  color: #d7793e;
  font-family: "Montserrat";
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const TopSectionSubHeader2 = styled(TopSectionSubHeader1)`
  color: #34d5f5;
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
`;
