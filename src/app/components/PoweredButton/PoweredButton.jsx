import React from "react";
import Image from "next/image";

import "./PoweredButton.css";

const PoweredButton = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="b relative mx-auto h-16 w-64 flex justify-center items-center">
        <div className="i h-16 w-64  items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
        <a href='https://www.rpmspeedcode.com' target="_blank" className="text-center text-white z-10 pointer-events-none">
          Powered By {' '}
        </a>
          <div className="flex flex-col justify-center items-center text-white">
          <Image
            src="/rpm/rpm_deg_white.svg"
            alt="Rpm code logo"
            className="pl-2"
            width={90}
            height={50}
          />
          </div>
        <span className="absolute flex h-6 w-6 top-0 right-0 transform translate-x-2.5 -translate-y-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="absolute inline-flex rounded-full h-6 w-6 bg-teal-400"></span>
        </span>
      </div>
    </div>
  );
};

export default PoweredButton;
