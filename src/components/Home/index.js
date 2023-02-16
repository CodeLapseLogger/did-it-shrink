import TopSection from "./TopSection";
import BenefitsSection from "./BenefitsSection";
import ContributeCallToActionSection from "./ContributeCallToActionSection";

import { HomeBgContainer } from "./styledComponents";

const Home = (props) => {
  return (
    <HomeBgContainer>
      <TopSection />
      <BenefitsSection />
      <ContributeCallToActionSection />
    </HomeBgContainer>
  );
};

export default Home;
