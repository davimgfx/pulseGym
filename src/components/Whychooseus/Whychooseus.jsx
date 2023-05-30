import React from "react";
import { imgvideo, titleBg } from "../../assets";
import MainButton from "../MainButton";
const Whychooseus = () => {
  return (
    <section className="whychooseus w-full h-screen flex justify-center items-center">
      <div className="page-padding flex justify-center gap-[12.5rem]">
        <div>
          <img
            src={imgvideo}
            alt=""
            className=" w-[100%] h-auto cursor-pointer rounded-xl image-border"
          />
        </div>
        <div className="w-[28%] ">
          <div>
            <h2 className="text-black font-semibold text-[24px] bottom-[2.6rem] relative uppercase z-10 ">
              Why US
            </h2>
            <img
              src={titleBg}
              alt="text_bg"
              className="relative bottom-[6rem] right-[6rem]"
            />
          </div>
          <div className="relative bottom-[3rem] text-center">
            <h2 className="font-bold text-[40px]  md1200:text-center uppercase min450:text-[32px] min620:text-[36px] hero-h1 mb-5 md1200:mb-10 ">
              We Can Give A Shape Of Your Body Here!
            </h2>
            <p className="font-thin text-[16px] text-[#777] md1000:mb-10 md1200:mx-[20rem] md1000:mx-0">
              At <b>PulseGym</b>, we are dedicated to helping you achieve the
              body of your dreams. Our expert trainers and nutritionists will
              work with you to create a personalized fitness and nutrition plan
              that helps you reach your specific goals.
            </p>
            <div className="flex flex-wrap gap-[6rem] justify-center items-center text-[26px] mt-[4rem] mb-[4rem]">
              <div className="flex justify-center items-center gap-[2rem] text-white">
                <i class="fa-solid fa-people-group hover:text-[#fffb00] ease-in duration-200 text-[4.3rem]"></i>
                <p className="text-[18px] text-left font-bold min800:text-[20px] leading-thin">
                  3 Days <br />
                 For Free
                </p>
              </div>
              <div className="flex justify-center items-center gap-[2rem] text-white cursor-pointer">
                <i className="fa-solid fa-person hover:text-[#fffb00] ease-in duration-200 text-[5rem]"></i>
                <p className="text-[18px] text-left font-bold min800:text-[20px] leading-thin">
                  Free Fitness
                  <br />
                  Plan
                </p>
              </div>
              <div className="flex justify-center items-center gap-[2rem] text-white">
                <i class="fa-solid fa-bottle-water hover:text-[#fffb00] ease-in duration-200 text-[5rem]"></i>
                <p className="text-[18px] text-left font-bold min800:text-[20px] leading-thin">
                  Free Water
                  <br />
                </p>
              </div>
              <div className="flex justify-center items-center gap-[2rem] text-white">
                <i class="fa-solid fa-lock hover:text-[#fffb00] ease-in duration-200 text-[3.6rem]"></i>
                <p className="text-[18px] text-left font-bold min800:text-[20px] leading-thin">
                  Free <br />
                  Gym Locker
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <MainButton text="Our classes" colortext="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychooseus;
