import { cardList } from "./CardList.js";
import "./CardList-style.css"
const AboutCards = () => {
  return (
    <>
      {cardList.map((card, id) => (
        <div key={id} className={`flex flex-col cursor-pointer bg-[#37383A] justify-center py-6 px-10 text-center items-center mt-12 rounded-[32px] shadow-2xl min-h-[340px] w-full text-white md1000:min-h-[260px]  ${id === 0 ? "card-item-div-0" :
        id === 1 ? "card-item-div-1" : 
        id === 2 ?"card-item-div-2" : "card-item-div-3" }`}>
          <img src={card.img} alt="box_img" className="w-[75px] mb-4 min450:w-[50px]"/>
          <p className=" text-[24px] font-bold uppercase mb-7 min450:text-[20px]">{card.title}</p>
          <p className="text-[15px] font-medium leading-2 w-full min450:text-[15px] min450:p-[1rem]">
            {card.description}
          </p>
        </div>
      ))}
    </>
  );
};

export default AboutCards;