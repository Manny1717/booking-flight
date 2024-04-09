import { CheckmarkCircleOutline } from "react-ionicons";
import mask from "../assets/images/mask.png";

const About = () => {
  return (
    <div className="w-full md:px-[200px] px-8 flex md:flex-row flex-col items-center justify-between py-10 md:gap-0 gap-16">
      <div
        className="md:w-[500px] md:h-[500px] w-[350px] h-[350px] bg-no-repeat bg-cover relative plane-mask"
        style={{ backgroundImage: `url(${mask})` }}
      />
      <div className="flex flex-col md:w-[48%] w-full md:px-0 px-8">
        <span className="text-[15px] text-blue-600 font-semibold">
          ABOUT US
        </span>
        <span className="text-[30px] font-medium text-gray-700 mt-1">
          We Are Here To Bring You All The Comfort And Pleasure
        </span>
        <p className="text-gray-600 max-w-[650px] leading-7 mt-5">
          Nostrud ea dolor ullamco ullamco nulla. Commodo sint incididunt qui
          aute laboris commodo anim duis. Non ullamco mollit non labore.
        </p>
        <div className="flex flex-col gap-3 mt-5">
          <div className="flex items-center gap-3">
            <CheckmarkCircleOutline color="#60a5fa" />
            <span>
              Reprehenderit magna voluptate est incididunt in id adipisicing
              reprehenderit.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckmarkCircleOutline color="#60a5fa" />
            <span>
              Reprehenderit magna voluptate est incididunt in id adipisicing
              reprehenderit.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckmarkCircleOutline color="#60a5fa" />
            <span>
              Reprehenderit magna voluptate est incididunt in id adipisicing
              reprehenderit.
            </span>
          </div>
        </div>
        <button className="bg-blue-400 px-6 py-3 mt-12 text-white font-semibold rounded-full w-[200px] shadow-md">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default About;
