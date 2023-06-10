import React from "react";
import { StarterBanner } from "../components";
const Contact = () => {
  return (
    <section className="">
      <StarterBanner title="Contact US" />
      <div className="flex justify-center">
        <div className="page-padding py-[4rem] flex justify-center gap-[2rem] md1200:flex-col">
          <div className="w-[55rem]  mb-[5rem] md1000:mb-0 min450:w-[100%] md1200:flex md1200:flex-col md1200:justify-center md1200:text-center">
            <div>
              <h2 className="font-bold text-[32px] uppercase min450:text-[32px] min620:text-[36px] text-left hero-h1 mt-[2rem] mb-[2rem] md1200:text-center">
                We are here for help you! <br />
                To Shape Your Body.
              </h2>
              <p
                className="font-semibold text-[18px] text-[#777]  mx-auto md1000:w-[auto] md1000:px-[2rem] 
          ">
                At PulseGym, we are dedicated to helping you achieve the body of
                your dreams. Our expert trainers and nutritionists will work
                with you to create a personalized fitness and nutrition plan
                that helps you reach your specific goals.
              </p>
              <h2 className="text-[24px] font-bold mt-[2rem] text-black">Opening Time</h2>
              <div className="h-[0.5rem] bg-[#fffb03] my-[0.1rem] rounded transform translate-x-2 max-w-[9rem] md1200:mx-[auto]"></div>
            </div>
            <div>
              <p className="mt-[2rem] text-[16px] text-black">
                <strong>Monday-Friday</strong>:{" "}
                <br className="hidden min450:flex" />
                5am - 11pm
              </p>
              <p className="mt-[2rem] text-[16px] text-black">
                <strong>Saturday-Sunday</strong>:{" "}
                <br className="hidden min450:flex" />
                9am - 9pm
              </p>
            </div>
            <div>
              <h2 className="text-[24px] font-bold mt-[2rem] text-black">Where We Are</h2>
              <div className="h-[0.5rem] bg-[#fffb03] my-[0.1rem] rounded transform translate-x-2 max-w-[9rem] md1200:mx-[auto]"></div>
              <p className="mt-[2rem] text-[16px] text-black">
                123B, Central Street <br />
                Main road Belix Tower
                <br /> New York, USA
              </p>
              <h2 className="text-[24px] font-bold mt-[2rem] text-black">Follow US</h2>
              <div className="h-[0.5rem] bg-[#fffb03] my-[0.1rem] rounded transform translate-x-2 max-w-[9rem] md1200:mx-[auto]" ></div>
              <div className="py-[1rem] flex gap-[0.5rem] md1200:justify-center">
                <i className="fa-brands fa-instagram text-4xl cursor-pointer  hover:bg-[#fffb00] p-[0.5rem] rounded-full ease-in duration-200"></i>
                <i className="fa-brands fa-facebook text-4xl cursor-pointer hover:bg-[#fffb00] p-[0.5rem] rounded-full ease-in duration-200"></i>
                <i className="fa-brands fa-whatsapp text-4xl cursor-pointer hover:bg-[#fffb00] p-[0.5rem] rounded-full ease-in duration-200"></i>
                <i className="fa-brands fa-linkedin text-4xl cursor-pointer hover:bg-[#fffb00] p-[0.5rem] rounded-full ease-in duration-200"></i>
                <i className="fa-brands fa-twitter text-4xl cursor-pointer hover:bg-[#fffb00] p-[0.5rem] rounded-full ease-in duration-200"></i>
              </div>
            </div>
          </div>

          <form className="flex flex-col px-20 w-[55rem] min450:w-full">
            <h2 className="font-bold text-[32px] uppercase min450:text-[32px] min620:text-[36px] text-center hero-h1 mt-[2rem] mb-[2rem]">
              Leave us your question
            </h2>
            <label className="text-[2rem] text-black font-medium ">
              Full name
            </label>
            <div className="h-[0.5rem] bg-[#fffb03] rounded mb-3 "></div>
            <input
              className="text-[14px] px-8 py-4 mb-10 w-full border-solid border-gray-400 rounded-lg"
              placeholder="Full name"
              type="text"></input>
            <label className="text-[2rem] text-black font-medium ">Email</label>
            <div className="h-[0.5rem] bg-[#fffb03] rounded mb-3 "></div>
            <input
              className="text-[14px] px-8 py-4 mb-10 w-full  border-solid border-gray-400 rounded-lg"
              placeholder="youremail@gmail.com"
              type="email"></input>
            <label className="text-[2rem] text-black font-medium ">Class</label>
            <div className="h-[0.5rem] bg-[#fffb03] rounded mb-3 "></div>
            <select
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border-solid border-gray-400 
        rounded-lg mb-8">
              <option className="rounded-full">Select Class</option>
              <option>Basketball</option>
              <option>Body Building</option>
              <option>Boxing</option>
              <option>Cycling</option>
              <option>Fitness</option>
              <option>Katate</option>
              <option>Meditation</option>
              <option>Running</option>
              <option>Workout</option>
              <option>Yoga</option>
              <option>More options</option>
            </select>

            <label className="text-[2rem] text-black font-medium ">
              Comment
            </label>
            <div className="h-[0.5rem] bg-[#fffb03] rounded mb-3 "></div>
            <textarea
              placeholder="Comment"
              className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border-solid border-gray-400 outline-none mb-8"></textarea>
            <button
              type="submit"
              className="text-[15px] uppercase font-bold mt-2 text-white bg-[#323232] w-[15rem] h-[5rem] hover:bg-[#fffb03] hover:text-black duration-500 ease mx-auto">
              Submit Now
            </button>
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d405.1957316312289!2d-85.78656098908971!3d35.66306664207057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sUSA%20GYM!5e0!3m2!1spt-BR!2sbr!4v1686249493731!5m2!1spt-BR!2sbr"
        width="100%"
        height="350"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  );
};

export default Contact;
