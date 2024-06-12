import React from "react";
import BannerBackground from "../Assets/greenbc.png";
import BannerImage from "../Assets/about-background-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" /> 
        </div>
        <div className= "home-text-section">
          <h2> Discount Upto 20 % </h2>
          <h1 className= "primary-heading">
          Buy Fresh And Organic Grocery Food
          </h1>

          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <div className="shop-now-container">
          <button className="secondary-button shop-now-button " >
            Shop Now <FiArrowRight/>{" "}
          </button>

          <div className="user-stats-container">
              <div>
                <p className="user-stat">35k+ </p>
                <p className="user-text">Users </p>
              </div>
              <hr className="horizontal-line" />
              <div>
                <p className="user-stat">18k+ </p>
                <p className="user-text">Products</p>
              </div>
            </div>
        </div>
        </div>
        <div className="home-image-section" style={{marginLeft:"7em"}}>
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
