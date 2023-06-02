import React from "react";
import titleBg from "../../assets/about-us/title-bg.svg"
import GalleryPhotos from "./GalleryPhotos"
const Gallery = () => {
  return (
    <section id="gallery">
      <div className="mt-[8rem] flex flex-col justify-center align-center">
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
          <p className="font-thin text-[16px] text-[#777]">
          Our Workplace Gallery features modern office, team collaboration, and fun culture.
          </p>
          <p className="font-thin text-[16px] text-[#777]">
          Attracts talents and showcases company's work atmosphere.
          </p>
        </div>
      </div>
      <GalleryPhotos />
    </section>
  );
};

export default Gallery;
