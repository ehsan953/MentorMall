import React from 'react'
import Button from '../../components/common/Button';
export default function Hero() {
  return (
    <div className="bg-cover bg-center h-screen bg-[url('/Hero.webp')] relative">
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#045578] from-[65%] to-[115%] opacity-97'>

        </div>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
            <div className='w-[80%] md:w-[60%] lg:w-[50%]'>
                <div className="text-center text-white">
                {/* <h1 className="text-4xl md:text-5xl font-bold">Unlock Your Potential With Expert Mentorship.</h1> */}
                <h1 className="text-[36px] md:text-[48px] font-bold leading-[45px] md:leading-[56px]">Connect with Mentors and Professionals to Achieve Your Aspirations.</h1>
                <p className="mt-4 text-xl">Connect with industry-leading mentors or hire top professionals to accelerate your career and personal growth. Whether you're looking to learn, teach, or collaborate, we're here to guide you every step of the way.</p>
                <Button customClass="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg">Get Started</Button>
            </div>
        </div>
    </div>
    </div>
  )
}
