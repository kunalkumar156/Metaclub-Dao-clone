import React from "react";
// import accordion from "./accordion";
import image3 from "../images/image3.png";
import imagebg from "../images/imagebg.png";
import perk1 from "../images/perk1.png";
import perk2 from "../images/perk2.png";
import perk3 from "../images/perk3.png";
import perk4 from "../images/perk4.png";
import getaccess from "../images/getaccess.png";
import image4 from "../images/image4.png";
import Info1 from "../images/Info1.png";
import Info2 from "../images/Info2.png";
import Info3 from "../images/Info3.png";
import Info4 from "../images/Info4.png";
import design2 from "../images/design2.png";
import servicesimg from "../images/servicesimg.png";
import services1 from "../images/services1.png";
import services2 from "../images/services2.png";
import services3 from "../images/services3.png";
import services4 from "../images/services4.png";
import FAQs from "../images/FAQs.png";
import Accordion from "./accordion";
import design3 from "../images/design3.png";
const Body = () => {
  return (
    <body className="bg-[#0c020b]">
      {/* FOR PERKS SECTION */}

      <section className="perks-section">
        <div className="flex flex-col items-center justify-center pt-10 ">
          <img src={image3} alt="image3" />
          <br />

          <p className="community-text">
            Our vision is to create high-class, utility driven projects using
            the power of NFTs communities
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="perk-parent-div space-x-32">
            <div className="perk-div">
              <img src={perk1} alt="perk1" />
              <h1 className="perk-heading">Intentives and rewards</h1>
              <p className="perk-para">
                Active members and contributors will get a chance to work on
                exciting projects with us, and some additional rewards.
              </p>
            </div>

            <div className="perk-div">
              <img src={perk2} alt="perk2" />
              <h1 className="perk-heading">Access to resources</h1>
              <p className="perk-para">
                Dive into our knowledge hub filled with valuable resources,
                educational content, and insights into the world of NFTs.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center pb-8 ">
          <div className="perk-parent-div space-x-32">
            <div className="perk-div">
              <img src={perk3} alt="perk3" />

              <h1 className="perk-heading">Monetary benifits</h1>
              <p className="perk-para">
                Grow your financial portfolio by staying updated with upcoming
                projects, partnerships, and exclusive investment possibilities.
              </p>
            </div>

            <div className="perk-div">
              <img src={perk4} alt="perk4" />
              <h1 className="perk-heading">Access to bluechip projects</h1>
              <p className="perk-para">
                Gain early access and priority participation in highly
                sought-after blue chip NFT projects.
              </p>
            </div>
          </div>
        </div>

        <div className="pb-80 bg-[#0c020b] " style={{ marginTop: -1220 }}>
          <img src={imagebg} alt="imagebg" />
        </div>

        <div className="getaccess relative">
          <img
            src={getaccess}
            alt="get-access-background"
            className="rounded-3xl"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-white text-4xl font-bold mb-4 font-coolvetica">
              Get Your Early Access!
            </h1>
            <p className="text-white text-lg mb-4">
              Become a part of a revolution.
            </p>
            <button className="button bg-purple-600 text-white py-2 px-6 rounded-lg">
              Join Discord
            </button>
          </div>
        </div>
      </section>

      {/* FOR iNFO SECTION */}

      <section className="info-section ">
        <div>
          <div className="flex flex-col items-center justify-center  mt-20 pt-10 mb-20">
            <img src={image4} alt="Why metaclub DAO" />
            <p className="community-text">
              We’re bringing our love for NFTs and communities together to
              create an NFT centred ecosystem filled with creativity and
              passion.
            </p>
            <div className="flex justify-center items-center mt-20 mb-10">
              <div className="info-div">
                <img src={Info1} alt="Info1" />
                <h1 className="info-heading">Creative</h1>
                <p className="info-para">
                  Pushing boundaries and creating impact through creative
                  output.
                </p>
              </div>

              <div className="info-div">
                <img src={Info2} alt="Info2" />
                <h1 className="info-heading">Community</h1>
                <p className="info-para">
                  Building a collaborative environment to build brands and
                  experiences.
                </p>
              </div>

              <div className="info-div">
                <img src={Info3} alt="Info3" />
                <h1 className="info-heading">Inspirational</h1>
                <p className="info-para">
                  Setting new standards and inspiring the industry towards
                  greatness.
                </p>
              </div>

              <div className="info-div">
                <img src={Info4} alt="Info4" />
                <h1 className="info-heading">Empowerment</h1>
                <p className="info-para">
                  Delivering value and empowering creators to build experiences.
                </p>
              </div>
            </div>
            <button className="button bg-purple-600 text-white py-2 px-6 rounded-lg">
              Read More
            </button>
          </div>
          <div className="info-design flex justify-center items-center">
            <img src={design2} alt="design2" />
          </div>
        </div>
      </section>

      {/* FOR SERVICES SECTION */}

      <section className="services-section mb-20">
        <div className="flex flex-col items-center justify-center  mt-20 pt-10 mb-20">
          <img src={servicesimg} alt="services-img" />
          <p className="community-text">
            Leverage the power of NFTs to create new experiences for your
            customers
          </p>
        </div>
        <div className="flex justify-center items-center mt-20 mb-10">
          <div>
            <div className="services-div">
              <img className="mt-[-30px]" src={services1} alt="services1" />
              <h1 className="services-heading mt-[-16px]">Growth</h1>
              <p className="services-para">
                Attracting strategic partnerships by crafting hyper growth
                marketing campaigns.
              </p>
            </div>
            <div className="services-div">
              <img src={services3} alt="services1" />
              <h1 className="services-heading">Consulting</h1>
              <p className="services-para">
                Doing intense market and user research to create the best
                strategies for your brand launch and revival.
              </p>
            </div>
          </div>
          <div>
            <div className="services-div">
              <img src={services2} alt="services1" />
              <h1 className="services-heading">Fundrising</h1>
              <p className="services-para">
                Taking your project to new heights by introducing relevant
                investors and partners.
              </p>
            </div>
            <div className="services-div">
              <img src={services4} alt="services1" />
              <h1 className="services-heading">Development</h1>
              <p className="services-para">
                Bringing ideas from concept to life with art and technology
                development.
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex justify-center items-center mb-10 "
          style={{ marginTop: "70px" }}
        >
          <button className="button bg-purple-600 text-white py-2 px-6 rounded-5 mr-4 ml-4">
            Contact Us
          </button>
          <button className="button inline-flex px-6 py-2 items-start rounded-5 border border-purple-200 text-white">
            Explore More
          </button>
        </div>

        <div className="faq-img-div">
          <img src={design3} alt="design3" className="faq-design" />
        </div>
      </section>

      {/* FOR FAQs SECTION */}
      <section className="FAQs-section pb-24">
        <div className="flex items-center justify-center">
          <img src={FAQs} alt="FAQs" />
        </div>
        <div>
          <Accordion />
        </div>
      </section>
    </body>
  );
};

export default Body;
