import React from "react";
import { Link } from "react-router-dom";
import { ClassesInfo } from "./ClassesInfo";
import "./ClassGrid-style.css"
const ClassGrid = () => {
  return (
    <div className="grid-container md1000:flex md1000:flex-col md1000:gap-[2rem] mt-[2rem] ">
      {ClassesInfo.map((card, index) => (
        <div
          className="grid-image relative overflow-hidden cursor-pointer"
          key={index}>
          <Link to="classes">
            <img
              src={card.img}
              alt={card.name}
              className="grid-image-1 transition-transform duration-300 transform hover:scale-125"
            />
          </Link>
          <h2 className="text-white font-bold text-[24px] absolute bottom-[5rem] left-[2rem] class-h2 min450:text-[18px] min540:bottom-[4rem]">
            {card.name}
          </h2>
          <p className="text-black font-thin text-[18px] absolute bottom-[2rem] left-[2rem] bg-[#fcec18] px-[10px] min450:text-[14px]">
            {card.date}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ClassGrid;
