import React from "react";
import titleBg from "../../assets/about-us/title-bg.svg";
import company1 from "../../assets/testimonial/company1.png";
import company2 from "../../assets/testimonial/company2.png";
import company3 from "../../assets/testimonial/company3.png";
import company4 from "../../assets/testimonial/company4.png";
import company5 from "../../assets/testimonial/company5.png";
import company6 from "../../assets/testimonial/company6.png";
import { TestimonialsCompany } from "./TestimonialsCompany";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="mt-[8rem] flex flex-col justify-center align-center ">
        <img
          src={titleBg}
          alt="titleBg"
          className="h-[4.5rem] transform translate-y-[4rem] translate-x-[-10px]"
        />
        <h2 className="text-black font-semibold text-[24px] text-center uppercase z-10 mb-[2rem]">
          Testimonials
        </h2>
        <div className="mx-[auto] relative right-[35rem] md1300:right-[5rem] min620:static min620:flex min620:text-center">
          <h2 className="font-bold text-[40px] uppercase min450:text-[32px] min620:text-[36px] text-left hero-h1 mt-[2rem] md1200:mb-10 ">
             WHAT OUR <br className="hidden min375:block"/>
             MEMBER SAY
          </h2>
          <div className=" h-[15rem] ">

          </div>
        </div>
        <div className="flex gap-[1rem] mx-auto items-center justify-center md1300:grid md1300:grid-cols-3 md1300:gap-4  min540:grid-cols-1 min540:gap-[2rem]">
            {TestimonialsCompany.map((img, index) => (
                <img src={img.img} key={index} className="w-[100%] opacity-30 hover:opacity-70 transition duration-300 cursor-pointer"></img>
            )
            )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
