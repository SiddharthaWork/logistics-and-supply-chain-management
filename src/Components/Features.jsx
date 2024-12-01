import React from 'react'

const Features = () => {
  const featuresData = [
  
{
      number: "01",
      title: "Real-Time Tracking",
      description: "Track shipments, vehicles, and deliveries with GPS and IoT integration."
    },
    {
      number: "02",
      title: "Automated Workflow",
      description: "Streamline order processing, inventory, and shipping to reduce errors and increase efficiency."
    },
    {
      number: "03",
      title: "Advanced Analytics",
      description: "Access data-driven insights with customizable reports and visualizations."
    },
    {
      number: "04",
      title: "Multi-Channel Integration ",
      description: "Seamless connections with ERP, CRM, suppliers, customers, and partners."
    },
    {
      number: "05",
      title: "Scalability",
      description: "Flexible solutions that grow with your business, from small to large enterprises."
    },
    {
      number: "06",
      title: "Cloud-Based",
      description: "Secure, remote access and data sharing on a cloud platform."
    },
  ];

  return (
    <div className='bg-black/90 min-h-auto w-full py-12 relative overflow-hidden'>
        <div className='absolute inset-0 w-full h-full'>
        <img src="bg.svg" alt="bg" className='w-full h-full object-cover' />
        </div>

        <div className='w-full mb-12 flex justify-center px-4 relative'>
            <h1 className='text-white text-4xl font-bold text-center'>Key Features of Our Solutions</h1>
        </div>

        <div className='max-w-[90rem] mx-auto px-4 flex flex-col gap-8'>
          {featuresData.map((feature, index) => (
            <div key={index} className='relative'>
              <div className='flex flex-col md:flex-row text-white items-start md:items-center gap-4 md:gap-[15rem] pb-8'>
                <h1 className='text-4xl lg:text-5xl font-bold w-[3rem] hover:text-red-600'>{feature.number}</h1>
                <h1 className='text-2xl lg:text-3xl font-bold sm:w-[24rem] w-full'>{feature.title}</h1>
                <div className='w-full lg:w-[30rem] sm:w-[24rem] h-full  lg:h-[4.5rem] flex items-center'>
                  <p className='text-lg leading-relaxed'>{feature.description}</p>
                </div>
              </div>
              <div className='border-b border-[#96999F] w-full absolute bottom-0'></div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Features