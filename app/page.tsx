/* eslint-disable @next/next/no-img-element */
"use client";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

import {
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "./utils/motion";
import Image from "next/image";
import { OUR_WORKS } from "./utils/constants";

export default function Home() {
  return (
    <>
      <TawkMessengerReact
        propertyId="6399d18edaff0e1306dca286"
        widgetId="1gk8dl5s7"
      />
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
                <div className="w-100 lg:w-3/4 pt-20">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between items-center mt-5 Card1">
                    {OUR_WORKS.map((work, index) => (
                      <div key={index}>
                        <div className="workImg">
                          <Image
                            src={work.image}
                            alt="img here"
                            loading="lazy"
                            objectFit="cover"
                            fill
                          />
                        </div>
                        <h2 className="mt-2 text-base">{work.title}</h2>
                      </div>
                    ))}
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
                      Brox Technology specializes in creating dynamic and
                      responsive websites tailored to your business needs. Our
                      skilled team of developers employs the latest technologies
                      to craft engaging and user-friendly web solutions that
                      effectively showcase your products, services, and brand
                      identity.
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
                      At Brox Technology, we understand that every business has
                      unique requirements. Our custom software development
                      services empower you to optimize your processes, enhance
                      efficiency, and streamline operations. We work closely
                      with you to design, develop, and implement software
                      solutions that align perfectly with your business
                      objectives.
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
                      Our mobile development expertise covers both iOS and
                      Android platforms. We design and develop mobile
                      applications that provide seamless user experiences,
                      incorporating the latest design trends and
                      functionalities. From concept to deployment, we ensure
                      your app stands out in the competitive app market.
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
                      Transform your customer interactions with our advanced
                      chatbot solutions. Brox Technology creates intelligent and
                      interactive chatbots that engage users, answer inquiries,
                      and assist in various tasks. Enhance customer support,
                      lead generation, and user engagement through personalized
                      and automated conversations.
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
                      Stay connected with your audience through our Bulk SMS
                      services. Brox Technology enables you to send important
                      updates, promotions, and notifications to a wide recipient
                      base instantly. Our reliable and scalable platform ensures
                      your messages reach the right people at the right time.
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
                      Exceptional user interface (UI) and user experience (UX)
                      design are crucial for engaging and retaining customers.
                      Brox Technology&apos;s design team crafts visually
                      appealing, intuitive, and user-centric interfaces that
                      enhance usability and create memorable interactions,
                      ultimately boosting customer satisfaction.
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
                    Establish a strong and memorable brand identity with Brox
                    Technology&apos;s branding services. We collaborate with you
                    to develop a unique brand strategy, including logo design,
                    color palettes, typography, and brand guidelines. Let us
                    help you create a consistent and impactful brand presence
                    across all touchpoints.
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
                      Unstructured Supplementary Service Data (USSD) is a
                      powerful tool for interactive communication. Brox
                      Technology offers USSD solutions that enable real-time
                      interactions between users and your services, such as
                      balance inquiries, service activations, and surveys,
                      fostering direct engagement without the need for internet
                      connectivity.
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
                      Seamlessly integrate mobile money payment options into
                      your applications with Brox Technology&apos;s expertise.
                      We enable secure and convenient transactions, allowing
                      your users to make payments, transfer funds, and perform
                      financial activities through popular mobile money
                      platforms.
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
