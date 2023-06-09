import React from "react";
import { Link } from "react-router-dom";
import ballBasket from "../../assets/about-us/basketball.png";
import manRunner from "../../assets/about-us/runner.png";
import titleBg from "../../assets/about-us/title-bg.svg";
import MainButton from "../MainButton";

const AboutSection = ({icons, title, paragraph, link}) => {
  return (
    <div className="container page-padding">
      <div className=" grid grid-cols-[50fr,50fr] gap-[1rem] md1200:grid-cols-1 md1200:items-center md1200:flex md1200:flex-col md1200:text-center md1200:w-[full] relative ">
        <h2 className="text-black font-semibold text-[24px] relative uppercase z-10 pl-16 md1000:pl-0 ml-9 md1200:-ml-[2rem] md1000:ml-0 ">
          ABOUT US
        </h2>
        <img
          src={titleBg}
          alt="text_bg"
          className="w-[20%] absolute top[-3px] md1000:w-[22rem] min250:hidden"
        />
        <div></div>
        <div className="md1200:items-center md1200:flex md1200:flex-col md1200:text-center md1200:w-[full] ">
          <h2 className="font-bold text-[40px] text-left md1200:text-center uppercase min450:text-[32px] min620:text-[36px] hero-h1 mb-5 md1200:mb-10 ">
           {title}
          </h2>
          <p className={`font-semibold text-[18px] uppercase text-[#777] md1000:mb-10 md1200:mx-[20rem] md1000:mx-0 ${icons === "true" ? "" : "mb-[4rem]"}`}>
            {paragraph}
          </p>
          <div className={`flex gap-[2rem] text-[26px] mt-[4rem] mb-[4rem] min540:flex-col md1200:items-center md1200:flex md1200:text-center ${icons === "true" ? "" : "hidden"}`}>
            <div className="flex flex-col justify-center items-center gap-3">
              <i className="fa-solid fa-dumbbell text-[4.5rem] mb-[0.1rem] min800:text-[4rem]"></i>
              <p className="text-[22px] text-center text-black font-bold min800:text-[20px] leading-tight">
                Modern <br />
                Equipaments
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border-solid border-l border-[rgb(0,0,0,0.2)] border-y-0 min540:border-none border-r min540:mb-[0] px-[3.5rem] gap-[1.3rem]  min540:gap-[0.3rem] text-[26px] mb-[2rem] ">
              <i className="fa-solid fa-basketball text-[4.5rem] min800:text-[4rem]"></i>
              <p className="text-[22px] text-center text-black font-bold min800:text-[20px]">
                Sports
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <i className="fa-solid fa-user text-[4.5rem] mb-[0.1rem] min800:text-[4rem]"></i>
              <p className="text-[22px] text-center text-black font-bold min800:text-[20px] leading-tight">
                Skilled <br />
                professionals
              </p>
            </div>
          </div>
          <Link to={link}>
            <MainButton text="Our classes" colortext="black" />
          </Link>
        </div>
        <div className="relative  md1200:hidden">
          <img
            src={ballBasket}
            alt="ballBasket"
            className="basketball-man md1200:hidden"
          />
          <img src={manRunner} alt="manRunner" className="" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
