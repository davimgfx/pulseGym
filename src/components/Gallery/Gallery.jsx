import React from "react";
import titleBg from "../../assets/about-us/title-bg.svg"
import obj1 from "../../assets/gallery/obj1.png"
import obj2 from "../../assets/gallery/obj2.png"
import GalleryPhotos from "./GalleryPhotos"
const Gallery = () => {
  return (
    <section id="gallery" className=" ">
      <div className="mt-[4rem] flex flex-col justify-center align-center ">
        <img
          src={titleBg}
          alt="titleBg"
          className="h-[4.5rem] transform translate-y-[4rem]"
        />
        <h2 className="text-black font-semibold text-[24px] text-center uppercase z-10 mb-[2rem]">
          Our Gallery
        </h2>
        <div className="flex justify-center flex-col align-center text-center">
          <h2 className="font-bold text-[40px]  md1200:text-center uppercase min450:text-[32px] min620:text-[36px] hero-h1 mb-5 md1200:mb-10 ">
          Our Workplace Gallery
          </h2>
          <p className="font-thin text-[16px] text-black">
          Our Workplace Gallery features modern office, team collaboration, and fun culture.
          </p>
          <p className="font-thin text-[16px] text-black">
          Attracts talents and showcases company's work atmosphere.
          </p>
          <img src={obj1} alt="" className="w-[16rem] absolute left-[5rem] opacity-50 transform -rotate-45 translate-y-[5rem] z-[5] md1000:hidden"/>
          <img src={obj2} alt="" className="w-[16rem] absolute right-[8rem] opacity-20 transform rotate-45 translate-y-[6rem] z-[5] md1000:hidden"/>
        </div>
      </div>
      <GalleryPhotos />
    </section>
  );
};

export default Gallery;
