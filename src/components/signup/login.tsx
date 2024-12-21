import React, { useState } from "react";
// import { MdArrowForward, MdArrowBack } from "react-icons/md";

interface RegisterProps {
  onClose: () => void; // Define the type for onClose
}

const Login: React.FC<RegisterProps> = ({ onClose }) => {

  return (
    <div className="sm:w-[500px] h-[600px] lg:w-[875px] lg:h-[645px] flex">
      <div className="hidden lg:block basis-1/2 bg-green-500">
        <img src="/signup2.webp" alt="" className="h-full" />
      </div>
      <div className="flex flex-col basis-full lg:basis-1/2 pt-6 pb-8 px-10">
        <div>
          <div className="pt-2 pb-8">
            <div className="flex justify-center">
                <img src="/MentorMall-logo-transparent.png" alt="" className="w-[180px]" />
            </div>
            <h4 className="text-[24px] leading-[120%] lg:leading-[130%] font-bold">
                Sign in to your account
            </h4>
            <p className="font-normal text-gray-700 pt-2 text-[16px] leading-[24px]">
                Don’t have an account? <a href="" className="underline">Join here</a>
            </p>
          </div>
          <div className="border border-gray-200 px-6 py-4">
            
            <form className="flex flex-col gap-4 font-normal text-sm py-4">
             
                <>
                
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-md p-2"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-300 rounded-md p-2"
                  />
                </>
             
              <div className="flex justify-end items-center text-green-500">
                  Forgot Password?
              </div>
              <button
                    type="submit"
                    className="bg-green-500 text-white py-2 px-4 rounded-md"
                  >
                    Login
                  </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-end">
          <p className="text-sm text-gray-700 font-normal">
            By joining, you agree to the MentorMall{" "}
            <a href="/" className="underline">
              Terms of Service
            </a>{" "}
            and to occasionally receive emails from us. Please read our{" "}
            <a href="/" className="underline">
              Privacy Policy
            </a>{" "}
            to learn how we use your personal data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
