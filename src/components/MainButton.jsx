import React from "react";

const MainButton = ({ text }) => {
  return (
    <div className="flex items-center mb-8 mt-4">
      <div className="border-solid border-2  p-2 rounded-md flex items-center cursor-pointer">
        <h3 className="text-white text-[16px] font-bold uppercase ml-4 mr-8 tracking-wider min800:bg-[#777] min800:px-2 min800:border rounded-lg">
          {text}
        </h3>
        <i
          className={
            "fa-solid fa-arrow-right bg-[#fff336] text-black text-2xl py-3 px-4 rounded-md"
          }></i>
      </div>
    </div>
  );
};

export default MainButton;
