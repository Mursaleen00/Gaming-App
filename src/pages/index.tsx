import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <>
      <div className="bg-hero bg-cover h-screen relative">
        <div className="bg-hero-main absolute w-full h-screen z-0" />
        <div className="z-10 absolute w-full">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="bg-theme-bg">
        <Banner />
        <WhatWeDo />
      </div>
    </>
  );
}
