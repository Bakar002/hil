import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    
    <footer className="text-white relative">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-transparent py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
  <img
    src="/assets/logo.webp"
    alt="Logo"
    className="h-[80px] w-auto object-contain"
  />
</span>
        </h1>
    
      </div>
      <ItemsContainer />


      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-[#FFC436] text-sm pb-8 bg-[#1A5D1A]"
      >
        <span>© All Rights Reserved, Hilwa Dairy, Safa Group 2023</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
