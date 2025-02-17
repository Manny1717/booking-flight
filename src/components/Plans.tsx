import Plan1 from "../assets/images/plan1.jpg";
import Plan2 from "../assets/images/plan2.jpg";
import Plan3 from "../assets/images/plan3.jpg";
import { AirplaneOutline, Star } from "react-ionicons";

const Plans = () => {
  const plansList = [
    {
      title: "Private Charter Jet",
      image: Plan1,
      code: "Charter B1732",
      price: "270",
    },
    {
      title: "Medical Chopper",
      image: Plan2,
      code: "Charter B1732",
      price: "270",
    },
    {
      title: "Private Plane",
      image: Plan3,
      code: "Charter B1732",
      price: "270",
    },
  ];

  return (
    <div className="flex flex-col w-full pt-5 pb-20 md:px-[200px] px-8 gap-16 justify-center items-center">
      <div className="flex flex-col w-full items-center">
        <span className="text-blue-500 font-semibold">Our Plans</span>
        <span className="text-slate-700 font-semibold text-3xl mt-1">
          Flights For Everyone
        </span>
        <p className="text-center max-w-[400px] mt-4">
          Deserunt ut fugiat pariatur commodo laboris officia ut aliquip Lorem
          occaecat aute duis laboris qui.
        </p>
      </div>

      <div className="flex w-full items-center justify-center md:flex-row flex-col gap-8">
        {plansList.map((plan) => {
          return (
            <div
              key={plan.title}
              className="bg-white p-[10px] rounded-[10px]"
              style={{ boxShadow: "0 0 40px 5px rgb(0 0 0 /5%)" }}
            >
              <img
                src={plan.image}
                className="w-[400px] h-[270px] rounded-[10px]"
                alt={plan.title}
              />
              <div className="flex w-full items-center justify-between mt-4 px-4">
                <span className="text-[18px] font-semibold text-slate-800">
                  {plan.title}
                </span>
                <div className="flex items-center gap-[2px]">
                  <Star color={"#60a5fa"} />
                  <Star color={"#60a5fa"} />
                  <Star color={"#60a5fa"} />
                  <Star color={"#60a5fa"} />
                  <Star color={"#60a5fa"} />
                </div>
              </div>
              <div className="text-gray-400 text-[15px] mt-[2px] font-medium px-4">
                {plan.code}
              </div>
              <div className="px-4 pt-4 leading-7 text-slate-700 max-w-[400px]">
                Deserunt ut fugiat pariatur commodo laboris officia ut aliquip
                Lorem occaecat aute duis laboris qui.
              </div>
              <div className="text-slate-800 mt-10 font-medium px-4">
                <span className="text-blue-500 font-semibold text-[25px]">
                  ${plan.price}
                </span>
                {""} / Hour
              </div>
              <div className="w-[95%] mt-5 mx-auto border border-dashed border-slate-300" />
              <div className="w-full px-4">
                <button className="mt-5 mb-3 flex gap-3 bg-blue-400 px-5 py-2 text-white font-semibold rounded-full">
                  <AirplaneOutline color={"#fff"} />
                  Book Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
