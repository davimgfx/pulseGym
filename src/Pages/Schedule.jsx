import React, { useEffect, useState } from "react";
import { ScheduleInfo, StarterBanner } from "../components";

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    const today = new Date().getDay();
    const days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    setSelectedDay(days[today]);
  }, []);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const renderScheduleInfo = () => {
    if (selectedDay === null) {
      return <p>Select one button to view the informations</p>;
    }

    const schedule = ScheduleInfo.find((info) => info.day === selectedDay);

    return (
      <div className="">
        <ul className="mx-[auto] page-padding py-[3rem] grid-cols-1 grid-rows-1 text-center grid border-black border-solid w-[116rem] my-[3rem] md1200:w-[90rem] md1000:mx-[2rem] md1000:w-[auto] rounded-xl">
          {schedule.class.map((className, index) => (
            <li key={index} className="flex justify-center gap-[20rem] border-gray-500 border-solid my-[1rem] md1000:flex-col md1000:text-center md1000:justify-center md1000:w-[full] md1000:mx-auto md1000:gap-[5rem] rounded-xl">
              <div className="flex  flex-col h-[1rem] w-[20rem] ">
                <strong className="text-left text-[16px] md1000:text-center">Class:</strong>
                <p className="text-left text-[16px] md1000:text-center">{className}</p>
              </div>
              <div className="flex flex-col h-[1rem] w-[20rem]">
                <p className="text-[16px] text-left md1000:text-center"><strong>Time:</strong></p>
                <p className="text-[16px] text-left md1000:text-center">{schedule.time[index]}</p>
              </div>
              <div className="flex flex-col h-[5rem] w-[20rem]">
                <p className="text-[16px] text-left md1000:text-center"><strong>Trainer:</strong></p>
                <p className="text-[16px] text-left md1000:text-center">{schedule.trainer[index]}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section>
      <StarterBanner title="Schedule" />
      <div className="my-[5rem] flex justify-center gap-[2rem] flex-wrap align-center mx-[2rem]">
        <button
          type="submit"
          className={`text-[15px] uppercase font-bold mt-2 text-white bg-[#323232] w-[15rem] h-[5rem] hover:bg-[#fffb03] hover:text-black duration-500 ease rounded-full ${
            selectedDay === "monday" ? "select-button" : ""
          }`}
          onClick={() => handleDayClick("monday")}>
          Monday
        </button>
        <button
          type="submit"
          className={`text-[15px] uppercase font-bold mt-2 text-white bg-[#323232] w-[15rem] h-[5rem] hover:bg-[#fffb03] hover:text-black duration-500 ease rounded-full ${
            selectedDay === "tuesday" ? "select-button" : ""
          }`}
          onClick={() => handleDayClick("tuesday")}>
          Tuesday
        </button>
        <button
          type="submit"
          className={`text-[15px] uppercase font-bold mt-2 text-white bg-[#323232] w-[15rem] h-[5rem] hover:bg-[#fffb03] hover:text-black duration-500 ease rounded-full ${
            selectedDay === "wednesday" ? "select-button" : ""
          }`}
          onClick={() => handleDayClick("wednesday")}>
          Wednesday
        </button>
        <button
          type="submit"
          className={`text-[15px] uppercase font-bold mt-2 text-white bg-[#323232] w-[15rem] h-[5rem] hover:bg-[#fffb03] hover:text-black duration-500 ease rounded-full ${
            selectedDay === "thursday" ? "select-button" : ""
          }`}
          onClick={() => handleDayClick("thursday")}>
          Thursday
        </button>
        <button
          type="submit"
          className={`text-[15px] uppercase font-bold mt-2 text-white bg-[#323232] w-[15rem] h-[5rem] hover:bg-[#fffb03] hover:text-black duration-500 ease rounded-full ${
            selectedDay === "friday" ? "select-button" : ""
          }`}
          onClick={() => handleDayClick("friday")}>
          Friday
        </button>
        <button
          type="submit"
          className={`text-[15px] uppercase font-bold mt-2 text-white bg-[#323232] w-[15rem] h-[5rem] hover:bg-[#fffb03] hover:text-black duration-500 ease rounded-full ${
            selectedDay === "saturday" ? "select-button" : ""
          }`}
          onClick={() => handleDayClick("saturday")}>
          Saturday
        </button>
        <button
          type="submit"
          className={`text-[15px] uppercase font-bold mt-2 text-white bg-[#323232] w-[15rem] h-[5rem] hover:bg-[#fffb03] hover:text-black duration-500 ease rounded-full ${
            selectedDay === "sunday" ? "select-button" : ""
          }`}
          onClick={() => handleDayClick("sunday")}>
          Sunday
        </button>
      </div>
      {renderScheduleInfo()}
    </section>
  );
};

export default Schedule;
