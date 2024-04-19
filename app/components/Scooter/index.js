"use client";

import React, { useState } from "react";
import styles from "./Scooter.module.scss";
import Bike from "../../../public/bike1.png";
import location from "../../../public/location.png";
import { cities } from "../constants";
const Scooter = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsDropdownOpen(false);
  };

  return (
    <div className="p-[30px]">
      <div className="flex justify-between border-b-[1px] border-[#c9c9c9]">
        <h6 className="text-[25px]">Storie</h6>
        <div className="flex items-center pb-[30px]">
          <div className="h-[32px] w-[32px] rounded-full bg-[#A0CABC]"></div>
          <p className="text-[14px] font-normal ml-[10px]">Sparkling Green</p>
        </div>
      </div>
      <div className={styles.scooter_image}>
        <img src={Bike.src} alt="Logo" />
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-[10px] opacity-90">Booking Amount</p>
          <h6 className="text-[40px] font-semibold">₹2,500/-</h6>
        </div>
        <div className="flex items-center">
          <div>
            <p className="text-[10px] opacity-90">*Ex-showroom price in</p>
            <p className="text-[10px] opacity-30">(incl. FAME II Subsidy )</p>
            <div>
              <h6 className="text-[22px] mt-[4px]">₹ 1,17,357/-</h6>
            </div>
          </div>
          <div className="flex items-center ml-[20px] relative">
            <p className="text-[10px] opacity-90">
              {selectedCity || "New Delhi"}
            </p>
            <img
              src={location.src}
              alt="Logo"
              className="ml-[10px] cursor-pointer"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md mt-2 rounded">
                <ul className="py-1">
                  {cities.map((city, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleCitySelect(city)}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scooter;
