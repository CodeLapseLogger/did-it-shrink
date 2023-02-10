import styled from "styled-components";

export const MappedPageContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-color: ${(props) => (props.isLightTheme ? "#ffffff" : "#0a0a09")};
`;
