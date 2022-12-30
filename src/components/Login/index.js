import { useState, useEffect } from "react";

import {
  BrandName,
  BrandNamePartial,
  GreyTextBig,
  GreyTextMedium,
  LoginBgContainer,
  LoginBrandContentContainer,
  LoginContentContainer,
  LoginFormButton,
  LoginFormContainer,
  LoginFormContentContainer,
  LoginFormHeader,
  LoginFormHorizontalLine,
  LoginFormInput,
  LoginFormInputsContainer,
  LoginFormSingleInputContainer,
  SignupContainer,
  SignupMessage,
} from "./styledComponents";

const Login = (props) => {
  // Track login form user input
  const [formUserInput, setFormUserInput] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  const [showPassword, toggleShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  // Form user input change event handler
  // to access updated form user input and
  // accordingly reflect the change in state
  // with call to setFormUserInput.
  const onFormUserInputChange = (inputChangeEvent) => {
    const { name, value } = inputChangeEvent.target;

    setFormUserInput((previousFormUserInput) => {
      const updatedFormUserInput = {
        ...previousFormUserInput,
        [name]: value,
      };

      return updatedFormUserInput;
    });
  };

  const onToggleShowPassword = () =>
    toggleShowPassword(
      (previousShowPasswordState) => !previousShowPasswordState
    );

  const onFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    console.log(formUserInput);
  };

  const toggleSignup = () =>
    setIsLogin((previousIsLoginState) => !previousIsLoginState);

  return (
    <LoginBgContainer>
      <LoginContentContainer>
        <LoginBrandContentContainer>
          <BrandName>
            Did It <BrandNamePartial>Shrink</BrandNamePartial>
          </BrandName>
          <GreyTextBig>
            A crowdsourcing platform for product data and discovering trends
            like Shrinkflation, Brand Pricing Strategies, and more.
          </GreyTextBig>
          <br />
          <GreyTextMedium>
            Contribute to and leverage the collective effort.
          </GreyTextMedium>
        </LoginBrandContentContainer>

        <LoginFormContentContainer>
          <LoginFormHeader>{isLogin ? "Login" : "Signup"}</LoginFormHeader>
          <LoginFormContainer onSubmit={onFormSubmit}>
            <LoginFormInputsContainer>
              {!isLogin && (
                <LoginFormSingleInputContainer>
                  <GreyTextMedium as="label" htmlFor="userName">
                    Username
                  </GreyTextMedium>
                  <LoginFormInput
                    id="userName"
                    type="text"
                    name="userName"
                    value={formUserInput.userName}
                    onChange={onFormUserInputChange}
                  />
                </LoginFormSingleInputContainer>
              )}
              <LoginFormSingleInputContainer>
                <GreyTextMedium as="label" htmlFor="userEmail">
                  Email
                </GreyTextMedium>
                <LoginFormInput
                  id="userEmail"
                  type="email"
                  name="userEmail"
                  value={formUserInput.userEmail}
                  onChange={onFormUserInputChange}
                />
              </LoginFormSingleInputContainer>

              <LoginFormSingleInputContainer>
                <GreyTextMedium as="label" htmlFor="userPassword">
                  Password
                </GreyTextMedium>
                <LoginFormInput
                  id="userPassword"
                  type="password"
                  name="userPassword"
                  value={formUserInput.userPassword}
                  onChange={onFormUserInputChange}
                />
              </LoginFormSingleInputContainer>

              <LoginFormButton type="submit">Submit</LoginFormButton>

              <LoginFormHorizontalLine />

              <SignupContainer>
                <SignupMessage>
                  {isLogin ? "New user ?" : "Already signed up ?"}
                </SignupMessage>
                <LoginFormButton isOutline onClick={toggleSignup}>
                  {isLogin ? "Signup" : "Login"}
                </LoginFormButton>
              </SignupContainer>
            </LoginFormInputsContainer>
          </LoginFormContainer>
        </LoginFormContentContainer>
      </LoginContentContainer>
    </LoginBgContainer>
  );
};

export default Login;
