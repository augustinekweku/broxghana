"use client";
import React, { useEffect, useState } from "react";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";

const Navbar = () => {
  let Links = [
    { name: "Work", link: "#ourWorks" },
    { name: "Services", link: "#coreServices" },
    { name: "About Us", link: "#aboutUs" },
  ];
  let [open, setOpen] = useState(false);

  useEffect(() => {
    let hamburgerMenu = document.querySelector(".body_content");
    if (open && hamburgerMenu) {
      hamburgerMenu.classList.add("mobile_nav_open");
    } else {
      hamburgerMenu.classList.remove("mobile_nav_open");
    }
  }, [open]);

  return (
    <div
      className={clsx(
        "shadow-md w-full   top-0 left-0 bg-primary-blue z-50",
        open ? "fixed" : ""
      )}
      id="nav"
    >
      <div className="container mx-auto ">
        <div className="md:flex items-center justify-between  py-4 lg:px-0 px-7">
          {/* logo section */}
          <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
            <div
              className="logo"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              <img src="/assets/images/broxtech-logo.svg" alt="logo here" />
            </div>
          </div>
          {/* Menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
          >
            {open ? (
              <XMarkIcon style={{ color: "white" }} />
            ) : (
              <Bars3BottomRightIcon style={{ color: "white" }} />
            )}
          </div>
          {/* linke items */}
          <ul
            className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static   md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open
                ? "top-20 bg-white shadow-2xl rounded-b-2xl"
                : "top-[-490px] "
            }`}
          >
            {Links.map((link, i) => (
              <li key={i} className="md:ml-8 md:my-0 my-7 ">
                <a
                  href={link.link}
                  className={clsx(
                    "duration-500 font-semibold ",
                    open ? "text-black" : "text-white"
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                className={clsx(
                  "duration-500 font-semibold",
                  open ? "text-black" : "text-white",
                  "md:ml-8 md:my-0 my-7 "
                )}
                href="#"
                id="academy"
              >
                Academy<span className="new-badge">NEW</span>
              </a>
            </li>
            <button
              className={clsx(
                open ? "mt-8 " : "",
                "talkToUsBtn btn   md:ml-8 font-semibold px-4 py-2 rounded duration-500 md:static shadow-xl bg-blue-900 text-white lg:bg-gray-100 lg:text-blue-900 rounded-2xl"
              )}
            >
              Talk to us
            </button>
          </ul>
          {/* button */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
