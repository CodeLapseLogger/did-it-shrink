import { useState, useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  BsFillEyeSlashFill,
  BsFillEyeFill,
  BsFillCheckCircleFill,
  BsXCircleFill,
} from "react-icons/bs";
import Cookies from "js-cookie";
import { Oval } from "react-loader-spinner";
import { validateFormInput } from "../../../utils/Authentication";
import { defaultOvalSpinnerConfig } from "../../../utils/LoaderSpinner";
import {
  getUserRegistrationSuccessMessage,
  getRedirectMessage,
} from "../../../utils/Authentication";

import {
  userSignup,
  userLogin,
  generateJWT,
} from "../../../appwrite-api/appwrite-api";

import {
  BrandName,
  BrandNamePartial,
  GreyTextBig,
  GreyTextMedium,
  AuthBrandContentContainer,
  AuthBgContainer,
  AuthContentContainer,
  AuthFormButton,
  AuthFormContainer,
  AuthFormContentContainer,
  AuthFormHeader,
  AuthFormInput,
  AuthFormInputsContainer,
  AuthFormSingleInputContainer,
  UserInputContainer,
  ToggleShowPasswordButton,
  ErrorMessage,
  CenteredContentContainer,
  AuthReqOutcomeMessage,
} from "./styledComponents";

import AppContext from "../../../contexts/AppContext";

const Auth = (props) => {
  const { isLogin } = props;
  const initialFormInputState = {
    userName: "",
    userEmail: "",
    userPassword: "",
  };

  // Tracks error message state for
  // form field inputs and also the
  // signup/login authentication
  // request outcome in: auth
  const initialErrorMessagesState = {
    name: "",
    email: "",
    password: "",
    auth: "",
  };

  // Track login form user input
  const [formUserInput, setFormUserInput] = useState(initialFormInputState);
  const [showPassword, toggleShowPassword] = useState(false);
  const [authStatus, setAuthStatus] = useState("initial"); // Tracks signup status (success/failure)
  const [isInitialLoad, setIsInitialLoad] = useState("true");
  const [errorMessages, setErrorMessages] = useState(initialErrorMessagesState);
  let isUserLoggedIn = useRef(false);

  const navigate = useNavigate();

  let navLinkDataChangeCallback = null;

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

  const updateAuthErrorMessage = (failureResponse) => {
    const { message } = failureResponse;
    setErrorMessages((previousErrorMessages) => ({
      ...previousErrorMessages,
      auth: message,
    }));
  };

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
          generateJWT()
            .then((jwtResponse) => {
              const { jwt } = jwtResponse;
              Cookies.set("did-it-shrink-jwt-token", jwt);
              setAuthStatus("success");
              navLinkDataChangeCallback();
              navigate("/", { replace: true });
            })
            .catch((jwtError) => {
              setAuthStatus("failure");
              updateAuthErrorMessage(jwtError.response);
            });
        })
        .catch((loginError) => {
          setAuthStatus("failure");
          updateAuthErrorMessage(loginError.response);
        });
    } else {
      userSignup(formUserInput)
        .then((signupResponse) => {
          setAuthStatus("success");
          setFormUserInput(initialFormInputState);
          setTimeout(() => {
            setAuthStatus("redirect");
          }, 1500);
          setTimeout(() => {
            setAuthStatus("redirect");
            navigate("/login", { replace: true });
          }, 3000);
        })
        .catch((signupError) => {
          setAuthStatus("failure");
          updateAuthErrorMessage(signupError.response);
        });
    }
  };

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

  function getAuthReqOutcomeMessageUI(messageConfig) {
    const {
      message,
      messageColor,
      isSpinner,
      messageReactIconOrSpinner,
      iconSize,
    } = messageConfig;

    return (
      <CenteredContentContainer>
        {isSpinner ? (
          messageReactIconOrSpinner
        ) : (
          <IconContext.Provider
            value={{
              style: { height: iconSize, width: iconSize, color: messageColor },
            }}
          >
            {messageReactIconOrSpinner}
          </IconContext.Provider>
        )}
        <AuthReqOutcomeMessage messageColor={messageColor}>
          {message}
        </AuthReqOutcomeMessage>
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
      <AppContext.Consumer>
        {(appContextData) => {
          const { updateNavLinkData } = appContextData;
          navLinkDataChangeCallback = updateNavLinkData;

          return (
            <AuthBgContainer>
              <AuthContentContainer>
                <AuthBrandContentContainer>
                  <BrandName>
                    Did It <BrandNamePartial as="span">Shrink</BrandNamePartial>
                  </BrandName>
                  <GreyTextBig>
                    A crowdsourcing platform for product data and discovering
                    trends like Shrinkflation, Brand Pricing Strategies, and
                    more.
                  </GreyTextBig>
                  <br />
                  <GreyTextMedium>
                    Join to contribute and leverage the collective effort.
                  </GreyTextMedium>
                </AuthBrandContentContainer>

                <AuthFormContentContainer>
                  <AuthFormHeader>
                    {isLogin ? "Login" : "New User Registration"}
                  </AuthFormHeader>
                  {authStatus === "success" &&
                    getAuthReqOutcomeMessageUI({
                      message: getUserRegistrationSuccessMessage(),
                      messageColor: "#9cb82b",
                      messageReactIconOrSpinner: <BsFillCheckCircleFill />,
                      iconSize: "1.2rem",
                    })}

                  {authStatus === "redirect" &&
                    getAuthReqOutcomeMessageUI({
                      message: getRedirectMessage(),
                      messageColor: "#3a3a38",
                      messageReactIconOrSpinner: getStyledOvalSpinnerComponent({
                        height: 25,
                        width: 25,
                        color: "#3a3a38",
                        secondaryColor: "#545453",
                        wrapperStyle: {
                          marginRight: "0.5rem",
                        },
                      }),
                      //   iconSize: "1.2rem",
                    })}

                  {authStatus === "failure" &&
                    getAuthReqOutcomeMessageUI({
                      message: errorMessages.auth,
                      messageColor: "red",
                      messageReactIconOrSpinner: <BsXCircleFill />,
                      iconSize: "1.5rem",
                    })}
                  <AuthFormContainer onSubmit={onFormSubmit}>
                    <AuthFormInputsContainer>
                      {!isLogin && (
                        <>
                          <AuthFormSingleInputContainer>
                            <GreyTextMedium
                              as="label"
                              htmlFor="userName"
                              isLabel
                            >
                              Username
                            </GreyTextMedium>
                            <UserInputContainer>
                              <AuthFormInput
                                id="userName"
                                type="text"
                                name="userName"
                                value={formUserInput.userName}
                                placeholder="Type in username..."
                                onChange={onFormUserInputChange}
                              />
                            </UserInputContainer>
                          </AuthFormSingleInputContainer>
                          {errorMessages.name && (
                            <ErrorMessage>{errorMessages.name}</ErrorMessage>
                          )}
                        </>
                      )}

                      <>
                        <AuthFormSingleInputContainer>
                          <GreyTextMedium
                            as="label"
                            htmlFor="userEmail"
                            isLabel
                          >
                            Email
                          </GreyTextMedium>
                          <UserInputContainer>
                            <AuthFormInput
                              id="userEmail"
                              type="email"
                              name="userEmail"
                              value={formUserInput.userEmail}
                              placeholder={
                                isLogin
                                  ? "Enter your registered email address"
                                  : "Enter your valid email address"
                              }
                              onChange={onFormUserInputChange}
                            />
                          </UserInputContainer>
                        </AuthFormSingleInputContainer>
                        {errorMessages.email && (
                          <ErrorMessage>{errorMessages.email}</ErrorMessage>
                        )}
                      </>

                      <>
                        <AuthFormSingleInputContainer>
                          <GreyTextMedium
                            as="label"
                            htmlFor="userPassword"
                            isLabel
                          >
                            Password
                          </GreyTextMedium>
                          <UserInputContainer>
                            <AuthFormInput
                              id="userPassword"
                              type={showPassword ? "text" : "password"}
                              name="userPassword"
                              value={formUserInput.userPassword}
                              placeholder={
                                isLogin
                                  ? "Enter your registered password"
                                  : "Choose a strong password"
                              }
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
                        </AuthFormSingleInputContainer>

                        {errorMessages.password && (
                          <ErrorMessage>{errorMessages.password}</ErrorMessage>
                        )}
                      </>
                    </AuthFormInputsContainer>

                    <AuthFormButton
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
                    </AuthFormButton>
                  </AuthFormContainer>
                </AuthFormContentContainer>
              </AuthContentContainer>
            </AuthBgContainer>
          );
        }}
      </AppContext.Consumer>
    );
  }

  return renderedFinalUI;
};

export default Auth;
