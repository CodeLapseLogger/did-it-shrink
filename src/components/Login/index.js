import { useState, useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import Cookies from "js-cookie";
import { Oval } from "react-loader-spinner";

import {
  userSignup,
  userLogin,
  generateJWT,
} from "../../appwrite-api/appwrite-api";

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
  UserInputContainer,
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
  const [authStatus, setAuthStatus] = useState("initial");
  const [isInitialLoad, setIsInitialLoad] = useState("true");
  let isUserLoggedIn = useRef(false);

  const navigate = useNavigate();

  useEffect(() => {
    const authToken = Cookies.get("did-it-shrink-jwt-token");
    if (authToken !== undefined) {
      isUserLoggedIn.current = true;
    }

    setIsInitialLoad(false);
  }, [authStatus]);

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

    setAuthStatus("loading");

    if (isLogin) {
      userLogin(formUserInput)
        .then((loginResponse) => {
          console.log(`Login response: ${loginResponse}`);
          console.log(
            `Login response access token: ${loginResponse.providerAccessToken}`
          );
          for (let responseObjKey in loginResponse) {
            console.log(
              `responseObjKey: ${responseObjKey}, responseObjValue: ${loginResponse[responseObjKey]}`
            );
          }

          generateJWT().then((jwtResponse) => {
            Cookies.set("did-it-shrink-jwt-token", jwtResponse.jwt);
            navigate("/", { replace: true });
            setAuthStatus("success");
          });
        })
        .catch((loginError) => {
          console.log(loginError);
          setAuthStatus("failure");
        });
    } else {
      userSignup(formUserInput)
        .then((signupResponse) => {
          console.log(`Signup response: ${signupResponse}`);

          setAuthStatus("success");
          setIsLogin(true);
        })
        .catch((signupError) => {
          console.log(signupError);
          setAuthStatus("failure");
        });
    }
  };

  const toggleSignup = () =>
    setIsLogin((previousIsLoginState) => !previousIsLoginState);

  const getSubmitButtonText = () => {
    let buttonText = "";
    if (authStatus === "initial") {
      buttonText = "Submit";
    } else if (authStatus === "loading") {
      buttonText = "Processing";
    } else if (authStatus === "success") {
      buttonText = `${isLogin ? "Login" : "Signup"} Success`;
    } else if (authStatus === "failure") {
      buttonText = `${isLogin ? "Login" : "Signup"} Failure`;
    }

    return buttonText;
  };

  let renderedFinalUI = null;
  if (isInitialLoad) {
    renderedFinalUI = (
      <Oval
        height={80}
        width={80}
        color="#eacd3c"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#f5e17e"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    );
  } else if (isUserLoggedIn.current) {
    renderedFinalUI = <Navigate to="/" replace />;
  } else {
    renderedFinalUI = (
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
                    <UserInputContainer>
                      <LoginFormInput
                        id="userName"
                        type="text"
                        name="userName"
                        value={formUserInput.userName}
                        placeholder="Type in username..."
                        onChange={onFormUserInputChange}
                      />
                    </UserInputContainer>
                  </LoginFormSingleInputContainer>
                )}
                <LoginFormSingleInputContainer>
                  <GreyTextMedium as="label" htmlFor="userEmail" isLabel>
                    Email
                  </GreyTextMedium>
                  <UserInputContainer>
                    <LoginFormInput
                      id="userEmail"
                      type="email"
                      name="userEmail"
                      value={formUserInput.userEmail}
                      placeholder="Enter your valid email address"
                      onChange={onFormUserInputChange}
                    />
                  </UserInputContainer>
                </LoginFormSingleInputContainer>

                <LoginFormSingleInputContainer>
                  <GreyTextMedium as="label" htmlFor="userPassword" isLabel>
                    Password
                  </GreyTextMedium>
                  <UserInputContainer>
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
                  </UserInputContainer>
                </LoginFormSingleInputContainer>
              </LoginFormInputsContainer>

              <LoginFormButton
                type="submit"
                disabled={authStatus === "initial" ? false : true}
              >
                {getSubmitButtonText()}
              </LoginFormButton>

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
  }

  return renderedFinalUI;
};

export default Login;
