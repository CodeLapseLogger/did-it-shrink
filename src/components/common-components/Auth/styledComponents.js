import styled from "styled-components";

export const AuthBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 3rem;
`;

export const AuthContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem 0 #959290;
  align-self: center;
`;

export const AuthBrandContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1.5rem;
  width: 55%;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  background-image: linear-gradient(to bottom, #d0bf23, #b9b7b2);
  background-size: cover;
  margin: 0;
`;

export const AuthFormContentContainer = styled(AuthBrandContentContainer)`
  align-items: center;
  width: 45%;
  background-image: none;
  background-color: #ffffff;
  border-radius: 0 1rem 1rem 0;
  flex-grow: 0;
`;

export const BrandName = styled.h1`
  color: #da6618;
  font-family: "Kalam";
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0;
`;

export const BrandNamePartial = styled(BrandName)`
  font-weight: 300;
`;

export const GreyTextBig = styled.p`
  color: #5e5c5b;
  font-family: "Montserrat";
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0;
`;

export const GreyTextMedium = styled(GreyTextBig)`
  font-size: ${(props) => (props.isLabel ? "1.2rem" : "1.5rem")};
  color: ${(props) => (props.isLabel ? "#5e5c5b" : "#ffffff")};
  margin-top: 1rem;
`;

export const AuthFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AuthFormHeader = styled(GreyTextBig)`
  color: #eacd3c;
  font-size: 2.75rem;
`;

export const AuthFormInputsContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  width: 100%;
`;

export const AuthFormSingleInputContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem 0;
  width: 100%;
`;

export const AuthFormInput = styled.input`
  outline: none;
  /* border: ${(props) =>
    props.isTypePassword ? "none" : "0.1rem solid #d0cecc"}; */
  border: none;
  border-radius: 0.4rem;
  padding: 1rem;
  color: #3d3a38;
  width: ${(props) => (props.isTypePassword ? "85%" : "90%")};
  font-family: "Montserrat";
  font-size: 1.1rem;
  color: #7f7d7a;
  flex: auto;
`;

export const ToggleShowPasswordButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 15%;
  flex: auto;
`;

export const UserInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.1rem solid #d0cecc;
  border-radius: 0.4rem;
  width: 100%;
  flex: auto;
`;

export const AuthFormButton = styled.button`
  color: ${(props) => (props.isOutline ? "#eacd3c" : "#ffffff")};
  background-color: ${(props) => (props.isOutline ? "#ffffff" : "#eacd3c")};
  border: none;
  border-radius: ${(props) => !props.isOutline && "2rem"};
  padding: ${(props) => (props.isOutline ? "0" : "1rem 2.5rem")};
  outline: none;
  cursor: pointer;
  font-family: "Montserrat";
  font-size: 1.2rem;
  font-weight: 600;
  margin: ${(props) => (props.isOutline ? "0 0 0.5rem 0" : "0 0 0.25rem 0")};
  align-self: ${(props) => (props.isOutline ? "none" : "center")};
  ${(props) =>
    props.isProcessingAuthRequest &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const FormMessage = styled.p`
  font-family: "Montserrat";
  margin: 0.5rem 0;
`;

export const ErrorMessage = styled(FormMessage)`
  color: red;
`;

export const AuthReqOutcomeMessage = styled(FormMessage)`
  color: ${(props) => props.messageColor};
  font-size: 1rem;
  margin: 0.5rem 0 0.5rem 0.5rem;
  flex-shrink: 1;
`;

export const CenteredContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
