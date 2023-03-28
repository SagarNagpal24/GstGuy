import React from "react";

import PropTypes from "prop-types";

import "./feature-card.css";

const FeatureCard = (props) => {
  return (
    <>
      {/* <div className="feature-card-card">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="feature-card-image"
        />
        <h4 className="feature-card-text Heading4">{props.heading}</h4>
        {/* <span className="feature-card-text1 Content-Light">{props.text}</span> */}
        {/* <span className="feature-card-text2">{props.text1}</span>
      </div> */} 

      <div className="feature-card-card">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="feature-card-image"
        />
        <h4 className="feature-card-text Heading4">
          Free
        </h4>
        {/* <span className="feature-card-text1 Content-Light">{props.text}</span> */}
        <span className="feature-card-text2">
        <li>GST Tool*</li>
          
         
        </span>
      </div>

      <div className="feature-card-card">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="feature-card-image"
        />
        <h4 className="feature-card-text Heading4">
          STANDARD- ₹6000 per year.
        </h4>
        {/* <span className="feature-card-text1 Content-Light">{props.text}</span> */}
        <span className="feature-card-text2">
          <li>GST Tool*</li>
          <li>GST Registration</li>
          <li>GST Return-Monthly & Quarterly**</li>
          <li>GST Annual Return</li>
        </span>
      </div>
    </>
  );
};

FeatureCard.defaultProps = {
  text1: "GST Tool*",
  text: "GST Tool*",
  heading: "Free",
  image_alt: "image",
  image_src: "https://play.teleporthq.io/static/svg/default-img.svg",
};

FeatureCard.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
};

export default FeatureCard;
