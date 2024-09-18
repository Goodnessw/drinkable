import React from "react";
import styled from "styled-components";
import phoneImage from "./assets/image.svg";
import googlePlayBadge from "./assets/Badge-1.svg";
import appStoreBadge from "./assets/Badge.svg";

const HeroWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  font-family: "Montserrat", sans-serif;

  .text-section {
    width: 610px;
    height: 260px;

    h1 {
      font-size: 64px;
      font-weight: 700;
      line-height: 78.02px;
      color: #333;
      text-align: left;
      margin-top: 150px;
      span {
        color: #6b4f37;
      }
    }

    p {
      margin-top: 20px;
      color: #555;
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
      text-align: left;
      color: #313131;
    }
    .download {
      font-size: 20px;
      font-style: italic;
      font-weight: 600;
      line-height: 30px;
      text-align: left;
    }
    .download-btns {
      display: flex;
      margin-top: 20px;

      .store-btn {
        margin-right: 10px;
      }
    }
  }

  .image-section {
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="text-section">
        <h1>
          Refresh yourself with <span>Drinkable</span>
        </h1>
        <p>
          We are presenting you one of the best coffee app Drinkable. Refresh
          yourself with Drinkable. You can find 100+ Coffee Near your location.
        </p>
        <br />

        <div className="download">Download from</div>
        <div className="download-btns">
          <img
            src={googlePlayBadge}
            alt="Download from Google Play"
            className="store-btn"
          />
          <img
            src={appStoreBadge}
            alt="Download from App Store"
            className="store-btn"
          />
        </div>
      </div>
      <div className="image-section">
        <img src={phoneImage} alt="Drinkable app" />
      </div>
    </HeroWrapper>
  );
};

export default Hero;
