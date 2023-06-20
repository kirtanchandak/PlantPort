import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav
        className="flex flex-col md:flex-row bg-yellow-200 
      text-2xl justify-between fixed w-screen font-poppins"
      >
        <div className="flex items-center">
          <Link href="/" className="pl-2 py-4 mr-auto md:mr-0 font-[600]">
            Plants Port🪴
          </Link>
          <div className="md:hidden mr-2 cursor-pointer" onClick={toggle}>
            <FaHamburger />
          </div>
        </div>
        <div className="link-content hidden md:flex mt-4">
          <ul className="flex" id="nav">
            <li>
              <Link href="/login" className="px-6">
                Login
              </Link>
            </li>
            <li>
              <Link href="/" className="px-6 ">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/cart" className="px-6">
                Cart 🛒 {getItemsCount()}
              </Link>
            </li>
          </ul>
        </div>
        {/*for mobile*/}
        <div
          className={
            isOpen
              ? "grid grid-rows-3 text-center items-center w-full"
              : "hidden"
          }
          onClick={toggle}
        >
          <Link href="/login" className="px-6">
            Login
          </Link>
          <Link href="/" className="px-6">
            Shop
          </Link>
          <Link href="/cart" className="px-6">
            Cart 🛒
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
