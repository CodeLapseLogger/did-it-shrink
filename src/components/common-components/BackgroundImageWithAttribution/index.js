import {
  BackgroundImageContainer,
  BackgroundImageAttributionContainer,
  BackgroundImageAttributionContent,
} from "./styledComponents";

// Passed in background image data as prop is an object,
// whose properties have to match the image data object
// properties set in imageData of src/data/ImageData.js,
// and the prop names set in the implementation of styled
// components of this component. That is to make sure the
// intended values are mapped to the right properties in
// order to render the intended UI.
//
// Background container width can be set with: containerWidth,
// a prop to the BackgroundImageContainer styled component
// instance.
//
// Example:
// --------
// <BackgroundImageContainer containerWidth="50%">
//  {children}
// </BackgroundImageContainer>
//
// Background image size (width, height) can be set with props:
// bgImgWidth, bgImgHeight, set for the BackgroundImageContainer
// styled component instance.
//
// Example:
// --------
// <BackgroundImageContainer bgImgWidth="50%" bgImgHeight="50%">
//  {children}
// </BackgroundImageContainer>
//
// Corresponding CSS properties set in BackgroundImageContainer
// styled component will be set to some default values when the
// above mentioned props are not passed in during instantiation.
const BackgroundImageWithAttribution = (props) => {
  const { bgImageData } = props;

  return (
    <BackgroundImageContainer bgImageUrl={bgImageData.bgImageUrl}>
      <BackgroundImageAttributionContainer>
        <BackgroundImageAttributionContent
          textColor={bgImageData.imageAttributionTextColor}
        >
          {bgImageData.imageAttributionPreText}
        </BackgroundImageAttributionContent>
        <BackgroundImageAttributionContent
          textColor={bgImageData.imageAttributionTextColor}
        >
          {bgImageData.imageAttributionLink}
        </BackgroundImageAttributionContent>
        <BackgroundImageAttributionContent
          textColor={bgImageData.imageAttributionTextColor}
        >
          {bgImageData.imageAttributionPostText}
        </BackgroundImageAttributionContent>
      </BackgroundImageAttributionContainer>
    </BackgroundImageContainer>
  );
};

export default BackgroundImageWithAttribution;
