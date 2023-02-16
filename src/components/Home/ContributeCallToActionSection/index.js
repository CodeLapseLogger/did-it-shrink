import { useNavigate } from "react-router-dom";
import { imageData } from "../../../data/ImageData";
import { isAuthenticated } from "../../../utils/Authentication";
import BackgroundImageWithAttribution from "../../common-components/BackgroundImageWithAttribution";

import {
  HomeSectionContainer1,
  HomeSectionContent,
  HomeSectionHeader1,
  CallToActionButton,
} from "../styledComponents";

const ContributeCallToActionSection = (props) => {
  const navigate = useNavigate();

  const onContribute = (contributeEvent) => {
    contributeEvent.preventDefault();
    navigate(isAuthenticated() ? "/contribute" : "/login");
  };

  let sectionImageData = imageData.home.contributeCallToActionSection;
  sectionImageData = {
    ...sectionImageData,
    containerWidth: "50%",
    bgImgWidth: "100%",
  };

  return (
    <HomeSectionContainer1>
      <HomeSectionContent>
        <HomeSectionHeader1>READY TO CONTRIBUTE ?</HomeSectionHeader1>
        <CallToActionButton type="button" onClick={onContribute}>
          DO IT NOW
        </CallToActionButton>
      </HomeSectionContent>
      <BackgroundImageWithAttribution bgImageData={sectionImageData} />
    </HomeSectionContainer1>
  );
};

export default ContributeCallToActionSection;
