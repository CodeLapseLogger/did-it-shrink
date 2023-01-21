import styled from "styled-components";

export const LoginBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const LoginContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  border-radius: 1rem;
  /* border: 0.1rem solid #959290; */
  box-shadow: 0 0 0.5rem 0 #959290;
  min-height: 50vh;
  height: 50%;
  width: 80%;
  align-self: center;
  padding: 0;
`;

export const LoginBrandContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1.5rem;
  width: 55%;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  background-image: linear-gradient(to bottom, #f4b991, #b9b7b2);
  background-size: cover;
  margin: 0;
`;

export const LoginFormContentContainer = styled(LoginBrandContentContainer)`
  align-items: center;
  width: 45%;
  background-image: none;
  background-color: #ffffff;
  border-radius: 0 1rem 1rem 0;
  flex-grow: 0;
`;

export const BrandName = styled.h1`
  color: #f47622;
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
  margin-bottom: 0.5rem;
`;

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LoginFormHeader = styled(GreyTextBig)`
  color: #eacd3c;
  font-size: 2.75rem;
`;

export const LoginFormInputsContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  width: 100%;
`;

export const LoginFormSingleInputContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem 0;
  width: 100%;
`;

export const LoginFormInput = styled.input`
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

export const LoginFormButton = styled.button`
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
`;

export const LoginFormHorizontalLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 0.1rem solid #8b8989;
`;

export const SignupContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
`;

export const SignupMessage = styled(GreyTextMedium)`
  margin-top: 0;
  margin-right: 1rem;
  font-size: 1.2rem;
  color: #5e5c5b;
`;

export const FormMessage = styled.p`
  font-family: "Montserrat";
  margin: 0.5rem 0;
`;

export const ErrorMessage = styled(FormMessage)`
  color: red;
`;

export const SuccessMessage = styled(FormMessage)`
  color: green;
  font-size: 1.5rem;
  margin: 0.5rem;
`;

export const CenteredContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
