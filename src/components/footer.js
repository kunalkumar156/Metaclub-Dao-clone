import React from "react";
import design4 from "../images/design 4.png";
import footer from "../images/footer.png";
import logo2 from "../images/logo2.png";
import twitter from "../images/twitter.png";
import discord from "../images/discord.png";
import telegram from "../images/telegram.png";

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
            <div className="footer-logo">
              <img src={logo2} alt="footer-logo" />
            </div>
            <div className="footer-table flex">
              <div className="footer-section flex flex-col mr-36">
                <h1 className="font-bold">LINKS</h1>
                <a href="/" className="block py-3">
                  Home
                </a>
                <a href="/" className="block py-3">
                  Community
                </a>
                <a href="/" className="block py-3">
                  Services
                </a>
              </div>
              <div className="footer-section flex flex-col mr-36">
                <h1 className="font-bold">RESOURCES</h1>
                <a href="/" className="block py-3">
                  About
                </a>
                <a href="/" className="block py-3">
                  Resources
                </a>
                <a href="/" className="block py-3">
                  Blog
                </a>
              </div>
              <div className="footer-section flex flex-col">
                <h1 className="font-bold">SOCIALS</h1>
                <div className="flex items-center">
                  <img src={twitter} alt="twitter" className="w-5 h-5 mr-2" />
                  <a href="/" className="block py-3">
                    Twitter
                  </a>
                </div>
                <div className="flex items-center">
                  <img src={discord} alt="discord" className="w-5 h-5 mr-2" />
                  <a href="/" className="block py-3">
                    Discord
                  </a>
                </div>
                <div className="flex items-center">
                  <img src={telegram} alt="telegram" className="w-5 h-5 mr-2" />
                  <a href="/" className="block py-3">
                    Telegram
                  </a>
                </div>
              </div>
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
