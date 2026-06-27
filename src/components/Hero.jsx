import hero from "../assets/EV car image.jpeg";

function Hero() {
  return (
    <section className="bg-[#04142b] text-white">
      <div className="max-w-7xl mx-auto px-10 py-16 flex flex-col lg:flex-row items-center">

        {/* Left Side */}
        <div className="flex-1">
          <h1 className="text-6xl font-bold leading-tight">
            Power Your{" "}
            <span className="text-green-400">Journey.</span>
            <br />
            Charge the{" "}
            <span className="text-green-400">Future.</span>
          </h1>

          <p className="mt-6 text-gray-300 text-xl">
            Find, book and charge at the best EV charging
            stations near you.
          </p>

         
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <img
            src={hero}
            alt="EV Hero"
            className="w-full rounded-3xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;