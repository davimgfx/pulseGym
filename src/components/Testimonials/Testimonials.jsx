import React from "react";
import titleBg from "../../assets/about-us/title-bg.svg";
import { TestimonialsCompany } from "./TestimonialsCompany";
import TestimonialsSlider from "./TestimonialsSlider";

const Testimonials = () => {
  return (
    <section id="testimonials">   
      <div className="mt-[2rem] flex flex-col justify-center align-center border-b border-solid border-[#64646438] border-t-0 border-l-0 border-r-0">
        <img
          src={titleBg}
          alt="titleBg"
          className="h-[4.5rem] transform translate-y-[4rem] translate-x-[-10px]"
        />
        <h2 className="text-black font-semibold text-[24px] text-center uppercase z-10 mb-[2rem]">
          Testimonials
        </h2>
        <div className="mx-[auto] relative right-[35rem] md1300:right-0 min620:static min620:flex min620:text-center">
          <h2 className="font-bold text-[40px] uppercase min450:text-[32px] min620:text-[36px] text-left hero-h1 mt-[2rem]">
            WHAT OUR <br className="hidden min375:block" />
            MEMBER SAY
          </h2>
        </div> 
        <TestimonialsSlider />
        <div className="flex gap-[1rem] mx-auto items-center justify-center md1300:grid md1300:grid-cols-3 md1300:gap-4  min540:grid-cols-1 min540:gap-[2rem] pb-[5rem]">
          {TestimonialsCompany.map((img, index) => (
            <img
              src={img.img}
              alt="companylogo"
              key={index}
              className="w-[100%] opacity-30 hover:opacity-70 transition duration-300 cursor-pointer "></img>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
