import React from "react";
import MainButton from "../MainButton";
export const Hero = () => {
  return (
    <section className="hero-section w-full h-screen min800:flex min800:justify-center min800:text-center">
      <div className="container-hero">
        <div
          className="flex flex-col text-white
           absolute hero-text min800:items-center min800:-right-[22rem] min620:-right-[20rem] min800:w-[80%] min540:-right-[17rem] min450:-right-[14rem] min375:-right-[11rem]">
          <h1 className="font-bold text-[52px] uppercase min450:text-[40px] min620:text-[50px] hero-h1">
            Shape
            <br />
            your body <br />
            <span className="font-thin text-white">
              the way you want
            </span>
          </h1> 
          <MainButton text="Our classes" bordertext="white"/> 
          <div className="h-3 bg-[#fffb03] mb-[2rem] rounded"></div>
          <div className="flex flex-row-reverse items-center min800:hidden">
            <div className="text-white gap-7 flex mr-7 ">
              <i className="fa-brands hover:text-[#fffb03] fa-instagram text-4xl cursor-pointer ease-in duration-200 "></i>
              <i className="fa-brands hover:text-[#fffb03] fa-twitter text-4xl cursor-pointer ease-in duration-200"></i>
              <i className="fa-brands hover:text-[#fffb03] fa-linkedin-in text-4xl cursor-pointer ease-in duration-200 "></i>
              <i className="fa-brands hover:text-[#fffb03] fa-facebook text-4xl cursor-pointer ease-in duration-200 "></i>
              <i className="fa-brands hover:text-[#fffb03] fa-whatsapp text-4xl cursor-pointer ease-in duration-200 "></i>
            </div>
          </div>  
         
        </div>   
      </div>
    </section>
  );
};

export default Hero;
