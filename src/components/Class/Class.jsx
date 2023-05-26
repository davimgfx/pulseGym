import React from "react";
import { titleBg } from "../../assets";

const Class = () => {
  return (
    <section id="class" className="clear-both">
      <div className="container page-padding">
        <div>
          <div className="flex flex-col text-center items-center relative ">
            <h2 className="text-black font-semibold text-[24px] relative uppercase z-10 pl-16 md1000:pl-0 ml-9 md1200:-ml-[2rem] md1000:ml-0 ">
              OUR CLASSES
            </h2>
            <img
              src={titleBg}
              alt="text_bg"
              className="w-[25rem] absolute top-[-3px] translate-x-10 md1200:translate-x-0 min250:hidden "
            />
            <h2 className="font-bold text-[40px] uppercase min450:text-[32px] min620:text-[36px] hero-h1 mt-[2rem] md1200:mb-10">
            We offer top-notch flexible classes.
              </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Class;
