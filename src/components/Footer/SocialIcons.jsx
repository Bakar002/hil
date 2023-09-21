import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-black">
      {Icons.map((icon) => (
        <a
        key={icon.name}
        href={icon.link} // Set the href attribute to the desired URL
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-[#EEEDED] mx-1.5 text-xl hover:text-gray-100 hover:bg-[#D71313]
        duration-300 "
        >
          <ion-icon name={icon.name}></ion-icon>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
