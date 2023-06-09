import React from "react";
import titleBg from "../../assets/about-us/title-bg.svg";
import imgvideo from "../../assets/whychooseus/imgvideo.png";
import MainButton from "../MainButton";
import {Link} from "react-router-dom"
const Whychooseus = () => {
  return (
    <section
      className="whychooseus flex justify-center items-center py-[10rem] pb-[5rem] min450:px-[3rem]"
      id="whyus">
      <div className="page-padding flex justify-center md1200:flex-col md1200:gap-[5rem] gap-[25rem] md1300:gap-[15rem]">
        <div>
          <a href="https://github.com/davimgfx" target="_blank">
            <img
              src={imgvideo}
              alt=""
              className=" w-[100%] h-auto cursor-pointer rounded-xl image-border md1200:w-[45rem] mx-auto"
            />
          </a>
        </div>
        <div className="w-[28%] md1400:w-[33%] md1200:w-[100%]  md1200:h-[100%] mt-[5rem]">
          <div className=" md1200:static transform translate-x-[5rem]">
            <h2 className="text-black font-semibold text-[24px] bottom-[2.6rem] relative uppercase z-10  md1200:text-center md1200:translate-x-[-4rem]">
              Why US
            </h2>
            <img
              src={titleBg}
              alt="text_bg"
              className="relative bottom-[6rem] right-[6rem] md1200:mx-auto transform md1200:translate-x-[2rem]"
            />
          </div>
          <div className="relative bottom-[3rem] text-left md1200:flex md1200:flex-col md1200:justify-center md1200:text-center ">
            <h2 className="font-bold text-[40px] md1200: uppercase min450:text-[32px] min620:text-[36px] hero-h1 mb-5 md1200:mb-10 ">
              We Can Give A Shape Of Your Body Here!
            </h2>
            <p className="font-thin text-[16px] text-[#777] md1000:mb-10 md1200:mx-[20rem] md1000:mx-0">
              At <b>PulseGym</b>, we are dedicated to helping you achieve the
              body of your dreams. Our expert trainers and nutritionists will
              work with you to create a personalized fitness and nutrition plan
              that helps you reach your specific goals.
            </p>
            <div className="flex flex-wrap gap-[6rem] justify-center items-center text-[26px] mt-[4rem] mb-[4rem]">
              <div className="flex justify-center items-center gap-[2rem] text-white  hover:text-[#fffb00] ease-in duration-200">
                <i className="fa-solid fa-people-group text-[4.3rem]"></i>
                <p className="text-[18px] text-left font-bold min800:text-[20px] leading-thin  ">
                  3 Days <br />
                  For Free
                </p>
              </div>
              <div className="flex justify-center items-center gap-[2rem] text-white hover:text-[#fffb00] ease-in duration-200">
                <i className="fa-solid fa-person  text-[5rem]"></i>
                <p className="text-[18px] text-left font-bold min800:text-[20px] leading-thin  ">
                  Free Fitness
                  <br />
                  Plan
                </p>
              </div>
              <div className="flex justify-center items-center gap-[2rem] text-white  hover:text-[#fffb00] ease-in duration-200">
                <i className="fa-solid fa-bottle-water text-[5rem]"></i>
                <p className="text-[18px] text-left font-bold min800:text-[20px] leading-thin">
                  Free Water
                  <br />
                </p>
              </div>
              <div className="flex justify-center items-center gap-[2rem] text-white  hover:text-[#fffb00] ease-in duration-200">
                <i className="fa-solid fa-lock text-[3.6rem]"></i>
                <p className="text-[18px] text-left font-bold min800:text-[20px] leading-thin">
                  Free <br />
                  Gym Locker
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Link to="classes">
                <MainButton text="Our classes" colortext="white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychooseus;
