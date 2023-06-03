import React from "react";
import { PricesInfo } from "./PricesInformation.js";
import MainButton from "../MainButton.jsx";
const PricesBox = () => {
  return (
    <div className="flex mx-auto gap-[3rem] justify-center mt-[2rem] ">
      {PricesInfo.map((key, index) => (
        <div
          key={index}
          className="prices-border justify-center flex-col text-center p-[5rem] ">
          <h2 className="text-[25px] font-bold ">
            <span className="text-[33px] ">{key.name}</span> <br /> MemberShip
          </h2>
          <p className="p-6 w-[23rem] text-[13px]">{key.msg}</p>   
          <p className="text-[5rem] font-bold">$ {key.price}</p>
          <div className="flex justify-center">
            <MainButton text="ENROLL NOW"  colortext="black"/>
          </div>
          <ul className="my-2 text-left flex gap-[2rem] items-center flex-col font-bold">
            {key.benefits.map((benefit, index) => (
              <li key={index} className="text-[14px] mt-4 check ">
              <i class="fa-solid fa-check text-black bg-[#ffffff] p-[0.5rem] rounded-full"></i> {benefit}
              <div className="h-[0.2rem] bg-[#fffb03] my-[0.1rem] rounded transform translate-x-2"></div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricesBox;
