import React from "react";

const BannerWithScroll = () => {
  return (
    <div className=" flex justify-between items-center py-2 px-8 h-28 ml-8 mr-4 ">
      <div className="relative w-1/4 h-full">
        <div className="absolute inset-0 transform  -skew-x-12 flex items-center">
          <div className="text-2xl text-slate-700 font-bold pl-10">
            BLACK FRIDAY SALE!
          </div>
        </div>
      </div>

      <div className="relative flex-1 h-full bg-slate-800 flex items-center border-dotted border-2 border-white mx-4  -skew-x-12 ">
        <div className="relative w-full overflow-hidden -skew-x-12">
          <div className="animate-scroll  text-white text-3xl font-semibold whitespace-nowrap px-4">
            PAY ONLY FOR{" "}
            <span className="font-bold">YOUR LOVING FASHIONS!!</span>
          </div>
        </div>

        <button className="bg-white border border-black text-black px-5 py-2 font-semibold absolute right-4 top-1/2 transform -translate-y-1/2">
          Shop Now
        </button>
      </div>
    </div>
  );
};

const style = `
@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-scroll {
  display: inline-block;
  animation: scroll 15s linear infinite;
}
`;

const App = () => {
  return (
    <>
      <style>{style}</style>
      <BannerWithScroll />
    </>
  );
};

export default App;
