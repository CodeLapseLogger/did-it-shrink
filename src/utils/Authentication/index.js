// Separate object to model error
// messages and the nested objects
// is intentional to enable extension
// of error checks in the future.
const errorMessages = {
  generic: {
    emptyField: "*Required Field",
  },
  email: {
    invalid: "*Invalid email address",
  },
  password: {
    length: "*Password should be >= 8 characters",
  },
};

// Function to validate single user input.
// The setup of isErroneous property with
// initial boolean value: true, is intentional.
// That is because the function primarily does
// error checks and has more cases of failure
// than the single pass case. So, if the initial
// value is set to: false, the number of times the
// value needs to be toggled to: true, is a linear
// function of the number of error checks, repeating
// the line of code in every failure case. With the
// current setup, will only have to toggle the value
// once, when all checks pass. The emphasis is on
// "Do not Repeat Yourself" (DRY) best practice of
// software engineering.
function validateUserInput(userInput) {
  const { inputType, inputValue } = userInput;
  let inputValidationResult = {
    isErroneous: true /* initial assumption: input is erroneous */,
    errorMessage: "",
  };

  const validEmailRegExp = new RegExp("w+@w+.w+");

  if (inputValue === "") {
    inputValidationResult.errorMessage = errorMessages.generic.emptyField;
  } else if (inputType === "password" && inputValue.length < 8) {
    inputValidationResult.errorMessage = errorMessages.password.length;
  } else if (
    inputType === "email" &&
    inputValue.match(validEmailRegExp).length !==
      1 /* input didn't match valid pattern */
  ) {
    inputValidationResult.errorMessage = errorMessages.email.invalid;
  } else {
    // all checks passed
    inputValidationResult.isErroneous = false; // error flag toggled once
  }

  return inputValidationResult;
}

export function validateFormInput(formInput) {
  const { userName, userEmail, userPassword } = formInput;
  let formInputValidationResults = {
    atleastOneInputIsErroneous: false,
    errorMessages: {
      name: "",
      email: "",
      password: "",
    },
  };
  const userInputData = [
    {
      inputType: "name",
      inputValue: userName,
    },
    {
      inputType: "email",
      inputValue: userEmail,
    },
    {
      inputType: "password",
      inputValue: userPassword,
    },
  ];

  for (let userInputItem of userInputData) {
    const { inputType } = userInputItem;
    const { isErroneous, errorMessage } = validateUserInput(userInputItem);
    formInputValidationResults.atleastOneInputIsErroneous ||= isErroneous; // Captures the aggregate of all erroneous form inputs
    formInputValidationResults.errorMessages[inputType] = errorMessage;
  }

  return formInputValidationResults;
}