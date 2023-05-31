import React from "react";
import { trainer1, trainer2, trainer3 } from "../../assets";
const TrainersCards = () => {
  return (
    <div className="flex justify-center items-center mt-[5rem] mb-[10rem] gap-[5rem]">
      <div>
        <img src={trainer1} alt="trainer1"/>
        <div className="flex flex-col justify-center text-center mt-[2rem]">
          <h2 className="text-[24px] font-bold">Paola Carozella</h2>
          <p className="font-thin text-[16px] text-[#363636]">Personal Trainer</p>
          <div className="flex gap-[2rem] justify-center mt-[1rem]">
            <i className="fa-brands fa-instagram text-4xl cursor-pointer "></i>
            <i className="fa-brands fa-facebook text-4xl cursor-pointer "></i>
            <i className="fa-brands fa-whatsapp text-4xl cursor-pointer "></i>
          </div>
        </div>
      </div>
      <div>
        <img src={trainer2} alt="trainer2"/>
        <div className="flex flex-col justify-center text-center mt-[2rem]">
          <h2 className="text-[24px] font-bold">Joao Kleber</h2>
          <p className="font-thin text-[16px] text-[#363636]">Yoga Trainer</p>
          <div className="flex gap-[2rem] justify-center mt-[1rem]">
            <i className="fa-brands fa-instagram text-4xl cursor-pointer "></i>
            <i className="fa-brands fa-facebook text-4xl cursor-pointer "></i>
            <i className="fa-brands fa-whatsapp text-4xl cursor-pointer "></i>
          </div>
        </div>
      </div>
      <div>
        <img src={trainer3} alt="trainer3"/>
        <div className=" flex flex-col justify-center text-center mt-[2rem]">
          <h2 className="text-[24px] font-bold">Ricardo Focassa</h2>
          <p className="font-thin text-[16px] text-[#363636]">Crossfit Trainer</p>
          <div className="flex gap-[2rem] justify-center mt-[1rem]">
            <i className="fa-brands fa-instagram text-4xl cursor-pointer "></i>
            <i className="fa-brands fa-facebook text-4xl cursor-pointer "></i>
            <i className="fa-brands fa-whatsapp text-4xl cursor-pointer "></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainersCards;
