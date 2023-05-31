import React from "react";
import { trainersCards } from "./TrainersCards.js";

const TrainersCards = () => {
  return (
    <div className="flex justify-center items-center mt-[5rem] mb-[10rem] gap-[5rem] md1000:flex md1000:flex-col md1000:mt-[1rem] md1000:mb-[3rem]">
      {trainersCards.map((card, id) => (
        <div key={id}>
          <img src={card.img} alt="trainer1" />
          <div className="flex flex-col justify-center text-center mt-[2rem]">
            <h2 className="text-[24px] font-bold">{card.name}</h2>
            <p className="font-thin text-[16px] text-[#363636]">
              {card.description}
            </p>
            <div className="flex gap-[2rem] justify-center mt-[1rem]">
              <i className="fa-brands fa-instagram text-4xl cursor-pointer "></i>
              <i className="fa-brands fa-facebook text-4xl cursor-pointer "></i>
              <i className="fa-brands fa-whatsapp text-4xl cursor-pointer "></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainersCards;
