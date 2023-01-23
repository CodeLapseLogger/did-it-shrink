import { useState, useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  BsFillEyeSlashFill,
  BsFillEyeFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import Cookies from "js-cookie";
import { Oval } from "react-loader-spinner";
import { validateFormInput } from "../../utils/Authentication";
import { defaultOvalSpinnerConfig } from "../../utils/LoaderSpinner";

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
  ErrorMessage,
  CenteredContentContainer,
  SuccessMessage,
} from "./styledComponents";

const Login = (props) => {
  const initialFormInputState = {
    userName: "",
    userEmail: "",
    userPassword: "",
  };

  const initialErrorMessagesState = {
    name: "",
    email: "",
    password: "",
  };

  // Track login form user input
  const [formUserInput, setFormUserInput] = useState(initialFormInputState);

  const [showPassword, toggleShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [authStatus, setAuthStatus] = useState("initial");
  const [isInitialLoad, setIsInitialLoad] = useState("true");
  const [errorMessages, setErrorMessages] = useState(initialErrorMessagesState);
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
    const formDataForValidation = { ...formUserInput, isLogin };
    const inputValidationResult = validateFormInput(formDataForValidation);

    if (inputValidationResult.atleastOneInputIsErroneous) {
      setErrorMessages(inputValidationResult.errorMessages);
      return;
    } else {
      // no validation errors, reset earlier error messages
      setErrorMessages(initialErrorMessagesState);
    }

    setAuthStatus("loading");

    if (isLogin) {
      userLogin(formUserInput)
        .then((loginResponse) => {
          console.log(
            `JSON.stringify(loginResponse): ${JSON.stringify(loginResponse)}`
          );

          generateJWT()
            .then((jwtResponse) => {
              const { jwt } = jwtResponse;
              Cookies.set("did-it-shrink-jwt-token", jwt);
              setAuthStatus("success");
              navigate("/", { replace: true });
            })
            .catch((jwtError) => {
              setAuthStatus("failure");
              console.log(
                `JSON.stringify(jwtError): ${JSON.stringify(jwtError)}`
              );
            });
        })
        .catch((loginError) => {
          setAuthStatus("failure");
          console.log(
            `JSON.stringify(loginError): ${JSON.stringify(loginError)}`
          );
        });
    } else {
      userSignup(formUserInput)
        .then((signupResponse) => {
          setAuthStatus("success");
          setFormUserInput(initialFormInputState);
          setIsLogin(true);
          console.log(
            `JSON.stringify(signupResponse): ${JSON.stringify(signupResponse)}`
          );
        })
        .catch((signupError) => {
          setAuthStatus("failure");
          console.log(
            `JSON.stringify(signupError): ${JSON.stringify(signupError)}`
          );
        });
    }
  };

  const toggleSignup = () =>
    setIsLogin((previousIsLoginState) => !previousIsLoginState);

  const getSubmitButtonText = () => {
    let buttonText = "";
    if (authStatus === "loading") {
      buttonText = "Processing...";
    } else {
      buttonText = "Submit";
    }

    return buttonText;
  };

  function getStyledOvalSpinnerComponent(customConfig = {}) {
    const finalOvalSpinnerConfig = {
      ...defaultOvalSpinnerConfig,
      ...customConfig,
    };
    return (
      <CenteredContentContainer>
        <Oval {...finalOvalSpinnerConfig} />
      </CenteredContentContainer>
    );
  }

  function getSignupSuccessUI() {
    return (
      <CenteredContentContainer>
        <IconContext.Provider
          value={{
            style: { height: "1.5rem", width: "1.5rem", color: "#9cb82b" },
          }}
        >
          <BsFillCheckCircleFill />
        </IconContext.Provider>
        <SuccessMessage>Signup Success</SuccessMessage>
      </CenteredContentContainer>
    );
  }

  let renderedFinalUI = null;
  let isProcessingAuthRequest = authStatus === "loading";

  if (isInitialLoad) {
    renderedFinalUI = getStyledOvalSpinnerComponent();
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
            {authStatus === "success" && getSignupSuccessUI()}
            <LoginFormContainer onSubmit={onFormSubmit}>
              <LoginFormInputsContainer>
                {!isLogin && (
                  <>
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
                    {errorMessages.name && (
                      <ErrorMessage>{errorMessages.name}</ErrorMessage>
                    )}
                  </>
                )}

                <>
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
                  {errorMessages.email && (
                    <ErrorMessage>{errorMessages.email}</ErrorMessage>
                  )}
                </>

                <>
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

                  {errorMessages.password && (
                    <ErrorMessage>{errorMessages.password}</ErrorMessage>
                  )}
                </>
              </LoginFormInputsContainer>

              <LoginFormButton
                type="submit"
                disabled={isProcessingAuthRequest}
                isProcessingAuthRequest={isProcessingAuthRequest}
              >
                {isProcessingAuthRequest &&
                  getStyledOvalSpinnerComponent({
                    height: 25,
                    width: 25,
                    color: "white",
                    secondaryColor: "#c3ad3e",
                    wrapperStyle: {
                      marginRight: "0.5rem",
                    },
                  })}
                {getSubmitButtonText()}
              </LoginFormButton>

              <LoginFormHorizontalLine />

              <SignupContainer>
                <SignupMessage>
                  {isLogin ? "New user ?" : "Already signed up ?"}
                </SignupMessage>
                <LoginFormButton
                  type="button"
                  onClick={toggleSignup}
                  disabled={isProcessingAuthRequest}
                  isOutline
                >
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
