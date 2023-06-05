import React from "react";

const Bmi = () => {
  return (
    <section className="bmi-section py-[6rem] relative">
      <div className="container-bmi page-padding">
        <div className="w-[52rem] mx-[30rem] md1000:mx-[auto] min620:w-[100%]">
          <h2 className="text-white font-bold text-[3.1rem] leading-[1.2] px-7 max-w-6xl">
            Let´s calculate your BMI
            <div className="h-3 bg-[#fffb03] my-[1rem] rounded min620:w-[30%]"></div>
            <p className="text-[16px] text-[#a1a1a1] min620:text-white min620:w-[70%] min375:w-[90%]">
              Easily determine your body mass index with our accurate
              calculation tool.</p>
              <form className="flex w-full gap-6 h-[50px] mt-10 min620:flex-col">
                <input
                  className="w-[50%] bg-transparent text-[14px] border-solid rounded-[1rem] border-2 border-[#ffffff] pl-6 min450:bg-white min450:text-black text-[#fffb03]  min620:h-[100%] min375:w-[80%]"
                  type="text"
                  placeholder="Weight / kg"></input>
                <input
                  className="w-[50%] bg-transparent text-[14px] border-solid rounded-[1rem] border-2 border-[#ffffff] pl-6 min450:bg-white min450:text-black text-[#fffb03]  min620:h-[100%] min375:w-[80%]"
                  type="text"
                  placeholder="Height / cm"></input>
              </form>
              <p className="mt-10 gap-3 text-[16px] font-medium flex items-center w-full min620:flex-col min620:flex min620:items-start min620:py-[2rem]">
                <span className="w-1/2">
                  Your BMI is: &nbsp;
                  <span className="text-[#fffb03]">...</span>
                </span>
                <span className="w-1/2">
                  Your weight is: &nbsp;
                  <span className="text-[#fffb03]">...</span>
                </span>
              </p>
              <button
                type="submit"
                className="text-[15px] uppercase font-bold mt-10 bg-[#323232] w-[15rem] h-[5rem] hover:bg-[#fffb03] hover:text-black"
              >
                Calculate
              </button>
            
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Bmi;
