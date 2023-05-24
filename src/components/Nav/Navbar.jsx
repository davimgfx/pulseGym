import { logo } from "../../assets";

const Navbar = () => {
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="logo" className="w-[150px] h-[75px]"/>
            <h1 className="color-white text-[122px]">Cu</h1>
        </nav>
      );
}

export default Navbar;