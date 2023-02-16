import styled from "styled-components";

export const BackgroundImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 1rem;
  width: ${(props) => props.containerWidth ?? "40%"};
  background-image: url(${(props) => props.bgImageUrl});
  background-size: ${(props) =>
    `${props.bgImgWidth ?? "90%"} ${props.bgImgHeight ?? "100%"}`};
  background-color: inherit;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BackgroundImageAttributionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.25rem;
`;

export const BackgroundImageAttributionContent = styled.span`
  color: ${(props) => props.textColor};
  margin: 0 0 0 0.5rem;
  font-weight: 600;

  & a {
    text-decoration: none;
    font-family: "Montserrat";
    font-weight: inherit;
    color: inherit;
  }
`;
