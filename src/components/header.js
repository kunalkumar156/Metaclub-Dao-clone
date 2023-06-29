import React from "react";
import logo from "../images/logo.png";
import design1 from "../images/design1.png";
import image2 from "../images/image2.png";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar pt-7 pb-7">
        <div className="flex items-center justify-between pl-36 pr-36">
          <div>
            <img src={logo} alt="logo" className="logo w-16 h-16 " />
          </div>
          <div className="flex items-center">
            <ul className="options flex items-center space-x-8">
              <li className="text-white">Home</li>
              <li className="text-white">Community</li>
              <li className="text-white">Services</li>
              <li className="text-white">Blogs</li>
            </ul>

            <div className="ml-20">
              <button className="button join-button w-48 h-10 font-bold text-white bg-purple-600">
                Join the Community
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="header-info text-white flex items-center justify-center"
        style={{ paddingBottom: "8rem" }}
      >
        <div className="ml-20">
          {/* Just written hardly */}
          {/* <h1 class="multiline-heading">
            <span>Building New Experiences</span>
            <br />
            <span>
              Using <span className="digital-assets">Digital Assets</span>{" "}
            </span>
          </h1> */}

          {/* Pasting direct image */}
          <img
            src={image2}
            alt="building new experineces using digital assets"
          />

          <p className="text-xl my-5 ">
            MetaClub DAO is a community-focused NFT accelerator.
          </p>

          <button
            className="button join-button w-52 h-14 font-bold text-white bg-purple-600 mr-6"
            style={{ letterSpacing: ".5px" }}
          >
            Join our Community
          </button>
          <button
            className="button w-52 h-14 font-bold text-white rounded-5 border border-solid border-purple-200"
            style={{ letterSpacing: ".5px" }}
          >
            Explore our Services
          </button>
        </div>
        <div>
          <img src={design1} alt="design" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
