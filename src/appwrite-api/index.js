import { Client, Account, ID } from "appwrite";
import { AppwriteBackend } from "../utils/AppwriteBackend";

const client = new Client();
const account = new Account(client);

const { clientEndpoint, projectId } = AppwriteBackend;

client.setEndPoint(clientEndpoint).setProject(projectId);

export const userSignup = async (userData) => {
  const { userName, userEmail, userPassword } = userData;

  let signupResponse = null;

  try {
    signupResponse = await account.create(
      ID.unique(),
      userEmail,
      userPassword,
      userName
    );
  } catch (signupError) {
    signupResponse = signupError;
  }

  return signupResponse;
};

export const userLogin = async (userCredentials) => {
  const { userEmail, userPassword } = userCredentials;

  let loginResponse = null;

  try {
    loginResponse = await account.createEmailSession(userEmail, userPassword);
  } catch (loginError) {
    loginResponse = loginError;
  }

  return loginResponse;
};
