import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className="font-bold text-xl text-white z-10 h-[80vh] flex flex-col gap-y-20 items-center justify-center">
      <div className="flex w-full justify-center items-center gap-x-3">
        <hr className="w-1/5 md:w-1/4 h-1 bg-white" />
        <div className=" font-semibold md:font-bold text-xs md:text-sm tracking-wider">
          GAMEWORLD DISTRIBUTORS
        </div>
        <hr className="w-1/5 md:w-1/4 h-1 bg-white" />
      </div>
      <h1 className="font-bold md:text-5xl text-2xl tracking-wider px-3 md:w-1/2 text-center">
        Connecting Players & Games in an Immersive environment.
      </h1>
      <Button title="Become a Member for Free!" />
    </div>
  );
}

export default Hero;
