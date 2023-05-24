import React from "react";
import markTag from "../../assets/hero/titlebg.svg";
export const Hero = () => {
  return (
    <section className="hero-section w-full h-screen min800:flex min800:justify-center min800:text-center">
      <div className="container-hero">
        <div
          className="flex flex-col text-white
           absolute hero-text min800:items-center min800:-right-[22rem] min620:-right-[20rem] min800:w-[80%] min540:-right-[17rem] min450:-right-[14rem] min375:-right-[11rem]">
          <p className="text-black text-[16px] uppercase font-bold relative z-10 pl-28 min800:pl-0 mb-10">
            Stop waste time
          </p>
          <img
            src={markTag}
            alt="markTag"
            className="w-[52%] absolute -top-4 title-white min800:w-[24rem]"
          />
          <h1 className="font-bold text-[52px] uppercase mb-[4rem] min450:text-[40px] min620:text-[50px] hero-h1">
            Shape your body <br />
            <span className="font-thin text-white hero-p">
              the way you want
            </span>
          </h1>
          <div className="flex flex-row-reverse items-center min800:hidden">
            <p className="uppercase  text-3xl font-bold tracking-widest hover:text-[#fffb03] cursor-pointer">
              share
            </p>
            <span className="w-[35px] bg-[#fffb03] h-[5.5px] mr-6"></span>
            <div className="text-white gap-7 flex mr-7 ">
              <i className="fa-brands hover:text-[#fffb03] fa-instagram text-4xl cursor-pointer ease-in duration-200 "></i>
              <i className="fa-brands hover:text-[#fffb03] fa-twitter text-4xl cursor-pointer ease-in duration-200"></i>
              <i className="fa-brands hover:text-[#fffb03]  fa-linkedin-in text-4xl cursor-pointer ease-in duration-200 "></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
