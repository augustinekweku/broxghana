"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
    setBurgerActive(!burgerActive);

    const navMenu = document.querySelector(".nav-menu");
    const talkToUsBtnMobile = document.querySelector(".talkToUsBtnMobile");
    const talkToUsBtnDesktop = document.querySelector(".talkToUsBtnDesktop");
    if (navMenu) {
      navMenu.classList.toggle("hidden");
      navMenu.classList.toggle("hamburger-menu-active");
    }
    if (talkToUsBtnMobile && talkToUsBtnDesktop) {
      talkToUsBtnMobile.classList.toggle("hidden");
    }
  };

  return (
    <div className="navContent1 flex justify-between w-full">
      <div className="flex items-center">
        <div className="logo">
          <img src="/assets/images/broxtech-logo.svg" alt="logo here" />
        </div>
        <div className="nav-menu hidden lg:flex ">
          <ul>
            <li>
              <a href="#ourWork" id="work">
                Work
              </a>
            </li>
            <li>
              <a href="#services" id="services">
                Services
              </a>
            </li>
            <li>
              <a href="#aboutUs" id="about">
                About Us
              </a>
            </li>
            <li>
              <a href="#" id="academy">
                Academy<span>NEW</span>
              </a>
            </li>
            <li>
              <button className="talkToUsBtn hidden talkToUsBtnMobile">
                Talk to Us{" "}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <button className="talkToUsBtn  talkToUsBtnDesktop hidden lg:flex">
        Talk to Us{" "}
      </button>

      <div
        className="hamburger-menu  lg:hidden"
        id="menu"
        onClick={() => {
          toggleNav();
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
