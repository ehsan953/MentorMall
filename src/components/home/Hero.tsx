import { useState } from "react";
import Button from "../../components/common/Button";
import Register from "../signup/register";
import Modal from "../common/modal/Modal";
export default function Hero() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsSignupModalOpen(false);
  };
  return (
    <div className="bg-cover bg-center h-[87vh] bg-[url('/Hero.webp')] relative">
      <div className="bg-black h-full bg-opacity-20">
      {/* to-[#045578] */}
        <div className="flex items-center justify-center h-full bg-gradient-to-b from-transparent to-[#03511e] from-[65%] to-[115%] opacity-97">
          <div className="w-[80%] md:w-[60%] lg:w-[50%]">
            <div className="text-center text-white">
              {/* <h1 className="text-4xl md:text-5xl font-bold">Unlock Your Potential With Expert Mentorship.</h1> */}
              <h1 className="text-[36px] md:text-[48px] font-bold leading-[45px] md:leading-[56px]">
                Connect with Mentors and Professionals to Achieve Your
                Aspirations.
              </h1>
              <p className="mt-4 text-xl">
                Connect with industry-leading mentors or hire top professionals
                to accelerate your career and personal growth. Whether you're
                looking to learn, teach, or collaborate, we're here to guide you
                every step of the way.
              </p>
              <Button customClass="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600" onClick={() => setIsSignupModalOpen(true)}>
                Get Started
              </Button>
              {isSignupModalOpen && (
                <Modal
                  isModalOpen={isSignupModalOpen}
                  onModalClose={handleModalClose}
                >
                  <Register onClose={handleModalClose} />
                </Modal>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
