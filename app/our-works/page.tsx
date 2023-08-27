/* eslint-disable @next/next/no-img-element */
"use client";
import { motion, AnimatePresence } from "framer-motion";

import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { OUR_WORKS } from "../utils/constants";
import { headTextAnimation, slideAnimation } from "../utils/motion";

const ProjectPage = () => {
  const searchParams = useSearchParams();

  const project = searchParams.get("project");

  return (
    <>
      <AnimatePresence>
        <header className="bg-white">
          <motion.section
            className="container px-3 mx-auto"
            {...slideAnimation("left")}
          >
            <div className="mt-16">
              <div className="mb-16">
                <motion.p
                  {...headTextAnimation}
                  className="lg:text-2xl text-lg mb-4 text-[#c5c5c5]"
                >
                  {project}
                </motion.p>
                <h2
                  className="mb-4 font-semibold md:text-5xl text-3xl w-full lg:w-3/4"
                  style={{ lineHeight: "1.25" }}
                >
                  {OUR_WORKS[project as keyof typeof OUR_WORKS].description}
                </h2>
              </div>
            </div>
          </motion.section>

          <section id="image-section">
            <a
              href={`${
                OUR_WORKS[project as keyof typeof OUR_WORKS].website_url
              }`}
              target="_blank"
            >
              <img
                className="w-full"
                src={`/assets/images/${
                  OUR_WORKS[project as keyof typeof OUR_WORKS].banner
                }`}
                alt="image"
                loading="lazy"
              />
            </a>
          </section>
        </header>

        <motion.section
          className="bg-[#f9fafb] pb-14"
          {...slideAnimation("left")}
        >
          <div className="container px-3 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-between item-center py-20">
              {OUR_WORKS[project as keyof typeof OUR_WORKS].features.map(
                (feature, index) => (
                  <div key={index}>
                    <h4 className="text-[#c5c5c5] text-base mb-0 md:mb-0">
                      {feature.title}
                    </h4>
                    <p className="pr-6 text-lg mb-4 md:mb-0">
                      {feature.description}
                    </p>
                  </div>
                )
              )}
            </div>
            {/* <!-- RESULTS INFO IMAGES --> */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between items-center mt-5"
              id="card-section"
            >
              {OUR_WORKS[project as keyof typeof OUR_WORKS].images.map(
                (image, index) => {
                  if (
                    index ==
                      OUR_WORKS[project as keyof typeof OUR_WORKS].images
                        .length -
                        1 &&
                    OUR_WORKS[project as keyof typeof OUR_WORKS].images
                      .length == 5
                  ) {
                    return (
                      <div key={index} className=" md:col-span-2 ">
                        <img
                          className="w-full"
                          src={`/assets/images/${image}`}
                          alt="img here"
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div key={index} className="resPOS">
                        <img
                          loading="lazy"
                          src={`/assets/images/${image}`}
                          alt="img here"
                        />
                      </div>
                    );
                  }
                }
              )}
            </div>
          </div>
        </motion.section>

        <section className="bg-[#eeeeeeba] pb-14" id="course-view">
          <div className="container px-3 mx-auto pt-12">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-[#001D62] w-full lg:w-3/4 mx-auto">
                {OUR_WORKS[project as keyof typeof OUR_WORKS].cta.desc}
              </h2>
              <a
                href={OUR_WORKS[project as keyof typeof OUR_WORKS].cta.url}
                target="_blank"
              >
                <button className="bg-black text-white rounded-full px-[50px] py-[16px]">
                  {OUR_WORKS[project as keyof typeof OUR_WORKS].cta.buttonText}
                </button>
              </a>
            </div>
          </div>
        </section>
      </AnimatePresence>
    </>
  );
};

export default ProjectPage;
