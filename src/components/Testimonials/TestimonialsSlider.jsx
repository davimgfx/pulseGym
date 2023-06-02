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
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="App-slider mt-[5rem] mb-[10rem] max-w-[120rem] mx-auto md1300:max-w-[90rem] md1000:max-w-[60rem] min680:max-w-[30rem] min375:max-w-[25rem]">
      <Slider {...settings}>
        {PeopleCarousel.map((item, index) => (
          <div className="card " key={index}>
            <div className="card-top p-[2rem] bg-[#777] h-[17rem] ">
              <h2 className="text-[14px] min620:text-[12px]">"{item.msg}"</h2>
            </div>
            <div className="card-bottom display flex justify-start relative top-[3rem] left-[2rem] gap-[1.5rem]">
              <img
                src={item.img}
                alt="profile_picture"
                className="rounded-full h-[8rem] min620:h-[6rem]"
              />
              <div className="text-left relative min620:flex min620:flex-col min620:justify-center">
                <h2 className="text-[20px] font-bold min620:text-[16px]">{item.name}</h2>
                <p className="font-thin text-[16px] text-[#363636] min620:text-[12px]">
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
