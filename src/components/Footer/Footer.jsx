import React from "react";
import logo from "../../assets/logo/logo-footer.png";
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <section
      className="mt-[2rem] flex justify-center min375:justify-start min375:px-[0.2rem]"
      id="footer">
      <div className="px-[2rem] flex justify-center gap-[25rem] md1300:gap-[15rem] mb-[5rem] md1000:flex-col md1000:gap-[2rem]">
        <div className="w-[30rem] mt-[2rem] mb-[5rem] md1000:mb-0 min450:w-[100%]">
          <img src={logo} alt="log footer" className="h-[10rem]" />
          <p className="mt-[2rem] text-[14px] min800:w-[20rem] min450:hidden">
            At PulseGym, we are committed to helping you achieve your fitness
            goals in a dynamic and inspiring environment.
          </p>
          <h2 className="text-[24px] font-bold mt-[2rem]">Opening Time</h2>
          <div className="h-[0.5rem] bg-[#fffb03] my-[0.1rem] rounded transform translate-x-2 max-w-[9rem] "></div>
          <p className="mt-[2rem] text-[16px]">
            <strong>Monday-Friday</strong>:{" "}
            <br className="hidden min450:flex" />
            5am - 11pm
          </p>
          <p className="mt-[2rem] text-[16px]">
            <strong>Saturday-Sunday</strong>:{" "}
            <br className="hidden min450:flex" />
            9am - 9pm
          </p>
        </div>
        <div>
          <h2 className="text-[24px] font-bold mt-[3rem]">Usefull Link</h2>
          <div className="h-[0.5rem] bg-[#fffb03] my-[0.1rem] rounded transform translate-x-2 max-w-[9rem]"></div>
          <Link to="pulseGym/about">
            <p className="mt-[2rem] text-[16px] hover:font-bold cursor-pointer duration-500 ease">
              About Us
            </p>
          </Link>
          <Link to="pulseGym/classes">
            <p className="mt-[2rem] text-[16px] hover:font-bold cursor-pointer duration-500 ease">
              Classes
            </p>
          </Link>
          <Link to="pulseGym/schedule">
            <p className="mt-[2rem] text-[16px] hover:font-bold cursor-pointer duration-500 ease">
              Schedule
            </p>
          </Link>
          <Link to="pulseGym/pricing">
            <p className="mt-[2rem] text-[16px] hover:font-bold cursor-pointer duration-500 ease">
              Pricing
            </p>
          </Link>
          <Link to="pulseGym/login">
            <p className="mt-[2rem] text-[16px] hover:font-bold cursor-pointer duration-500 ease">
              Login
            </p>
          </Link>
          <Link to="pulseGym/contact">
            <p className="mt-[2rem] text-[16px] hover:font-bold cursor-pointer duration-500 ease">
              Contact
            </p>
          </Link>
        </div>
        <div className="">
          <h2 className="text-[24px] font-bold mt-[3rem]">Contact Info</h2>
          <div className="h-[0.5rem] bg-[#fffb03] my-[0.1rem] rounded transform translate-x-2 max-w-[9rem] "></div>
          <div className="mt-[2rem] flex align-center justify-start gap-[2rem] ">
            <i className="fa-sharp fa-solid fa-location-dot text-[25px] text-[#000000]"></i>
            <div>
              <h2 className="text-[18px] font-bold">Adress</h2>
              <p className="mt-[0.2rem] text-[13px] ">
                123B, Central Street <br className="hidden min450:flex" /> Main
                road <br />
                Belix Tower, New York, USA
              </p>
            </div>
          </div>
          <div className="mt-[2rem] flex align-center justify-start gap-[2rem]">
            <i className="fa-solid fa-phone text-[25px] text-[#000000]"></i>
            <div>
              <h2 className="text-[18px] font-bold">Phone</h2>
              <p className="mt-[0.2rem] text-[13px] ">
                +55 (123) 456 789
                <br />
                +55 (987) 654 321
              </p>
            </div>
          </div>
          <div className="mt-[2rem] flex align-center justify-start gap-[2rem]">
            <i className="fa-earth-americas fa-solid  text-[25px] text-[#000000]"></i>
            <div>
              <h2 className="text-[18px] font-bold">Web</h2>
              <p className="mt-[0.2rem] text-[13px]">
                https://github.com/
                <br className="hidden min450:flex" />
                davimgfx
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
