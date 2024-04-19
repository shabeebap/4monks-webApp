"use client";

import React, { useState } from "react";
import Bike1 from "../../../public/bike1.png";
import Bike2 from "../../../public/bike2.png";
import styles from "./Picker.module.scss";
import { colors } from "../constants";

const ColorPicker = () => {
  // State to store selected color
  const [selectedColor, setSelectedColor] = useState("#A0CABB");

  // Function to handle click on color round
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="bg-white p-14 my-[60px]">
      <div className="relative flex justify-between">
        <div className="flex justify-between items-center">
          <svg
            width="34"
            height="32"
            viewBox="0 0 34 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3865 23.8L5.45312 16.3333L6.97604 14.9L13.3865 20.9333L26.9865 8.1333L28.5094 9.56663L13.3865 23.8Z"
              fill="black"
            />
          </svg>
          <div className="ml-[20px]">
            <h6 className="text-[25px]">Storie</h6>
            <p className="text-[14px]">Sparkling Green</p>
          </div>
        </div>
        {/* Conditionally render bike image based on selected color */}
        <div className="">
          <img
            src={
              selectedColor === "#A0CABB"
                ? Bike1.src
                : selectedColor === "#707485"
                ? Bike2.src
                : null
            }
            alt="Bike"
            className={`w-[130px] h-[99px]`}
          />
        </div>
      </div>
      {/* Map over colors array to render color rounds */}
      <div className="flex justify-between items-center mt-10 w-[100%]">
        {colors.map((item, index) => (
          <div
            style={{
              backgroundColor: item.color,
            }}
            key={index}
            onClick={() => handleColorClick(item.color)}
            className={`rounded-full w-[32px] h-[32px] cursor-pointer border-[1px] border-[#e4e4e4] hover:border-[3px] hover:border-[#0B0B0B] ${
              selectedColor === item.color ? "border-3 border-black" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
