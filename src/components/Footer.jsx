import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className=" pr-10 pl-20 flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      <div >
        <img src={assets.logo} className="mb-5 w-32 " alt="" />
        <p className="w-full md:w-2/3 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est totam
          ullam magni nemo ut provident doloremque. Voluptas libero sapiente
          rem?
        </p>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>+91 8886853154</li>
          <li>katikalasaikiranhere@gmail.com</li>
        </ul>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ dontdo.com -All rights are not mine, so waste of doing </p>
      </div>
    </div>
  );
};

export default Footer;
