import React from "react";

function NewlyReleasedGames() {
  return (
    <div className="bg-release bg-cover h-screen relative">
      <div className="bg-top absolute w-full h-[200px] z-0" />
      <div className="bg-top absolute w-full bottom-0 h-[200px] z-0 rotate-180" />

      <div className="font-bold text-xl text-white flex flex-col gap-y-10 items-center justify-center pt-28 z-10 absolute w-full">
        <h1 className="font-bold md:text-3xl text-xl tracking-wider px-3 md:w-1/2 text-center">
          Newly Released Games
        </h1>
        <div className="flex flex-wrap gap-6 justify-center"></div>
      </div>
    </div>
  );
}

export default NewlyReleasedGames;
