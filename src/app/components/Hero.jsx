export default function Hero() {
  return (
    <section className="bg-[#E6F5F3] relative overflow-hidden">
      <div className="container mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center">
        {/* Left Side */}
        <div className="md:w-1/2">
          <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Never stop learning
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Master Your Skills <br />
            With Expert Training <br />
            At{" "}
            <span className="text-teal-500 font-poppins">
              FreshTech Creators Institute
            </span>
          </h1>
          <p className="text-gray-600 mb-6">
            Skilline is an interesting platform that will teach you in a more
            interactive way.
          </p>

          {/* Search Bar */}
          <div className="flex bg-white rounded-full shadow-md p-2 max-w-md">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow px-4 outline-none rounded-l-full"
            />
            <button className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-500 transition">
              🔍
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
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
