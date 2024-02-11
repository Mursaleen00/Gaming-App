import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="h-20 flex items-center justify-around">
      <div className="h-[80px] bg-black opacity-30 w-full -z-10 absolute" />
      <div className="flex gap-x-2 text-lg items-center">
        <Image alt="Logo" src={"/icon/logo.svg"} width={32} height={32} />
        <h1 className="text-white font-pacifico">Medley</h1>
      </div>
      <div className="hidden md:flex gap-x-10 items-center">
        <ul className="flex gap-x-10 text-white font-normal text-sm font-pacifico">
          <li className="text-theme-second-color cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Steps</li>
          <li className="cursor-pointer">Testimonial</li>
        </ul>
        <input
          type="text"
          className="rounded-full outline-none text-white bg-transparent border-2 px-3"
        />
      </div>
    </div>
  );
}

export default Navbar;
