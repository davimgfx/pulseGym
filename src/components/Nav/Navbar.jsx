import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo/logo.png";
import { navLinks } from "./navlinks";

const Navbar = () => {
  const [scrollBackground, setScrollBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrollBackground(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <nav
      className={`flex flex-row items-center justify-between py-3 px-12 fixed top-0 left-0 right-0 z-50 ${
        scrollBackground ? "bg-[#37383A]" : "bg-transparent"
      } ${scrollBackground ? "navbar-border" : ""}`}>
      <a href="/"><img src={logo} alt="logo" className="w-[150px] h-[75px] my-2 min375:h-[50px] min375:w-[125px]" /></a>
      <ul
        className="flex gap-9 text-white text-[16px] font-medium nav-phone"
        ref={navRef}>
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="cursor-pointer hover:text-[#fff336] ease-in duration-200">
            <a href={nav.path}>{nav.title}</a>
          </li>
        ))}
        <button onClick={showNavbar} className="nav-btn nav-close-btn">
          <i className="fa-solid fa-x hover:text-[#fff336] cursor-pointer text-white text-4xl px-4 ease-in duration-200"></i>
        </button>
      </ul>
      <div className="flex items-center">
        <button onClick={showNavbar} className="nav-btn">
          <i className="fa-solid fa-bars hover:text-[#fff336] cursor-pointer text-white text-4xl px-4 ease-in duration-200"></i>
        </button>

        <a href="login"><i className="fa-solid fa-user hover:text-[#fff336] cursor-pointer text-white text-4xl px-4 mr-5 ease-in duration-200 min375:hidden"></i></a>
        <a href="classes">
          <div className="border-solid border-2 border-white p-2 rounded-md min620:hidden flex items-center cursor-pointer">
            <i className="fa-solid fa-magnifying-glass bg-[#fff336] text-black text-2xl py-3 px-4 rounded-md"></i>
            <h3 className="text-white text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider">
              find your class
            </h3>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
