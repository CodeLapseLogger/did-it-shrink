import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../utils/Authentication";
import { imageData } from "../../assets/images/ImageData";
import BenefitsSection from "./BenefitsSection";

import {
  CallToActionButton,
  HomeBgContainer,
  HomeSectionContainer1,
  HomeSectionContainer2,
  HomeSectionContent,
  HomeSectionHeader1,
  HomeSectionHeader2,
  HomeSectionImageContainer,
  HomeSectionImageAttributionContainer,
  HomeSectionImageAttributionContent,
  HomeSectionText2,
  TopSectionSubHeaderContainer,
  TopSectionSubHeader1,
  TopSectionSubHeader2,
} from "./styledComponents";

const Home = (props) => {
  const navigate = useNavigate();

  const onJoinNow = (joinNowEvent) => {
    joinNowEvent.preventDefault();
    navigate("/join-now");
  };

  const onContribute = (contributeEvent) => {
    contributeEvent.preventDefault();
    navigate(isAuthenticated() ? "/contribute" : "/join-now");
  };

  const getImageAttributionContent = (imageData) =>
    imageData.imageAttributionPreText +
    imageData.imageAttributionLink +
    imageData.imageAttributionPostText;

  return (
    <HomeBgContainer>
      <HomeSectionContainer1>
        <HomeSectionContent>
          <HomeSectionHeader1>
            CROWD SOURCING PLATFORM FOR PRODUCT DATA
          </HomeSectionHeader1>
          <TopSectionSubHeaderContainer>
            <TopSectionSubHeader1>Why Bother ?</TopSectionSubHeader1>
          </TopSectionSubHeaderContainer>
          <TopSectionSubHeaderContainer>
            <TopSectionSubHeader2>Because you paid for it</TopSectionSubHeader2>
          </TopSectionSubHeaderContainer>
          <CallToActionButton type="button" onClick={onJoinNow}>
            JOIN NOW
          </CallToActionButton>
        </HomeSectionContent>
        <HomeSectionImageContainer
          bgImageUrl={imageData.home.topSection.bgImageUrl}
        >
          <HomeSectionImageAttributionContainer>
            <HomeSectionImageAttributionContent
              textColor={imageData.home.topSection.imageAttributionTextColor}
            >
              {imageData.home.topSection.imageAttributionPreText}
            </HomeSectionImageAttributionContent>
            <HomeSectionImageAttributionContent
              textColor={imageData.home.topSection.imageAttributionTextColor}
            >
              {imageData.home.topSection.imageAttributionLink}
            </HomeSectionImageAttributionContent>
            <HomeSectionImageAttributionContent
              textColor={imageData.home.topSection.imageAttributionTextColor}
            >
              {imageData.home.topSection.imageAttributionPostText}
            </HomeSectionImageAttributionContent>
          </HomeSectionImageAttributionContainer>
        </HomeSectionImageContainer>
      </HomeSectionContainer1>
      <BenefitsSection />
      <HomeSectionContainer1>
        <HomeSectionContent></HomeSectionContent>
        <HomeSectionImageContainer></HomeSectionImageContainer>
      </HomeSectionContainer1>
    </HomeBgContainer>
  );
};

export default Home;
