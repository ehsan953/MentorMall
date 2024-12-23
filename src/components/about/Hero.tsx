import React from "react";
import Button from "../../components/common/Button";
export default function Hero() {
  return (
    <div className="bg-cover bg-center h-[80vh] bg-[url('/about-us.crdownload')] relative">
      <div className="bg-black h-full bg-opacity-40">
        <div className="flex items-center px-6 md:px-12 xl:px-16 h-full bg-gradient-to-b from-transparent to-[#14532D] from-[65%] to-[115%] opacity-97">
          <div className=" md:w-[80%] lg:w-[60%] xl:w-[50%]">
            <div className=" text-white">
              {/* <h1 className="text-4xl md:text-5xl font-bold">Unlock Your Potential With Expert Mentorship.</h1> */}
              <h1 className="font-lora text-[36px] md:text-[48px] font-bold leading-[45px] md:leading-[56px]">
              Empower Your Journey with Expert Mentorship and Professional Support.
              </h1>
              <p className="mt-4 text-xl">
                
                Join MentorMall today and become a part of a thriving community where
            learning, teaching, and professional growth come together. Whether
            you're a student eager to learn, a mentor ready to teach, or a client
            in need of expertise, we provide the tools and opportunities to help
            you succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
