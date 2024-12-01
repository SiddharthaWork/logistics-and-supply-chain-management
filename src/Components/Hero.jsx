import React from 'react';
import Image from 'next/image';
const Hero = () => {
  return (
    <div className="bg-[#0F0B1E] relative w-full h-auto pt-12 pb-16 md:h-[25rem]">
      <div className="absolute left-[30rem]  overflow-hidden overflow-x-hidden overflow-y-hidden">
        <img
          className="w-full pt-8 object-cover overflow-hidden opacity-80 mix-blend-overlay"
          src="background.svg"
          alt="background image"
        />
      </div>

      <div className='max-w-5xl mx-auto px-4 space-y-2'>

        <div className='text-white font-bold text-2xl md:text-4xl lg:text-5xl pb-4 text-center uppercase '>
          <h1>
          Logistics & Supply Chain<br className='hidden md:block' />
          Management<br className='hidden lg:block' />
          </h1>
        </div>

        <div className='text-white text-sm md:text-base lg:text-lg text-center max-w-5xl mx-auto tracking-wide '>
          <p className='leading-9'>
          WebStudio Nepal develops advanced logistics and supply chain software to help businesses streamline operations, reduce costs, and improve customer satisfaction. With expertise in inventory management, real-time tracking, and delivery optimization, we offer tailored solutions to enhance supply chain efficiency and ensure timely delivery.
          </p>
        </div>

        <div className='flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center items-center pt-6'>
          <button className='px-6 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 z-30 relative overflow-hidden group'>
          <span className="relative z-20">Quick Enquiry</span>
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-in-out z-10"></div>
          </button>
          <button className='px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-[#0F0B1E] transition duration-75 ease-in-out z-40'>
            Call Us: +977 9703958747
          </button>
        </div>

      </div>
    </div>
  );
}

export default Hero;
