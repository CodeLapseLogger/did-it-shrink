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

export const HomeSectionImageContainer = styled(HomeSectionContent)`
  width: 40%;
  background-image: url(${(props) => props.bgImageUrl});
  background-size: 90% 100%;
  background-color: inherit;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: flex-end;
`;

export const HomeSectionImageAttributionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.25rem;
`;

export const HomeSectionImageAttributionContent = styled.span`
  color: ${(props) => props.textColor};
  margin: 0 0 0 0.5rem;

  & a {
    text-decoration: none;
    font-family: "Montserrat";
    font-weight: 1.2rem;
    color: inherit;
  }
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

export const TopSectionSubHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0;
  width: 100%;
`;

export const TopSectionSubHeader1 = styled.p`
  color: #d7793e;
  font-family: "Montserrat";
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const TopSectionSubHeader2 = styled(TopSectionSubHeader1)`
  color: #65b22a;
  margin-top: 0;
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
