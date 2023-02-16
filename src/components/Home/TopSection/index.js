import { useNavigate } from "react-router-dom";
import { imageData } from "../../../data/ImageData";

import BackgroundImageWithAttribution from "../../common-components/BackgroundImageWithAttribution";

import {
  TopSectionSubHeaderContainer,
  TopSectionSubHeader1,
  TopSectionSubHeader2,
} from "./styledComponents";

import {
  HomeSectionContainer1,
  HomeSectionContent,
  HomeSectionHeader1,
  CallToActionButton,
} from "../styledComponents";

const TopSection = (props) => {
  const navigate = useNavigate();

  const onJoinNow = (joinNowEvent) => {
    joinNowEvent.preventDefault();
    navigate("/join-now");
  };

  const sectionImageData = imageData.home.topSection;

  return (
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
      <BackgroundImageWithAttribution bgImageData={sectionImageData} />
    </HomeSectionContainer1>
  );
};

export default TopSection;
