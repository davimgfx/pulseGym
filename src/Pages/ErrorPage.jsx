import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex justify-center align-center bg-[#777] flex-col mx-[auto] mt-[2rem]">
      <h2 className="font-bold text-[80px]  md1200:text-center uppercase min450:text-[32px] min620:text-[36px] hero-h1 mb-5 md1200:mb-10 text-center">
            ERROR 404!
     </h2>
     <p className="font-bold text-[30px]  md1200:text-center uppercase min450:text-[32px] min620:text-[36px] hero-h1 mb-5 md1200:mb-10 text-center">
        Page not found :(
     </p>
    </div>
  );
};

export default ErrorPage;
