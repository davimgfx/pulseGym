import React, { useState } from "react";

const Bmi = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState("");
  const [weightCategory, setWeightCategory] = useState("");

  const calculateBMI = (event) => {
    event.preventDefault();
    setWeightCategory("...");
    setBmiResult("...");
    setWeight("");
    setHeight("");
    if (weight === "" || height === "") {
      alert("Please enter a valid weight and height");
    } else {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      const roundedBMI = bmi.toFixed(2);

      setBmiResult(roundedBMI);

      if (bmi < 18.5) {
        setWeightCategory("Underweight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setWeightCategory("Normal weight");
      } else if (bmi >= 24.9 && bmi < 29.9) {
        setWeightCategory("Overweight");
      } else {
        setWeightCategory("Obese");
      }
    }
  };

  return (
    <section className="bmi-section py-[6rem] relative">
      <div className="container-bmi page-padding">
        <div className="w-[52rem] mx-[30rem] md1000:mx-[auto] min620:w-[100%]">
          <h2 className="text-white font-bold text-[3.1rem] leading-[1.2] px-7 max-w-6xl">
            Let´s calculate your BMI
            <div className="h-3 bg-[#fffb03] my-[1rem] rounded min620:w-[30%]"></div>
            <p className="text-[16px] text-[#a1a1a1] min620:text-white min620:w-[70%] min375:w-[90%]">
              Easily determine your body mass index with our accurate
              calculation tool.
            </p>
            <form className="flex w-full gap-6 h-[50px] mt-10 min620:flex-col">
              <input
                className="w-[50%] bg-transparent text-[14px] border-solid rounded-[1rem] border-2 border-[#ffffff] pl-6 min450:bg-white min450:text-black text-[#fffb03]  min620:h-[100%] min375:w-[80%] "
                type="text"
                placeholder="Weight / kg"
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
              />
              <input
                className="w-[50%] bg-transparent text-[14px] border-solid rounded-[1rem] border-2 border-[#ffffff] pl-6 min450:bg-white min450:text-black text-[#fffb03]  min620:h-[100%] min375:w-[80%]"
                type="text"
                placeholder="Height / cm"
                value={height}
                onChange={(event) => setHeight(event.target.value)}
              />
            </form>
            <p className="mt-10 gap-3 text-[16px] font-medium flex items-center w-full min620:flex-col min620:flex min620:items-start min620:py-[2rem]">
              <span className="w-1/2">
                Your BMI is: &nbsp;
                <span className="text-[#fffb03]">{bmiResult}</span>
              </span>
              <span className="w-1/2">
                Your weight category is: &nbsp;
                <span className="text-[#fffb03]">{weightCategory}</span>
              </span>
            </p>
            <button
              type="submit"
              className="text-[15px] uppercase font-bold mt-10 bg-[#323232] w-[15rem] h-[5rem] hover:bg-[#fffb03] hover:text-black duration-500 ease"
              onClick={calculateBMI}>
              Calculate
            </button>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Bmi;
