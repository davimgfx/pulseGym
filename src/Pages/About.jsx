import React from "react";
import Slider from "react-slick";
import img1 from "../assets/about-us/img1.png";
import img2 from "../assets/about-us/img2.jpg";
import img3 from "../assets/about-us/img3.png";
import img4 from "../assets/about-us/img4.png";
import img5 from "../assets/about-us/img5.jpg";
import img6 from "../assets/about-us/img6.png";
import titleBg from "../assets/about-us/title-bg.svg";
import { AboutSection, StarterBanner } from "../components";

const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };

  return (
    <section className="">
      <StarterBanner title="About US" />
    
      <div className="my-[8rem] page-padding">
        <AboutSection
          icons="false"
          title="We Will Give You Strength and Health"
          paragraph="
Achieve your best health and physique with our comprehensive program meticulously designed to propel you towards your ultimate fitness goals."
        />
      </div>
      <div className="mt-[4rem] flex flex-col justify-center align-center ">
        <img
          src={titleBg}
          alt="titleBg"
          className="h-[4.5rem] transform translate-y-[4rem]"
        />
        <h2 className="text-black font-semibold text-[24px] text-center uppercase z-10 mb-[2rem]">
          Our History
        </h2>
        <div className="flex justify-center flex-col align-center text-center">
          <h2 className="font-bold text-[40px]  md1200:text-center uppercase min450:text-[32px] min620:text-[36px] hero-h1 mb-5 md1200:mb-10 ">
            A Decade of Fitness Success
          </h2>
          <p
            className="font-semibold text-[18px] uppercase text-[#777] w-[80rem] mx-auto md1000:w-[auto] md1000:px-[2rem]
          ">
            For 10 years, PulseGym has been a fitness leader, helping countless
            individuals achieve their goals. With top-notch programs and a
            supportive community, we're here to transform lives. Join us and
            experience the power of PulseGym.
          </p>
          <div className="h-[0.5rem] bg-[#fffb03] rounded transform translate-x-2 w-[50%] mt-[3rem] mx-[auto]"></div>
          <div className=" my-[1rem] overflow-hidden">
            <Slider {...settings}>
              <div>
                <img src={img1} alt="before_and_after_body" />
              </div>
              <div>
                <img src={img2} alt="before_and_after_body" />
              </div>
              <div>
                <img src={img3} alt="before_and_after_body" />
              </div>
              <div>
                <img src={img4} alt="before_and_after_body" />
              </div>
              <div>
                <img src={img5} alt="before_and_after_body" />
              </div>
              <div>
                <img src={img6} alt="before_and_after_body" />
              </div>
            </Slider>
          </div>

          <div className="h-[0.5rem] bg-[#fffb03] rounded transform translate-x-2 w-[50%] mb-[3rem] mx-[auto]"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
