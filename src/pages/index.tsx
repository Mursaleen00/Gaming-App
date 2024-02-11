import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-hero bg-cover h-screen relative top-0 -z-10">
      <div className="bg-black absolute opacity-40 w-full h-screen -z-10" />
      <Navbar />
      <Hero />
    </div>
  );
}
