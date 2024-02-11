import Image from "next/image";
import React from "react";

function Banner() {
  const bannerImg = [
    {
      img: "/image/stram.svg",
      w: 166,
      h: 40,
    },
    {
      img: "/image/microsoft.svg",
      w: 187,
      h: 40,
    },
    {
      img: "/image/xbox.svg",
      w: 132,
      h: 40,
    },

    {
      img: "/image/play.svg",
      w: 78,
      h: 40,
    },
    {
      img: "/image/playstation.svg",
      w: 264,
      h: 40,
    },
  ];
  return (
    <div className="w-full flex gap-10 items-center flex-wrap justify-center py-6">
      {bannerImg.map((items: any, index: number) => {
        return (
          <Image
            alt="logo"
            src={items.img}
            key={index}
            width={items.w}
            height={items.h}
          />
        );
      })}
    </div>
  );
}

export default Banner;
