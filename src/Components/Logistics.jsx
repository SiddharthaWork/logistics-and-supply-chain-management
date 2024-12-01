import React from 'react'

const Logistics = () => {
  const logisticsServices = [
    {
      icon: "icon.svg",
      title: "Comprehensive Supply Chain Management",
      description: "Centralized platform for procurement, inventory, and distribution with real-time monitoring and seamless supplier-consumer integration."
    },
    {
      icon: "icon1.svg",
      title: "Inventory Management Solutions",
      description: "Advanced tools track inventory, forecast demand, and manage stock across locations. Features include automated restocking alerts, inventory optimization, and ERP integration for real-time updates."
    },
    {
      icon: "icon22.svg",
      title: "Order & Delivery Management Systems",
      description: "Streamline order processing from initiation to fulfillment with real-time delivery tracking and route optimization. Integrate multiple carriers and couriers for cost-effective shipping solutions."
    },
    {
      icon: "icon23.svg",
      title: "Warehouse Management Software (WMS)",
      description: "Efficient warehouse management covers inventory, picking, packing, and shipping. It integrates RFID and barcode systems for accurate stock tracking, with automated order picking and real-time updates for smooth operations."
    },
    {
      icon: "icon24.svg",
      title: "Fleet Management & Optimization",
      description: "Real-time vehicle and driver tracking optimizes routes and delivery schedules. Fuel and maintenance tracking helps reduce costs, while advanced analytics forecast maintenance needs and enhance fleet performance."
    },
    {
      icon: "icon25.svg",
      title: "Supply Chain Analytics & Reporting",
      description: "Gain data-driven insights to monitor performance and spot inefficiencies. Use customizable dashboards with real-time KPIs and metrics, along with predictive analytics for demand forecasting and supply chain optimization."
    },
  ];

  return (
    <div className='bg-white py-4 md:py-8 px-2 sm:px-4 md:px-8 lg:px-24 h-fit mb-12'>
      <div className='flex flex-col justify-center w-full mb-8 md:mb-12'>
        <h1 className='text-black text-2xl md:text-4xl font-bold text-center'>
          Logistics & Supply Chain Services
        </h1>
      </div>
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8'>
        {logisticsServices.map((service, index) => (
          <div key={index} className='w-full bg-white rounded-lg'>
            <div className='flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-3 sm:p-4'>
              <img 
                src={service.icon} 
                alt="icon" 
                className='w-12 sm:w-16 md:w-20 lg:w-[10rem] object-contain flex-shrink-0'
              />
              <div className='flex-1 min-w-0'> 
                <h2 className='text-black text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2'>
                  {service.title}
                </h2>
                <p className='text-sm sm:text-base md:text-lg break-words'>
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}




export default Logistics