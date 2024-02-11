import Image from "next/image";
import React from "react";

function WhatWeDo() {
  const cardData = [
    {
      img: "/image/img1.png",
      tag: "Video Game Suppliers",
      des: "List of carefully selected, verified, high quality suppliers in different regions worldwide.",
      color: "#61FFDA",
    },
    {
      img: "/image/img2.png",
      tag: "Wholesale Marketplace",
      des: "Find wholesale prices and suppliers of video games, consoles, and game accessories.",
      color: "#7B61FF",
    },
    {
      img: "/image/img3.jfif",
      tag: "Future Releases",
      des: "Release dates and information on upcoming or recently released video games.",
      color: "#FF626B",
    },
  ];
  return (
    <div className="font-bold text-xl text-white flex flex-col gap-y-10 items-center justify-center pt-28 pb-10">
      <div className="flex w-full justify-center items-center gap-x-3">
        <hr className="w-1/5 md:w-1/4 h-1 bg-theme-orange" />
        <div className=" font-semibold md:font-bold text-theme-orange text-xs md:text-sm tracking-wider">
          What We Do
        </div>
        <hr className="w-1/5 md:w-1/4 h-1 bg-theme-orange" />
      </div>
      <h1 className="font-bold md:text-3xl text-xl tracking-wider px-3 md:w-1/2 text-center">
        Meeting the needs of players across the world
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {cardData.map((items: any, index: number) => {
          return (
            <div
              key={index}
              className={`bg-[#20202E] h-[364px] w-[298px] border-t-4 border-[${items.color}] shadow-md flex flex-col gap-y-10`}
            >
              <div className="w-full flex justify-center pt-6 h-[155px]">
                <Image
                  alt={items.tag}
                  src={items.img}
                  width={250}
                  height={155}
                />
              </div>
              <div className="bg-[#57576A] w-[80%] py-1 px-3 text-base">
                {items.tag}
              </div>
              <div className="text-sm px-3">{items.des}</div>
            </div>
          );
        })}
        <div className="hidden bg-[#61FFDA] bg-[#7B61FF] bg-[#FF626B]" />
      </div>
    </div>
  );
}

export default WhatWeDo;
