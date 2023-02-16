import { IoMdOptions } from "react-icons/io";
import { GiArchiveResearch } from "react-icons/gi";
import { BiMoney } from "react-icons/bi";
import { BsGraphDown } from "react-icons/bs";
import withStyling from "../components/higher-order-components/withStyling";

export const benefitsData = [
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
