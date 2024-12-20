import React, { useState } from "react";
import { MdArrowForward, MdArrowBack } from "react-icons/md";

interface RegisterProps {
  onClose: () => void; // Define the type for onClose
}

const Register: React.FC<RegisterProps> = ({ onClose }) => {
  const [step, setStep] = useState(1); // State to track the current step

  return (
    <div className="sm:w-[500px] h-[600px] lg:w-[875px] lg:h-[645px] flex">
      <div className="hidden lg:block basis-1/2 bg-green-500">
        <img src="/signup2.webp" alt="" className="h-full" />
      </div>
      <div className="flex flex-col basis-full lg:basis-1/2 pt-6 pb-8 px-10">
        <div>
          <div className="pt-6 pb-8">
            <h4 className="text-[24px] leading-[120%] lg:leading-[130%] font-bold">
              {step === 1 ? "Create a New Account" : "Complete Your Profile"}
            </h4>
            <p className="font-normal text-gray-700 pt-2 text-[16px] leading-[24px]">
              {step === 1
                ? "Already have an account? Sign in"
                : "Provide additional details to complete your registration."}
            </p>
          </div>
          <div className="border border-gray-200 px-6 py-4">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex items-center text-green-700 gap-1 text-sm font-normal"
              >
                <MdArrowBack />
                Go Back
              </button>
            )}
            <form className="flex flex-col gap-4 font-normal text-sm py-4">
              {step === 1 && (
                <>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border border-gray-300 rounded-md p-2"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border border-gray-300 rounded-md p-2"
                  />
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
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="border border-gray-300 rounded-md p-2"
                  />
                </>
              )}
              {step === 2 && (
                <>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="border border-gray-300 rounded-md p-2"
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    className="border border-gray-300 rounded-md p-2"
                  />

                  <p></p>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="terms" className="mt-1 custom-checkbox" />
                    <label htmlFor="terms" className="text-gray-600 text-sm">
                      Creating an account means you agree with our default
                      notification settings which you may change in your profile
                      once your account is created.
                    </label>
                  </div>
                </>
              )}
              <div className="flex justify-end items-center">
                {step < 2 && (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="flex items-center text-green-700 gap-1 text-sm"
                  >
                    Continue <MdArrowForward />
                  </button>
                )}
                {step === 2 && (
                  <button
                    type="submit"
                    className="bg-green-500 text-white py-2 px-4 rounded-md"
                  >
                    Submit
                  </button>
                )}
              </div>
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

export default Register;
