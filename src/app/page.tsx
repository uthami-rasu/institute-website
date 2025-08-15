import "./css/home.css";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import StatsSection from "./components/SectionTwo";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
    </div>
  );
}
