import React from "react";
import { PricesInfo } from "./PricesInformation.js";
import MainButton from "../MainButton.jsx";
import { Link } from "react-router-dom"
const PricesBox = ({link}) => {
  return (
    <div className="flex mx-auto gap-[3rem] justify-center mt-[2rem] md1200:flex-col ">
      {PricesInfo.map((key, index) => (
        <div
          key={index}
          className="prices-border justify-center flex-col text-center p-[8rem] md1300:p-[6rem] min450:pt-[2rem] md1200:mx-auto  min620:w-[80%]">
          <h2 className="text-[25px] font-bold min375:text-[22px]">
            <span className="text-[33px] min375:text-[26px]">{key.name}</span> <br /> MemberShip
          </h2>
          <p className="p-6 w-[23rem] text-[13px] md1200:hidden">{key.msg}</p>   
          <p className="text-[5rem] font-bold min375:text-[35px]">$ {key.price}</p>
          <div className="flex justify-center">
            <Link to="/pulseGym/pricing">
              <MainButton text="ENROLL NOW"  colortext="black"/>
            </Link>
          </div>
          <ul className="my-2 text-left flex gap-[2rem] items-center flex-col font-bold">
            {key.benefits.map((benefit, index) => (
              <li key={index} className="text-[14px] mt-4 check min375:text-[12px]">
              <i className="fa-solid fa-check text-black bg-[#ffffff] p-[0.5rem] rounded-full"></i> {benefit}
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
