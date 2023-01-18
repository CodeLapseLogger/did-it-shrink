export function validateUserInput(userInput) {
  const { inputType, inputValue } = userInput;
  let validationOutcomeMessage = "";
  const emailRegExp = new RegExp("w+@w+.w+");

  if (inputValue === "") {
    validationOutcomeMessage = "*Required Field";
  } else if (inputType === "password" && inputValue.length < 8) {
    validationOutcomeMessage = "*Password should be >= 8 characters";
  } else if (
    inputType === "email" &&
    inputValue.match(emailRegExp).length !== 1
  ) {
    validationOutcomeMessage = "*Invalid email address";
  }

  return validationOutcomeMessage;
}

export function validateFormInput(formInput) {
  const { userName, userEmail, userPassword } = formInput;
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

  const validationOutcomes = {
    name: "",
    email: "",
    password: "",
  };

  for (let userInputItem of userInputData) {
    const { inputType } = userInputItem;
    validationOutcomes[inputType] = validateUserInput(userInputData);
  }

  return validationOutcomes;
}
