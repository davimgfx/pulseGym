import React from "react";
import { ClassesDays, StarterBanner } from "../components";

const Classes = () => {
  return (
    <>
      <StarterBanner title="Classes" />
      <div className="container gap-12 page-padding py-[10rem] md1000:grid-cols-2 min620:grid-cols-1  grid-cols-3 grid-rows-2 text-left grid">
        {ClassesDays.map((item, index) => (
          <div
            className={`${item.name.toLowerCase()}-bg-classes card-1  h-[46rem] rounded-[3rem] relative image-border`}
            key={index}>
            <div className="card-top p-[2rem] h-[17rem] min620:h-[14rem]">
              <h2 className="text-white font-bold text-[4rem] absolute bottom-[10rem] left-[2rem] class-h2 min375:text-[3rem]">
                {item.name}
              </h2>
              <p className="text-black bg-white font-thin text-[18px] absolute bottom-[7.5rem] left-[rem] px-[10px] min450:text-[16px]">
                <i className="fa-regular fa-user min450:text-[14px] text-black text-[1.8rem] font-semibold pr-[0.2rem]"></i>{" "}
                {item.teacher}
              </p>
              <p className="text-black font-thin text-[18px] absolute bottom-[4rem] left-[2rem] bg-[#fcec18] px-[10px] min450:text-[16px]">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Classes;
