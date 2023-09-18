import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black">
        <section className="contactUs pb-14">
          <div className=" container px-3 mx-auto pt-12">
            <div className=" conContainer flex flex-col lg:flex-row gap-5 pb-8 mb-8 items-start lg:items-center justify-between">
              <div id="contact" className="con Info">
                <h2 className="!text-white text-xl lg:text-2xl xl:text-3xl   font-medium ">
                  GET IN TOUCH
                </h2>
                <p className="pt-1 text-base">
                  info@broxghana.com <br />
                  +233 54 410 8998
                </p>
              </div>

              <div className="con Info">
                <h2 className="!text-white text-xl lg:text-2xl xl:text-3xl  font-medium">
                  Brox Technologies
                </h2>
                <p className="pt-1 text-base">
                  We focus on Customer Commitment, Integrity, and Team work.
                </p>
              </div>
            </div>

            <div className="copyRight pt-3">
              <h2 className="!text-white text-xs">
                © 2023 Brox Technology. All Rights Reserved
              </h2>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
