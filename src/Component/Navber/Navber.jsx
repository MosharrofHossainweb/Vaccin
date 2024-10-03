import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navber = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <>
      <nav className="w-full bg-[#0B153C] p-5">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="relative inline-block group">
              <h2 className="font-bold text-[#FFFFFF] text-[16px] lg:text-[25.5px] font-Monserit">Vaccination.ng</h2>
             {/* Underline div */}
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#17C2EC] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <RiMenu3Fill
              className="text-[#FFFFFF] text-4xl cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          {/* Full Menu - Responsive */}
          <div
            className={`lg:flex lg:items-center lg:gap-10 absolute lg:static bg-[#17C2EC] lg:bg-transparent top-[70px] left-0 w-full lg:w-auto p-5 lg:p-0 z-10 transition-transform duration-300 ease-in-out ${
              show ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            }`}
          >
            <ul className="flex flex-col lg:flex-row gap-5 lg:gap-10">
              <li>
                <Link
                  className="text-white font-Monserit font-normal rounded-md p-2 px-8 hover:font-medium hover:bg-[#1A1F4C] lg:hover:bg-transparent"
                  to={'#'}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-Monserit font-normal rounded-md p-2 px-6 hover:font-medium hover:bg-[#1A1F4C] lg:hover:bg-transparent"
                  to={'#'}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-Monserit font-normal rounded-md p-2 px-6 hover:font-medium hover:bg-[#1A1F4C] lg:hover:bg-transparent"
                  to={'#'}
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-Monserit font-normal rounded-md p-2 px-6 hover:font-medium hover:bg-[#1A1F4C] lg:hover:bg-transparent"
                  to={'#'}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navber;
