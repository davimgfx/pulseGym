import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { PeopleCarousel } from "./TestimonialsCompany";

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="App-slider mt-[10rem] mb-[10rem] max-w-[120rem] mx-auto md1300:max-w-[20rem]">
      <Slider {...settings}>
        {PeopleCarousel.map((item, index) => (
          <div className="card " key={index}>
            <div className="card-top p-[2rem] bg-[#777] h-[17rem] ">
              <h2 className="text-[14px] ">"{item.msg}"</h2>
            </div>
            <div className="card-bottom display flex justify-start relative top-[3rem] left-[2rem] gap-[1.5rem]">
              <img
                src={item.img}
                alt="profile_picture"
                className="rounded-full h-[8rem]"
              />
              <div className="text-left relative">
                <h2 className="text-[20px] font-bold">{item.name}</h2>
                <p className="font-thin text-[16px] text-[#363636]">
                  {item.age}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
