import logo from "../../assets/logo/logo.png";
import { navLinks } from "./navlinks";
const Navbar = () => {
  return (
    <nav className="bg-transparent flex py-8 justify-between items-center navbar fixed top-0 left-0 right-0 w-full z-50">
      <img src={logo} alt="logo" className="w-[150px] h-[75px] mt-4" />
      <ul className="flex gap-9 text-white text-[16px] font-medium xl:none">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="cursor-pointer hover:text-[#fff336] ease-in duration-200">
            <a href="#">{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex items-center">
        <i
          className={
            "fa-solid fa-user hover:text-[#fff336] cursor-pointer text-white text-4xl px-4 mr-5 ease-in duration-200"
          }></i>
        <div className="border-solid border-2  p-2 rounded-md min620:hidden flex items-center cursor-pointer">
          <i
            className={
              "fa-solid fa-magnifying-glass bg-[#fff336] text-black text-2xl py-3 px-4 rounded-md"
            }></i>
          <h3 className="text-white text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider">
            find your class
          </h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
