import React from "react";
import Newsletter from "../Newsletter";

const Informed = () => {
  return (
    <div className="border-b-[1px] border-[#434343]">
      <div className="bg-black lg:flex justify-between">
        <h1 className="font-semibold mb-4 text-white lg:text-[50px] text-[24px] lg:w-[50%] w-[100%] text-center lg:text-left">
          Stay Informed
          <br /> About Battre
        </h1>
        <div className="lg:w-[50%] flex items-center justify-center pt-[40px] lg:pt-0">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Informed;
