import React from "react";
const SignIn = () => {
  return (
    <>
      <div className="page-padding py-[10rem] flex justify-center ">
        
        <form className="flex flex-col py-40 px-20 bg-[#37383A] w-[55rem] min450:w-full login-box-shadow">
          <label className="text-[2rem] text-white font-medium hero-p">
            Email
          </label>
          <div className="h-[0.5rem] bg-[#fffb03] rounded mb-3 "></div>
          <input
            className="text-[1.7rem] px-8 py-4 mb-10 w-full  "
            placeholder="youremail@gmail.com"
            type="email"></input>

          <label className="text-[2rem] text-white font-medium hero-p">
            Password
          </label>
          <div className="h-[0.5rem] bg-[#fffb03] rounded mb-3 "></div>
          <input
            className="text-[1.7rem] px-8 py-4 mb-10 w-full"
            placeholder="password"
            type="password"></input>
          <button
            type="submit"
            className="bg-[#37383A] border-white border-solid text-white py-4 font-bold text-[2rem] w-full mt-10  hover:border-[#fffb03]  duration-500 ease hero-p">
            Login
          </button>
          <a href="">
            <p className="text-white text-[1.5rem] text-center mt-[2rem]">
              New to Pulse Gym? <span className="hero-p font-bold">Sign Up</span>
            </p>
          </a>
          <a href="">
            <p className="text-white text-[1.5rem] text-center mt-[2rem] hero-p font-bold">
              Forget your password?
            </p>
          </a>
        </form>
      </div>
    </>
  );
};

export default SignIn;
