"use client";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";

import {
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "./utils/motion";

export default function Home() {
  return (
    <>
      <AnimatePresence>
        <main>
          <div>
            {/* <!-- HEADER SECTION --> */}
            <header className="header">
              <Navbar />
              <motion.section
                className="container px-3 mx-auto pt-24"
                {...slideAnimation("left")}
              >
                <div className="w-100 lg:w-3/4">
                  <div className="text-white mb-5 ">
                    <motion.h2
                      {...headTextAnimation}
                      className="mb-4 font-semibold md:text-5xl text-3xl"
                      style={{ lineHeight: "1.25 !important" }}
                    >
                      Creating the best digital <br />
                      experience for businesses
                    </motion.h2>
                    <motion.p
                      {...headContentAnimation}
                      className="lg:text-2xl text-lg"
                    >
                      Brox is creating a strategic technology for large and
                      small scale businesses to trive with the right solution.
                      We’re building the future of technology
                    </motion.p>
                  </div>

                  <div className="pb-20">
                    <video src="" width="1030" className="w-100"></video>
                  </div>
                </div>
              </motion.section>
            </header>
            {/* <!-- MAIN SECTION --> */}
            {/* <!-- OUR WORKS --> */}
            <section
              style={{ backgroundColor: "#f9fafb" }}
              className="ourWorksSection pb-14"
              id="ourWork"
            >
              <div className="container px-3 mx-auto pt-12">
                <h2 className="text-2xl lg:text-4xl font-medium">Our Works</h2>
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-between items-center mt-5 Card1">
                    <div className="resPOS">
                      <img src="assets/images/img1.png" alt="img here" />
                      <h2 className="mt-2 text-base">Restaurant POS System</h2>
                    </div>

                    <div className="resultsChecker">
                      <img src="assets/images/img2.png" alt="img here" />
                      <h2 className="mt-2 text-base">
                        WASSCE / GES Result Checker
                      </h2>
                    </div>
                    <div className="sMS">
                      <img src="assets/images/img3.png" alt="img here" />
                      <h2 className="mt-2 text-base">
                        School Management System
                      </h2>
                    </div>

                    <div className="posSYSTEM">
                      <img src="assets/images/img4.png" alt="img here" />
                      <h2 className="mt-2 text-base">
                        Point of Sale Software(POS)
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- CORE SERVICES --> */}
            <section
              className="container ourWorksSection px-3 mx-auto pt-12 pb-8"
              id="coreServices"
            >
              <h2 className="text-2xl lg:text-4xl font-medium mb-5">
                Core Services
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-6">
                <motion.div {...slideAnimation("left")} className="service web">
                  <img src="assets/images/globe-01.svg" alt="logo" />
                  <div className="">
                    <h2>Web Development</h2>
                    <p>
                      Own an awesome and user friendly website accross all
                      platform to have a presence in the digital world.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  {...slideAnimation("left")}
                  className="service custom"
                >
                  <img src="assets/images/browser.svg" alt="logo" />
                  <div className="">
                    <h2>Custom Software Development</h2>
                    <p>
                      Equip yourself with the basics of Information Technology
                      and become expert in no time.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  {...slideAnimation("left")}
                  className="service mobile"
                >
                  <img src="assets/images/phone-01.svg" alt="logo" />
                  <div className="">
                    <h2>Mobile Development</h2>
                    <p>
                      Get an industry leading mobile application for your
                      business to boost profitability.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  {...slideAnimation("left")}
                  className="service chatbot"
                >
                  <img src="assets/images/message-chat-circle.svg" alt="logo" />
                  <div className="">
                    <h2>Chatbot Solutions</h2>
                    <p>
                      Keep your prospects informed, engaged and connected
                      without leaving their comfort zone through whatsApp.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  {...slideAnimation("left")}
                  className="service bulkSMS"
                >
                  <img
                    src="assets/images/message-text-square-01.svg"
                    alt="logo"
                  />
                  <div className="">
                    <h2>Bulk SMS</h2>
                    <p>
                      Keep your customers and clients updated on your services
                      and products through sms. It’s Fast and Reliable. Try Brox
                      Bulk SMS today.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  {...slideAnimation("left")}
                  className="service design"
                >
                  <img src="assets/images/clapperboard.svg" alt="logo" />
                  <div className="">
                    <h2>UI/UX Design</h2>
                    <p>
                      Keep your customers and clients updated on your services
                      and products through sms. It’s Fast and Reliable. Try Brox
                      Bulk SMS today.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  {...slideAnimation("left")}
                  className="service brand"
                >
                  <img
                    src="assets/images/chart-breakout-circle.svg"
                    alt="logo"
                  />
                  <h2>Branding</h2>
                  <p>
                    Own an awesome and user friendly website accross all
                    platform to have a presence in the digital world.
                  </p>
                </motion.div>

                <motion.div
                  {...slideAnimation("left")}
                  className="service ussd"
                >
                  <img src="assets/images/phone-02.svg" alt="logo" />
                  <div className="">
                    <h2>USSD (Short Code) Solutions</h2>
                    <p>
                      Let your customers place orders for your products using a
                      USSD code and make payment via Mobile Money directly from
                      the USSD.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  {...slideAnimation("left")}
                  className="service momo"
                >
                  <img src="assets/images/credit-card-01.svg" alt="logo" />
                  <div className="">
                    <h2>Mobile Money Integration</h2>
                    <p>
                      Collect payment officially using mobile money and reach
                      wide audience. We help you to integrate MoMo into your
                      service offerings.
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* <!-- ABOUT US --> */}

            <section
              style={{ backgroundColor: "#f9fafb" }}
              className="aboutUS pb-24 pt-8"
              id="aboutUs"
            >
              <div className="container px-3 mx-auto pt-12">
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <div className="info1 flex-auto w-100 lg:w-28">
                    <h2 className="text-2xl lg:text-4xl font-medium mb-6">
                      About Us
                    </h2>
                    <p className="lg:text-2xl text-lg">
                      We focus on Customer Commitment, Integrity, and Team work.
                      Brox Technology is a privately owned company which was
                      established in the year 2018. Our core values include
                    </p>
                  </div>

                  <div className="info2 w-100 lg:w-50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="assets/images/Frame 17image.svg"
                      className="w-full"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </section>
            <footer className="bg-black">
              <section className="contactUs pb-14">
                <div className=" container px-3 mx-auto pt-12">
                  <div className=" conContainer flex flex-col lg:flex-row gap-5 pb-8 mb-8 items-start lg:items-center justify-between">
                    <div className="con Info">
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
                        We focus on Customer Commitment, Integrity, and Team
                        work.
                      </p>
                    </div>
                  </div>

                  <div className="copyRight pt-3">
                    <h2 className="!text-white text-xs">
                      © 2022 Brox Technology. All Rights Reserved
                    </h2>
                  </div>
                </div>
              </section>
            </footer>
          </div>
        </main>
      </AnimatePresence>
    </>
  );
}
