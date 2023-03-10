// Collection of image data like background image urls
// of image files within the src/images folder and also
// the image attribution links.

import topSectionImage from "../assets/images/people_with_technology_devices.png";
import contributeCallToActionSectionImage from "../assets/images/hand-drawn-figures-connected-through-blank-white-cellphone-chalkboard.jpg";
// import topSectionImage from "./illustration_diverse_people_using_digital_devices.png";

export const imageData = {
  home: {
    topSection: {
      bgImageUrl: topSectionImage,
      imageAttributionPreText: "Image by ",
      imageAttributionLink: (
        <a href="https://www.freepik.com/free-vector/people-with-technology-devices_6977853.htm#query=diversity%20with%20devices&position=41&from_view=search&track=ais">
          Freepik
        </a>
      ),
      imageAttributionPostText: "",
      imageAttributionTextColor: "#a6a2a2",
    },
    contributeCallToActionSection: {
      bgImageUrl: contributeCallToActionSectionImage,
      imageAttributionPreText: "Image by ",
      imageAttributionLink: (
        <a href="https://www.freepik.com/free-photo/hand-drawn-figures-connected-through-blank-white-cellphone-chalkboard_2579861.htm#query=people%20device%20illustration&position=32&from_view=search&track=ais">
          Freepik
        </a>
      ),
      imageAttributionPostText: "",
      imageAttributionTextColor: "#ffaf02",
    },
  },
  contribute: {
    topSection: {
      bgImageUrl: "",
      imageAttributionPreText: "",
      imageAttributionLink: null,
      imageAttributionPostText: "",
      imageAttributionTextColor: "",
    },
  },
  leverage: {
    topSection: {
      bgImageUrl: "",
      imageAttributionPreText: "",
      imageAttributionLink: null,
      imageAttributionPostText: "",
      imageAttributionTextColor: "",
    },
  },
  resources: {
    topSection: {
      bgImageUrl: "",
      imageAttributionPreText: "",
      imageAttributionLink: null,
      imageAttributionPostText: "",
      imageAttributionTextColor: "",
    },
  },
};
