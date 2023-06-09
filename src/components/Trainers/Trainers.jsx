import React from "react";
import MainButton from "../MainButton";
import TrainersCards from "./TrainersCards.jsx";
import titleBg  from "../../assets/about-us/title-bg.svg";
import {Link} from "react-router-dom";

const Trainers = () => {
  return (
    <section className="trainer-section">
      <div className="pt-[8rem] flex flex-col justify-center align-center">
        <img src={titleBg} alt="titleBg" className="h-[4.5rem] transform translate-y-[4rem]"/>
        <h2 className="text-black font-semibold text-[24px] text-center uppercase z-10 mb-[2rem]">
          Our Trainers
        </h2>
        <div className="flex justify-center flex-col align-center text-center trainer-info">
          <h2 className="font-bold text-[40px]  md1200:text-center uppercase min450:text-[32px] min620:text-[36px] hero-h1 mb-5 md1200:mb-10 ">
            Team of Expert Coaches
          </h2>
          <p className="font-thin text-[16px] text-[#777]">
            Expert team of coaches helps you succeed in any goal, personalized
            guidance and motivation provided!
          </p>
        </div>
          <TrainersCards />
        <div className="mx-auto mb-[2rem]">
          <Link to="classes">
            <MainButton text="Our classes" colortext="black"/>
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default Trainers;
