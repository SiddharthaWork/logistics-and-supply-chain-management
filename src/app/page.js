import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
  import Footer from "@/Components/Footer";
import Core from "@/Components/Core";
import Logistics from "@/Components/Logistics";
import Features from "@/Components/Features";
import Benfits from "@/Components/Benfits";
import Industires from "@/Components/Industires";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Core />
      <Logistics />
      <Features />
      <Benfits  />
      <Industires />
      <Footer />
    </div>
  );
}
