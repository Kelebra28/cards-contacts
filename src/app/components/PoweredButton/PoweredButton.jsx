import React from "react";
import Image from "next/image";

import "./PoweredButton.css";

const PoweredButton = ({ negative }) => {
  return (
    <a href='https://www.rpmspeedcode.com' target="_blank" className="flex items-center justify-center">
      <div className="b relative mx-auto h-16 w-64 flex justify-center items-center">
        <div className="i h-16 w-64  items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
        <div className={`text-center ${negative? 'text-white': 'text-black'} z-10 pointer-events-none`}>
          Powered By {' '}
        </div>
          <div className="flex flex-col justify-center items-center text-white">
          <Image
            src={ negative ? `/rpm/rpm_deg_white.svg`  : '/rpm/rpm_deg_black.svg' }
            alt="Rpm code logo"
            className="pl-2"
            width={90}
            height={50}
          />
          </div>
        <span className="absolute flex h-3 w-3 top-6 right-10 transform translate-x-2.5 -translate-y-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FB2B6D] opacity-75"></span>
          <span className="absolute inline-flex rounded-full h-3 w-3 bg-[#FB2B6D]"></span>
        </span>
      </div>
    </a>
  );
};

export default PoweredButton;
