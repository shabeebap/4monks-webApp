import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { socialIcons } from "../constants";
const CopyRight = () => {
  return (
    <div className="bg-black border-t-[1px] border-[#434343]">
      <div className=" lg:flex flex-wrap items-center justify-between py-[30px] px-[40px]">
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <p className="text-sm text-gray-300 opacity-50">
            &copy; 2023 Batt:RE. All rights reserved.
          </p>
        </div>
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <a href="#" className="text-sm mx-2 text-gray-300 opacity-50">
            Privacy Policy
          </a>
          <span className="text-sm mx-2 opacity-50">|</span>
          <a href="#" className="text-sm mx-2 text-gray-300 opacity-50">
            Terms and Conditions
          </a>
        </div>
        <div className="justify-center lg:justify-end lg:text-right  flex">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="text-gray-300 hover:text-gray-400 mx-2 opacity-50"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
