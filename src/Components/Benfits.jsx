import React from 'react'

const benefitsData = [
  {
    id: 1,
    title: "Increase Efficiency",
    description: "Streamline processes across procurement, inventory, and order management to reduce manual effort and time."
  },
  {
    id: 2,
    title: "Enhanced Customer Experience:",
    description: "Provide a seamless and personalized experience with user-friendly applications and secure online services."
  },
  {
    id: 3,
    title: "Data-Driven Insights: ",
    description: "Leverage data analytics to make better financial decisions and manage risk effectively."
  },
  {
    id: 4,
    title: "Cost Savings:",
    description: "Cloud-based and scalable solutions reduce overhead costs and allow for more efficient resource allocation."
  },
  {
    id: 5,
    title: "24/7 Availability:",
    description: "Customers can access banking services anytime, anywhere, through secure mobile and online platforms."
  },
];

const Benfits = () => {
  return (
    <div className='relative w-full min-h-screen overflow-hidden'>
    {/* Left section with title and background */}
    <div className='hidden lg:block absolute top-0 left-0 w-full sm:w-auto'>
      <h1 className='absolute top-16 sm:top-36 left-4 sm:left-24 
                    text-2xl sm:text-3xl font-bold text-white tracking-wider
                    px-4 sm:px-0'>
        Benefits of Supply<br/> Chain Management
      </h1>
      <img 
        src="/benefits.svg" 
        alt="benefits"
        className='w-full h-auto object-cover sm:object-contain' 
      />
    </div>
    {/* Left section with title and background */}
    <div className='lg:hidden absolute -top-0 left-0 w-[20rem] sm:w-auto'>
      <h1 className='absolute top-16 sm:top-36 left-4 sm:left-24 
                    text-xl sm:text-3xl font-bold text-white tracking-wider
                    px-2 sm:px-0'>
        Benefits of Supply<br/> Chain Management
      </h1>
      <img 
        src="/benefits.svg" 
        alt="benefits"
        className='w-full h-auto object-cover sm:object-contain' 
      />
    </div>

    {/* Right background image */}
    <div className='absolute hidden lg:block top-[10rem] right-0 sm:right-12 z-10'>
      <img 
        src="/bg2.svg" 
        alt="benefits" 
        className='w-[300px] md:w-[400px] lg:w-[500px] h-auto sm:h-[600px] object-contain' 
      />
    </div>

    {/* Main content */}
    <div className='bg-white w-full min-h-screen py-10 sm:py-20 z-20 mt-[24rem] md:mt-[12rem] lg:mt-0'>
      <div className='grid grid-cols-1 gap-4 sm:gap-2 
                    relative w-full 
                    px-4 sm:px-8 lg:px-0
                    sm:left-[5%] md:left-[10%] lg:left-[52%]
                    max-w-[95%] sm:max-w-2xl 
                    mx-auto lg:mx-0 
                    z-20'>
        {benefitsData.map((benefit) => (
          <div key={benefit.id} 
               className='w-full sm:w-[90%] lg:w-[45rem] 
                        mx-auto h-auto 
                        flex flex-col sm:flex-row 
                        rounded-lg shadow-md bg-white
                        transition-all duration-300'>
            <div className='flex w-full sm:w-24 
                          h-16 sm:h-full 
                          border-b sm:border-b-0 sm:border-r 
                          justify-center items-center
                          flex-shrink-0'>
              <h2 className='text-3xl sm:text-4xl'>{benefit.id}</h2>
            </div>
            <div className='flex flex-col 
                          py-4 px-4 sm:pl-4 sm:pr-8 lg:pr-12 
                          space-y-2'>
              <h2 className='text-xl sm:text-2xl font-bold'>{benefit.title}</h2>
              <p className='text-sm sm:text-base'>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Benfits


