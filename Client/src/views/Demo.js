import React from "react";
import "./Demo.css";
import { Link } from "react-router-dom";
import video from "../playground_assets/hero-video1.mp4";
import homeimage from "../playground_assets/1.png";
import articlesimage from "../playground_assets/Articles.svg";
import latestupdatesimage from "../playground_assets/Latest-Updates.svg";
import faqsimage from "../playground_assets/faqs.svg";
import banner from "../playground_assets/GST_Banner.jpg";
import Footer from "../components/footer";
import Copyright from "../components/copyright";

const Demo = () => {
  return (
    <div
      className="Demo-page"
      style={{
        backgroundImage: `url(${homeimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <div className="home-max-width max-content-container">
          <div className="home-content-container">
            <h1 className="home-text Heading1">
              <span>
                Do you Really need GST for your
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span className="home-text02">
                Business?
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <br></br>
              <span>Click below to know</span>
            </h1>
            <div className="home-input-container">
              {/* <div className="home-container1 input">
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="home-icon"
                  >
                    <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                  </svg>
                   <input
                    type="text"
                    placeholder="Your phone number..."
                    className="home-textinput input"
                  /> 
                </div> */}
              {/* <button className="home-button button-primary button">
                  GST Tool
                </button> */}
              <Link
                className="home-button button-primary button"
                to="/gstchoice"
              >
                {" "}
                GST Tool
              </Link>
            </div>
            {/* <div className="home-features-container">
                <div className="home-feature">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon02"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text03">
                    Easiest way to read news and RSS Feeds.
                  </span>
                </div>
                <div className="home-feature1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon04"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text04">
                    Works with all mail providers, including Google and Yahoo.
                  </span>
                </div>
                <div className="home-feature2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon06"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text05">
                    Over 2000, highly recommended customer reviews.
                  </span>
                </div>
              </div> */}
          </div>
          <div className="home-image-container">
            {/* <img
                alt="image"
                src="/playground_assets/hero%20image-1200w.png"
                className="home-image"
              /> */}

            <video className="home-image" controls autoPlay src={video} />
          </div>
        </div>
        <div className="offeringDesign">
          {/* <h2>What we are offering to customers</h2> */}
          <div className="offeringFlex">
            <div className="offeringIcons">
              {/* <h4>Investment Plan</h4> */}
              <img
                alt="image"
                // src="/playground_assets/section-image1-1200w.png"
                src={articlesimage}
                className="grid-image"
              />
              <p>Your favorite articles at your fingertips Always.</p>
            </div>
            <div className="offeringIcons">
              {/* <h4>Finance Analysis</h4> */}
              <img
                alt="image"
                // src="/playground_assets/section-image2-1200w.png"
                src={latestupdatesimage}
                className="grid-image"
              />
              <p>The best content, handpicked for you.</p>
            </div>
            <div className="offeringIcons">
              {/* <h4>Business Consulting</h4> */}
              <img
                alt="image"
                // src="/playground_assets/section-image1-1200w.png"
                src={faqsimage}
                className="grid-image"
              />
              <p>Answer to your every query asked- FAQS</p>
            </div>
          </div>
          <div className="recentarticle">
            <p>Here we will show the recent articles</p>
          </div>
          <img alt="AGNK" className="banner2design" src={banner}></img>
          <div className="home-heading-container">
              <h2 className="home-text28 Heading2">
                <span>If you love simplicity, you’ll</span>
                <br></br>
                <span>
                  simply love
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span className="home-text31">GSTguy.</span>
              </h2>
              {/* <span className="Content-Light">
                <span>
                  Go to App Store, install Feedbox and start changing your
                  reading habits to
                </span>
                <span className="home-text34"></span>
                <span>day!</span>
              </span> */}
            </div>
            <Footer></Footer>
      <Copyright></Copyright>
        </div>
      </div>
    </div>
  );
};

export default Demo;
