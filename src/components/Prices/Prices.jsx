import React from "react";
import titleBg from "../../assets/about-us/title-bg.svg";
import PricesBox from "./PricesBox"
const Prices = () => {
  return (
    <section id="prices">
      <div className="mt-[4rem] flex flex-col justify-center align-center ">
        <img
          src={titleBg}
          alt="titleBg"
          className="h-[4.5rem] transform translate-y-[4rem]"
        />
        <h2 className="text-black font-semibold text-[24px] text-center uppercase z-10 mb-[2rem]">
          OUR PRICING
        </h2>
        <div className="flex justify-center flex-col align-center text-center">
          <h2 className="font-bold text-[40px]  md1200:text-center uppercase min450:text-[32px] min620:text-[36px] hero-h1 mb-5 md1200:mb-10 ">
            Exclusive Pricing Plan
          </h2>
          <p className="font-thin text-[16px] text-black">
            Gym at an unknown printer took a galley of type and scrambled make a
          </p>
          <p className="font-thin text-[16px] text-black">
            type specimen book.
          </p>
        </div>
      </div>
      <PricesBox/>
    </section>
  );
};

export default Prices;
