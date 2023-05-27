import React from "react";
import {
  basketball,
  crossfit,
  cycling,
  martialarts,
  stretching,
  titleBg,
  yoga,
} from "../../assets";

const Class = () => {
  return (
    <>
    <section id="class">
      <div className="container page-padding">
        <div>
          <div className="flex flex-col text-center items-center relative mb-[10rem]">
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
            <div className="grid-container md1000:flex md1000:flex-col md1000:gap-[2rem] mt-[2rem] cursor-pointer">
              <div className="grid-image relative">
                <img src={basketball} alt="basketball" className="grid-image-1"/>
                <h2 className="text-white font-bold text-[24px] absolute bottom-[5rem] left-[2rem] class-h2">
                  Basketball
                </h2>
                <p className="text-black font-thin text-[18px] absolute bottom-[2rem] left-[2rem] bg-[#fcec18] px-[10px]">
                  Mon: 9:00AM-11:00AM
                </p>
              </div>
              <div className="grid-image relative">
                <img src={crossfit} alt="crossfit" className="grid-image-2" />
                <h2 className="text-white font-bold text-[24px] absolute bottom-[5rem] left-[2rem] class-h2">
                  Cross-Fit
                </h2>
                <p className="text-black font-thin text-[18px] absolute bottom-[2rem] left-[2rem] bg-[#fcec18] px-[10px]">
                  Tues: 3:00PM-4:00PM
                </p>
              </div>
              <div className="grid-image relative">
                <img src={cycling} alt="cycling" className="grid-image-3" />
                <h2 className="text-white font-bold text-[24px] absolute bottom-[4rem] left-[2rem] class-h2 md1000:bottom-[5rem]">
                  Cycling
                </h2>
                <p className="text-black font-thin text-[15px] md1000:text-[18px] absolute bottom-[2rem] left-[2rem] bg-[#fcec18] px-[10px]">
                  Wed: 1:00PM-2:00PM
                </p>
              </div>
              <div className=" grid-image relative">
                <img src={martialarts} alt="martialarts" className="grid-image-4"/>
                <h2 className="text-white font-bold text-[24px] absolute bottom-[4rem] left-[2rem] class-h2 md1000:bottom-[5rem]">
                  Boxing
                </h2>
                <p className="text-black font-thin text-[15px] md1000:text-[18px] absolute bottom-[2rem] left-[2rem] bg-[#fcec18] px-[10px]">
                Thu: 6:00AM-7:00AM
                </p>
              </div>
              <div className="grid-image relative">
                <img src={stretching} alt="stretching" className="grid-image-5 "/>
                <h2 className="text-white font-bold text-[24px] absolute bottom-[4rem] left-[2rem] class-h2 md1000:bottom-[5rem]">
                  Stretching
                </h2>
                <p className="text-black font-thin text-[15px] md1000:text-[18px] absolute bottom-[2rem] left-[2rem] bg-[#fcec18] px-[10px]">
                  Fri: 8:00AM-10:00AM
                </p>
              </div>
              <div className=" grid-image relative">
                <img src={yoga} alt="yoga" className="grid-image-6"/>
                <h2 className="text-white font-bold text-[24px] absolute bottom-[4rem] left-[2rem] class-h2 
                md1000:bottom-[5rem]">
                  Yoga
                </h2>
                <p className="text-black font-thin text-[15px] md1000:text-[18px] absolute bottom-[2rem] left-[2rem] bg-[#fcec18] px-[10px]">
                  Sat: 5:00PM-6:00PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="class-banner">

    </div>
    </>
  );
};

export default Class;
