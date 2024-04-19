import React from "react";
import { footerLinks } from "../constants";
const FooterLinks = () => {
  return (
    <div className="lg:flex justify-between">
      <div className="lg:w-[30%] w-[100%] pb-10 lg:pb-0">
        <p className="text-white leading-6">
          Kasra No 351, 80 Feet Road
          <br /> Vinayak City
          <br /> Guru Marg, Sirsi Road
          <br /> Neemera, Bindayaka,
          <br /> Jaipur, Rajasthan, 302041
          <br /> CIN: U29100RJ2017PTC059452
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[90px]">
        {footerLinks.map((item, index) => (
          <div key={index} className="">
            <h6 className="text-[#E4E4E4] opacity-50">{item.title}</h6>
            {item.links.map((link) => (
              <p className="text-white pt-[10px]">{link.label}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
