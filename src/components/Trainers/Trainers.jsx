import React from "react";
import { titleBg } from "../../assets";
const Trainers = () => {
  return (
    <section className="trainer-section">
      <div className="mt-[10rem] flex flex-col justify-center align-center">
        <img src={titleBg} alt="" className="h-[4.4rem] relative" />
        <h2 className="text-black font-semibold text-[24px] relative text-center bottom-[4rem] left-[0.7rem] uppercase z-10 ">
          Our Trainers
        </h2>
        <div className="flex justify-center flex-col align-center text-center trainer-info">
          <h2 className="font-bold text-[40px]  md1200:text-center uppercase min450:text-[32px] min620:text-[36px] hero-h1 mb-5 md1200:mb-10 ">
            Team of Expert Coaches
          </h2>
          <p className="font-thin text-[16px] text-[#777] md1000:mb-10 md1200:mx-[20rem] md1000:mx-0">
            Expert team of coaches helps you succeed in any goal, personalized
            guidance and motivation provided!
          </p>
        </div>
        <div className="flex">

        </div>
      </div>
    </section>
  );
};

export default Trainers;
