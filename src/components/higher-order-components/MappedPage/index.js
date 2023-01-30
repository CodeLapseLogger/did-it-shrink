import { useEffect } from "react";
import AppContext from "../../../contexts/AppContext";
import { MappedPageContainer } from "./styledComponents";
import Header from "../../common-components/Header";
import Footer from "../../common-components/Footer";

const MappedPage = (props) => {
  const { navLinkIdSetter, bodyElement } = props;

  useEffect(() => navLinkIdSetter(), [navLinkIdSetter]);

  return (
    <AppContext.Consumer>
      {(appContextData) => {
        const { isLightTheme } = appContextData;

        return (
          <MappedPageContainer isLightTheme={isLightTheme}>
            <Header />
            {bodyElement}
            <Footer />
          </MappedPageContainer>
        );
      }}
    </AppContext.Consumer>
  );
};

export default MappedPage;
