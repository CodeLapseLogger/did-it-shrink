import { useState } from "react";
import { IconContext } from "react-icons";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";

import { signup, login } from "../../appwrite-api";

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
  PasswordContainer,
  SignupContainer,
  SignupMessage,
  ToggleShowPasswordButton,
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

    if (isLogin) {
      login(formUserInput).then((loginResponse) =>
        console.log(`Login response: ${loginResponse}`)
      );
    } else {
      signup(formUserInput).then((signupResponse) =>
        console.log(`Signup response: ${signupResponse}`)
      );
    }
  };

  const toggleSignup = () =>
    setIsLogin((previousIsLoginState) => !previousIsLoginState);

  return (
    <LoginBgContainer>
      <LoginContentContainer>
        <LoginBrandContentContainer>
          <BrandName>
            Did It <BrandNamePartial as="span">Shrink</BrandNamePartial>
          </BrandName>
          <GreyTextBig>
            A crowdsourcing platform for product data and discovering trends
            like Shrinkflation, Brand Pricing Strategies, and more.
          </GreyTextBig>
          <br />
          <GreyTextMedium>
            Join to contribute and leverage the collective effort.
          </GreyTextMedium>
        </LoginBrandContentContainer>

        <LoginFormContentContainer>
          <LoginFormHeader>{isLogin ? "Login" : "Signup"}</LoginFormHeader>
          <LoginFormContainer onSubmit={onFormSubmit}>
            <LoginFormInputsContainer>
              {!isLogin && (
                <LoginFormSingleInputContainer>
                  <GreyTextMedium as="label" htmlFor="userName" isLabel>
                    Username
                  </GreyTextMedium>
                  <LoginFormInput
                    id="userName"
                    type="text"
                    name="userName"
                    value={formUserInput.userName}
                    placeholder="Type in username..."
                    onChange={onFormUserInputChange}
                  />
                </LoginFormSingleInputContainer>
              )}
              <LoginFormSingleInputContainer>
                <GreyTextMedium as="label" htmlFor="userEmail" isLabel>
                  Email
                </GreyTextMedium>
                <LoginFormInput
                  id="userEmail"
                  type="email"
                  name="userEmail"
                  value={formUserInput.userEmail}
                  placeholder="Enter your valid email address"
                  onChange={onFormUserInputChange}
                />
              </LoginFormSingleInputContainer>

              <LoginFormSingleInputContainer>
                <GreyTextMedium as="label" htmlFor="userPassword" isLabel>
                  Password
                </GreyTextMedium>
                <PasswordContainer>
                  <LoginFormInput
                    id="userPassword"
                    type={showPassword ? "text" : "password"}
                    name="userPassword"
                    value={formUserInput.userPassword}
                    placeholder="Choose a strong password"
                    onChange={onFormUserInputChange}
                    isTypePassword
                  />
                  <ToggleShowPasswordButton
                    type="button"
                    onClick={onToggleShowPassword}
                  >
                    <IconContext.Provider
                      value={{
                        style: {
                          height: "1.5rem",
                          width: "1.5rem",
                          color: "#3d3a38",
                        },
                      }}
                    >
                      {showPassword ? (
                        <BsFillEyeFill />
                      ) : (
                        <BsFillEyeSlashFill />
                      )}
                    </IconContext.Provider>
                  </ToggleShowPasswordButton>
                </PasswordContainer>
              </LoginFormSingleInputContainer>
            </LoginFormInputsContainer>

            <LoginFormButton type="submit">Submit</LoginFormButton>

            <LoginFormHorizontalLine />

            <SignupContainer>
              <SignupMessage>
                {isLogin ? "New user ?" : "Already signed up ?"}
              </SignupMessage>
              <LoginFormButton type="button" onClick={toggleSignup} isOutline>
                {isLogin ? "Signup" : "Login"}
              </LoginFormButton>
            </SignupContainer>
          </LoginFormContainer>
        </LoginFormContentContainer>
      </LoginContentContainer>
    </LoginBgContainer>
  );
};

export default Login;
