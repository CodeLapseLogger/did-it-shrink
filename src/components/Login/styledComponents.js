import styled from "styled-components";

export const LoginBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const LoginContentContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 1rem;
  min-height: 50vh;
  height: 50%;
`;

export const LoginBrandContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

export const LoginFormContentContainer = styled(LoginBrandContentContainer)`
  align-items: center;
`;

export const BrandName = styled.h1`
  color: #f47622;
  font-family: "Kalam";
  font-size: 2.5rem;
  font-weight: 700;
`;

export const BrandNamePartial = styled(BrandName)`
  font-weight: 300;
`;

export const GreyTextBig = styled.p`
  color: #5e5c5b;
  font-family: "Montserrat";
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const GreyTextMedium = styled(GreyTextBig)`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginFormHeader = styled(GreyTextBig)`
  color: #eacd3c;
`;

export const LoginFormInputsContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  width: 100%;
`;

export const LoginFormSingleInputContainer = styled.li`
  margin: 0.5rem;
`;

export const LoginFormInput = styled.input`
  outline: none;
  border: 0.1rem solid #87807c;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  color: #3d3a38;
`;

export const LoginFormButton = styled.button`
  color: ${(props) => (props.isOutline ? "#eacd3c" : "#ffffff")};
  background-color: ${(props) => (props.isOutline ? "#ffffff" : "#eacd3c")};
  border: 0.1rem solid #eacd3c;
  padding: 0.75rem 1.25rem;
  outline: none;
  cursor: pointer;
  font-family: "Montserrat";
  font-size: 1.2rem;
  font-weight: 600;
`;

export const LoginFormHorizontalLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 0.1rem solid #3d3c3b;
`;

export const SignupContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SignupMessage = styled(GreyTextMedium)`
  margin-right: 1rem;
`;
