import { ballBasket, manRunner, titleBg } from "../../assets";
import MainButton from "../MainButton";
import AboutCards from "./AboutCards";

const About = () => {
  return (
    <>
      <section className="flex flex-col justify-between gap-2 about-section pb-[20rem]">
        <div className="flex gap-10 -mt-[8.5rem] md1000:flex-col px-20 mb-[10rem]">
          <AboutCards />
        </div>
        <div className="container page-padding">
          <div
            id="about"
            className=" grid grid-cols-[50fr,50fr] gap-[3rem] md1000:grid-cols-1 md1000:items-center md1000:flex md1000:flex-col md1000:text-center md1000:w-[full] relative">
            <p className="text-black font-semibold text-[24px] relative uppercase z-10 pl-16 md1000:pl-0 ml-9 md1200:ml-2 md1000:ml-0">
              ABOUT US
            </p>
            <img
              src={titleBg}
              alt="text_bg"
              className="w-[20%] absolute top[-3px] md1000:w-[22rem]"
            />
            <div></div>
            <div className="md1000:items-center md1000:flex md1000:flex-col md1000:text-center md1000:w-[full]">
              <h2 className="font-bold text-[40px] text-left md1000:text-center uppercase min450:text-[32px] min620:text-[36px] hero-h1 mb-5 md1000:mb-10">
                Take Your Health And Body To Next Level
              </h2>
              <p className="font-semibold text-[18px] uppercase text-[#777] md1000:mb-10">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
              <MainButton text="Our classes" colortext="black" color="black"/>
            </div>
            <div className="relative  md1000:hidden">
              <img
                src={ballBasket}
                alt="ballBasket"
                className="basketball md1200:hidden"
              />
              <img src={manRunner} alt="manRunner" className="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
