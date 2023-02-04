import { isAuthenticated } from "../Authentication";

const authenticatedPageNavLinkData = {
  home: {
    id: "home",
    name: "Home",
    navRoute: "/",
  },
  contribute: {
    id: "contribute",
    name: "Contribute",
    navRoute: "/contribute",
  },
  leverage: {
    id: "leverage",
    name: "Leverage",
    navRoute: "/leverage",
  },
  resources: {
    id: "resources",
    name: "Resources",
    navRoute: "/resources",
  },
};

const unauthenticatedPageNavLinkData = {
  home: {
    id: "home",
    name: "Home",
    navRoute: "/",
  },
  login: {
    id: "login",
    name: "Login",
    navRoute: "/login",
  },
  joinNow: {
    id: "joinNow",
    name: "Join Now",
    navRoute: "/join-now",
  },
};

export const getPageNavLinkData = () => {
  const pageNavLinkData = isAuthenticated()
    ? authenticatedPageNavLinkData
    : unauthenticatedPageNavLinkData;

  return pageNavLinkData;
};
