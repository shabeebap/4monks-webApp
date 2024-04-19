import React from "react";
import ColorPicker from "../BikeColorPicker";

const ChooseColor = () => {
  return (
    <div className="bg-[#F4F4F4] p-[30px]">
      <div className="text-[12px] flex justify-between">
        <p>01&nbsp; Select model</p>
        <p>02&nbsp; Select COLOR</p>
        <p className="opacity-30">
          03&nbsp; Your Details and preferred location
        </p>
      </div>
      <div className="pt-[40px]">
        <h6 className="text-[30px]">
          Choose
          <br />a colour
        </h6>
      </div>
      <div>
        <ColorPicker />
      </div>
      <div className="w-[100%] bg-black p-6 flex justify-between items-center mb-1">
        <p className="text-[12px] font-semibold text-white uppercase">
          Confirm
        </p>
        <svg
          width="38"
          height="8"
          viewBox="0 0 38 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.1174 4.35355C37.3127 4.15829 37.3127 3.84171 37.1174 3.64645L33.9354 0.464466C33.7402 0.269204 33.4236 0.269204 33.2283 0.464466C33.0331 0.659728 33.0331 0.976311 33.2283 1.17157L36.0568 4L33.2283 6.82843C33.0331 7.02369 33.0331 7.34027 33.2283 7.53553C33.4236 7.7308 33.7402 7.7308 33.9354 7.53553L37.1174 4.35355ZM0 4.5H36.7639V3.5H0L0 4.5Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default ChooseColor;
