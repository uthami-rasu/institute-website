import Image from "next/image";

import HeroBgImg from "@/assets/images/hero-bg.png";
import { Search } from "@mui/icons-material";

export default function HeroSection() {
  return (
    <section
      className="h-screen relative overflow-hidden"
      // style={{
      //   backgroundImage: `url(${HeroBgImg.src})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "100% 100%", // width fills, height auto
      //   backgroundPosition: "bottom", // aligns bottom
      // }}
    >
      <div>
        <Image
          alt="hero section bg"
          src={HeroBgImg}
          className="absolute inset-0 h-[99%]"
        />
      </div>
      <div className="relative top-20 font-[poppins] container  mx-auto pl-5 lg:px-24 py-16 flex flex-col  md:flex-row items-center">
        {/* Left Side */}
        <div className="md:w-1/2">
          <span className="inline-block  bg-white  text-teal-700 px-3 py-2 rounded-lg text-sm  font-medium mb-7">
            Never stop learning
          </span>
          <h1 className="text-2xl w-full lg:text-3xl font-poppins font-bold text-gray-900 leading-11 mb-4">
            Master Your Skills <br />
            With Expert Training <br />
            At{" "}
            <span className="font-poppins">FreshTech Creators Institute</span>
          </h1>
          <p className="text-gray-600 mb-6 w-10/12 lg:w-7/12">
            Skilline is an interesting platform that will teach you in a more
            interactive way.
          </p>

          {/* Search Bar */}
          <div className="flex bg-white rounded-xl shadow-md p-2 max-w-md">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow px-4 outline-none rounded-l-full"
            />
            <button className="bg-yellow-400 px-2 py-2 rounded-xl  hover:bg-yellow-500 transition">
              <Search sx={{ color: "#fff", fontSize: 20, fontWeight: 600 }} />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center mt-5 mb-8 md:mb-0">
          <img
            src="/images/hero-image.png"
            alt="Students"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
