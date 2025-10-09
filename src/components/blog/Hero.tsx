import React from "react";
import Button from "../../components/common/Button";
export default function Hero() {
  return (
    <div className="bg-cover bg-center h-[80vh] bg-[url('/blog-bg.jpg')] relative">
      <div className="bg-black h-full bg-opacity-50">
        <div className="flex items-center justify-center h-full bg-gradient-to-b from-transparent to-[#14532D] from-[65%] to-[115%] opacity-97">
          <div className="w-[80%] md:w-[60%] lg:w-[50%]">
            <div className="text-center text-white">
              {/* <h1 className="text-4xl md:text-5xl font-bold">Unlock Your Potential With Expert Mentorship.</h1> */}
              <h1 className="text-[36px] md:text-[48px] font-bold leading-[45px] md:leading-[56px]">
              Explore Insights & Inspiration.
              </h1>
              <p className="mt-4 text-xl">
              Discover insights, tips, and stories to inspire your growth journey. Explore expert advice, success stories, and the latest updates.
              </p>
              <Button customClass="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                Start exploring now!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
