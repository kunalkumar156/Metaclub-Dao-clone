import React from "react";
import design4 from "../images/design 4.png";
import footer from "../images/footer.png";
import logo2 from "../images/logo2.png";
const Footer = () => {
  return (
    <footer className="text-white">
      <div className="footer-page">
        <div className="footer-container">
          <div className="pt-14">
            <div className="getaccess relative">
              <div className="footer-img">
                <img
                  src={design4}
                  alt="get-access-background"
                  className="rounded-xl"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <img src={footer} alt="footer-heading" className="" />
                <p className="text-white text-lg mb-8 mt-8">
                  Subscribe to receive market insights, growth hacks, stories,
                  etc
                </p>
                <div class="flex justify-center">
                  <input
                    className="footer-mail mr-4 h-12"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button class="button button-subscribe bg-purple-600 text-white font-normal px-6 h-12 rounded-lg inline-block">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-detail">
            <div>
              <img src={logo2} alt="footer-logo" />
            </div>
            <div className="footer-table">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <hr className="footer-row" />
          <div className="footer-copyright flex flex-col items-center justify-center mb-14 ">
            <span className="footer-copyright-line text-center mb-2">
              Copyright © 2023 MCD. All rights reserved.
            </span>
            <span className="footer-copyright-company text-center">
              Powered by MCD. xxxxx.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
