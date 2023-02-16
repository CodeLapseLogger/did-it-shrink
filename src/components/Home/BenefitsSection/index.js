import { benefitsData } from "../../../data/BenefitsData";

import {
  BenefitsSectionContainer,
  BenefitName,
  BenefitsHeader,
  BenefitsList,
  BenefitsListItem,
} from "./styledComponents";

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
