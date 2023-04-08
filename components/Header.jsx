import { FaHamburger } from "react-icons/fa";

const Navbar = ({ isOpen, toggle }) => {
  return (
    <nav
      className="flex flex-col md:flex-row bg-yellow-200 
      text-2xl justify-between fixed w-screen font-poppins"
    >
      <div className="flex items-center">
        <a href="#" className="pl-2 py-4 mr-auto md:mr-0 font-[600]">
          Plants Port🪴
        </a>
        <div className="md:hidden mr-2 cursor-pointer" onClick={toggle}>
          <FaHamburger />
        </div>
      </div>
      <div className="link-content hidden md:flex mt-4">
        <ul className="flex" id="nav">
          <li>
            <a href="#" className="px-6">
              Home
            </a>
          </li>
          <li>
            <a href="shop" className="px-6 ">
              Shop
            </a>
          </li>
          <li>
            <a href="aboutus" className="px-6">
              About Us
            </a>
          </li>
        </ul>
      </div>
      {/*for mobile*/}
      <div
        className={
          isOpen ? "grid grid-rows-3 text-center items-center w-full" : "hidden"
        }
        onClick={toggle}
      >
        <a href="#" className="px-6">
          Home
        </a>
        <a href="shop" className="px-6">
          Shop
        </a>
        <a href="aboutus" className="px-6">
          About Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
