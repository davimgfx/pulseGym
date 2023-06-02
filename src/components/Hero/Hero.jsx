import React from "react";
import MainButton from "../MainButton";
export const Hero = () => {
  return (
    <section className="hero-section md1300:flex md1300:justify-center md1300:text-center">
      <div className="container-hero md1300:flex md1300:justify-center md1300:text-center">
        <div className="flex flex-col text-white absolute top-[35%] right-[20rem] md1300:static md1300:my-[auto]  md1300:items-center md1300:w-[80%]">
          <h1 className="font-bold text-[52px] uppercase min450:text-[40px] min620:text-[50px] hero-h1">
            Shape your body <br />
            <span className="font-thin text-white">the way you want</span>
          </h1>
          <MainButton text="Our classes" colortext="white" />
          <div className="h-3 bg-[#fffb03] mb-[2rem] rounded md1300:mb-0"></div>
          <div className="flex flex-row-reverse items-center ">
            <div className="text-white gap-7 flex mr-7 md1300:text-[#fffb03]  md1300:mx-auto">
              <i className="fa-brands hover:text-[#fffb03] md1300:hover:text-white fa-instagram text-4xl cursor-pointer ease-in duration-200 "></i>
              <i className="fa-brands hover:text-[#fffb03] md1300:hover:text-white fa-twitter text-4xl cursor-pointer ease-in duration-200"></i>
              <i className="fa-brands hover:text-[#fffb03] md1300:hover:text-white  fa-linkedin-in text-4xl cursor-pointer ease-in duration-200 "></i>
              <i className="fa-brands hover:text-[#fffb03] md1300:hover:text-white  fa-facebook text-4xl cursor-pointer ease-in duration-200 "></i>
              <i className="fa-brands hover:text-[#fffb03] md1300:hover:text-white  fa-whatsapp text-4xl cursor-pointer ease-in duration-200 "></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
