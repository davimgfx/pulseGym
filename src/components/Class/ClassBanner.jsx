import React from "react";
import MainButton from "../MainButton";

const ClassBanner = () => {
  return (
    <div className="class-banner flex justify-center text-left items-center md1000:hidden">
      <div className="container">
        <div className="flex items-center md1300:flex-col md1300:gap-3  md1300:hidden">
          <h2 className="text-white font-bold text-[3.1rem] leading-[1.2] px-7 max-w-6xl">
            We Are Always Providing Best Fitness Service For You
          </h2>
          <MainButton text="Go with us" colortext="white" />
        </div>
      </div>
    </div>
  );
};

export default ClassBanner;