import { IoMdOptions } from "react-icons/io"; // for explore alternatives benefit
import { GiArchiveResearch } from "react-icons/gi"; // for brand awareness benefit
import { BiMoney } from "react-icons/bi"; // for budgeting benefit
import { BsGraphDown } from "react-icons/bs"; // for spot shrinkflation benefit

import withStyling from "../../higher-order-components/withStyling";

import {
  BenefitsSectionContainer,
  BenefitName,
  BenefitsHeader,
  BenefitsList,
  BenefitsListItem,
} from "./styledComponents";

const benefitsData = [
  {
    id: "spotShrinkflation",
    benefit: "SPOT SHRINKFLATION",
    icon: withStyling(BsGraphDown),
  },
  {
    id: "budgeting",
    benefit: "BUDGETING",
    icon: withStyling(BiMoney),
  },
  {
    id: "brandAwareness",
    benefit: "BRAND AWARENESS",
    icon: withStyling(GiArchiveResearch),
  },
  {
    id: "exploreAlternatives",
    benefit: "EXPLORE ALTERNATIVES",
    icon: withStyling(IoMdOptions),
  },
];

const BenefitsSection = (props) => {
  const { sectionHeight } = props;

  return (
    <BenefitsSectionContainer sectionHeight={sectionHeight}>
      <BenefitsHeader>Benefits</BenefitsHeader>
      <BenefitsList>
        {benefitsData.map((benefitDataItem) => {
          const { id, benefit, icon } = benefitDataItem;

          return (
            <BenefitsListItem key={id}>
              {icon}
              <BenefitName>{benefit}</BenefitName>
            </BenefitsListItem>
          );
        })}
      </BenefitsList>
    </BenefitsSectionContainer>
  );
};

export default BenefitsSection;
