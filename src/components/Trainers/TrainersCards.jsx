import React from "react";
import { trainersCards } from "./TrainersCards.js";

const TrainersCards = () => {
  return (
    <div className="flex justify-center items-center mt-[5rem] mb-[5rem] gap-[5rem] md1200:flex md1200:flex-col md1200:mt-[1rem] md1200:mb-[3rem]">
      {trainersCards.map((card, id) => (
        <div
          key={id}
          className={`border-black border-solid p-[2rem] min450:p-0 min450:border-0 rounded-xl ${
            id + 1 === 1 ? "card-trainer-1" : id + 1 === 2 ? "card-trainer-2" : "card-trainer-3"
          }`}>
          <img
            src={card.img}
            alt="trainer1"
            className=" grid-image-1 border-black border-solid bg-[#fff200]  min375:border-0 min375:bg-transparent"
          />
          <div className="flex flex-col justify-center text-center mt-[2rem] ">
            <h2 className="text-[24px] font-bold">{card.name}</h2>
            <div className="h-[0.2rem] w-[25rem] bg-[#363636] rounded mx-[auto] transform -translate-y-2  min450:hidden"></div>
            <p className="font-thin text-[16px] text-[#363636]">
              {card.description}
            </p>
            <div className="flex gap-[1rem] justify-center mt-[1rem]">
              <i className="fa-brands fa-instagram text-4xl cursor-pointer  hover:bg-[#fffb00] p-[0.5rem] rounded-full ease-in duration-200"></i>
              <i className="fa-brands fa-facebook text-4xl cursor-pointer hover:bg-[#fffb00] p-[0.5rem] rounded-full ease-in duration-200"></i>
              <i className="fa-brands fa-whatsapp text-4xl cursor-pointer hover:bg-[#fffb00] p-[0.5rem] rounded-full ease-in duration-200"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainersCards;
