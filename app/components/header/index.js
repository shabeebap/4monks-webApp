import React from "react";
import Bike from "../../../public/logo-bike.png";
import Ham from "../../../public/hamburger.png";
import { headerItems, headerSubItems } from "../constants";
const Header = () => {
  return (
    <header className="bg-[#000000] opacity-[80%] py-4 px-12 flex items-center justify-between">
      <div className="flex items-center">
        <img src={Bike.src} alt="Logo" className="h-5 w-auto" />

        <nav className="hidden lg:flex justify-between pl-[60px]">
          <ul className="flex space-x-12 text-[14px]">
            {headerItems.map((item) => (
              <div key={item.id} className="flex">
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    {item.label}
                  </a>
                </li>
                {item.flag === "new" && (
                  <div className="h-[14px] w-[28px] bg-yellow-300 ml-1 rounded-[1px]  flex justify-center items-center">
                    <p className="text-[10px]">new</p>
                  </div>
                )}
              </div>
            ))}
          </ul>
        </nav>
      </div>

      <div className="hidden lg:flex items-center justify-end">
        <ul className="flex space-x-12 text-[14px]">
          {headerSubItems.map((item) => (
            <li key={item.id}>
              <a href="#" className="text-white hover:text-gray-300">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex lg:hidden items-center justify-end">
        <img src={Ham.src} alt="Logo" className="h-5 w-auto" />
      </div>
    </header>
  );
};

export default Header;
