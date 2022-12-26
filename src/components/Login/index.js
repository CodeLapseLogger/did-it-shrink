import { Client } from "appwrite";

const Login = (props) => {
  // Appwrite integration
  const client = new Client();

  client
    .setEndpoint(process.env.REACT_APP_APPWRITE_CLIENT_ENDPOINT)
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);
};

export default Login;
