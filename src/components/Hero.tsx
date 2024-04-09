import plane from "../assets/images/plane.png";

const Hero = () => {
  return (
    <div className="hero z-[1] w-full h-[100vh] grid place-items-center bg-[#141b2b] relative">
      <div className="flex md:flex-row flex-col items-center w-full md:px-[200px] px-8 justify-between md:gap-0">
        <div className="flex flex-col gap-3 left-animation w-full">
          <span className="text-blue-400 text-[28px] font-medium">
            Welcome To Our Website
          </span>
          <span className="text-white font-medium md:text-[60px] text-[45px]">
            Luxury Experience <br /> With Our Services
          </span>
          <span className="text-white leading-7 max-w-[500px] text-justify">
            Sint laboris sunt velit et nostrud eu sit nostrud cupidatat minim
            proident. Aliquip sint sit aute deserunt ipsum ad do eiusmod quis
            nisi eu eiusmod sit fugiat. Laborum consequat pariatur aliqua velit
            enim. Velit enim adipisicing pariatur irure aute sit aliqua. Labore
            incididunt tempor non Lorem consequat ex.
          </span>
          <div className="flex items-center gap-7 mt-5 mb-3">
            <button className="bg-blue-400 rounded-full font-semibold px-6 py-3 text-gray-900">
              Book Flight
            </button>
            <button className="rounded-full border-[2px] border-blue-400 px-6 py-3 font-semibold text-white">
              Contact Us
            </button>
          </div>
        </div>
        <img
          src={plane}
          alt=""
          className="md:w-[53%] w-full  right-animation"
        />
      </div>
    </div>
  );
};

export default Hero;
