import React, { FunctionComponent } from "react";
import Img, { FluidObject } from "gatsby-image";

interface PreviewCompatibleImageType {
  imageInfo: {
    alt: string;
    childImageSharp: {
      fluid: FluidObject;
    };
    image: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
}
const PreviewCompatibleImage: FunctionComponent<
  PreviewCompatibleImageType
> = props => {
  const imageStyle = { borderRadius: "5px" };
  const { alt = "", childImageSharp, image } = props.imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    );
  }

  if (childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />;
  }

  if (!!image && typeof image === "string")
    return <img style={imageStyle} src={image} alt={alt} />;

  return null;
};

export default PreviewCompatibleImage;
