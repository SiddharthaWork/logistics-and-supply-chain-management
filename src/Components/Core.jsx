import React from 'react'
const Core = () => {
    return (
      <div className='bg-white py-4 px-4 md:px-6 flex flex-col lg:flex-row justify-center items-center w-full min-h-[400px] relative overflow-hidden'>
        <div className='absolute inset-0 left-8'>
            <img src="image.png" alt="" className='' />

        </div>
          <div className='w-full lg:w-1/2 h-full flex flex-col gap-4 justify-center px-4 md:pt-28 lg:px-24 mb-6 lg:mb-44'>
              <h2 className='text-2xl md:text-4xl font-medium text-center md:text-left'>
                  Why Choose WebStudio Nepal?
              </h2>
              <p className='text-sm md:text-base lg:text-lg w-full h-full mx-auto tracking-wider md:text-justify text-center  md:leading-0 lg:leading-8'>
                  With extensive experience in logistics and supply chain software, we deliver tailored solutions that fit your unique needs. Leveraging cutting-edge technologies like IoT, AI, and machine learning, we create innovative, secure systems to optimize your operations. Our end-to-end support ensures seamless development, deployment, and ongoing assistance for smooth performance.
              </p>
          </div>
  
          <div className='w-full md:w-1/2 h-full px-4 md:px-12 mb-6 md:mb-2'>
             <img src="glow.svg" alt="glow" className='w-full h-auto' />
          </div>
      </div>
    )
  }

export default Core