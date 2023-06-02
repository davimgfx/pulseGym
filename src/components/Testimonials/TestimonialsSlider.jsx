import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { PeopleCarousel } from "./TestimonialsCompany";

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="App-slider mt-[5rem] mb-[10rem] max-w-[120rem] mx-auto">
      <Slider {...settings}>
        {PeopleCarousel.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-top px-[2rem] py-[2rem] bg-[#777] h-[17rem] ">
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
