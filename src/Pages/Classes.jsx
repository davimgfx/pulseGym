import React from "react";
import { StarterBanner } from "../components";

const Classes = () => {
  return (
    <>
      <StarterBanner title="Classes" />
      <div className="container gap-12 page-padding py-[10rem] md1000:grid-cols-2 min620:grid-cols-1  grid-cols-3 grid-rows-2 text-left grid">
        <div className="box-bg-classes card-1  h-[46rem] rounded-[3rem]">

        </div>
        <div className="yoga-bg-classes card-1  h-[46rem] rounded-[3rem]">

        </div>
        <div className="crossfit-bg-classes card-1  h-[46rem] rounded-[3rem]">

        </div>
        <div className="basktball-bg-classes card-1 h-[46rem] rounded-[3rem]">

        </div>
        <div className="workout-bg-classes card-1 h-[46rem] rounded-[3rem]">

        </div>
        <div className="runner-bg-classes card-1 h-[46rem] rounded-[3rem]">

        </div>
       
    </div>
   
    </>
  );
};

export default Classes;
