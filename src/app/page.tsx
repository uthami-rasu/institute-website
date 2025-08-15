import "./css/home.css";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import StatsSection from "./components/SectionTwo";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
    </>
  );
}
