import React from 'react'

const Industires = () => {
    return (
        <div className='bg-[#3c3a47] py-8 md:py-12 px-4 md:px-24'>
            <div className='text-white text-center mb-12 md:mb-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>Industries We Serve</h1>
            </div>

            <div className='w-full h-auto md:h-[80rem] xl:h-[50rem] flex flex-col gap-16 lg:gap-32 xl:gap-0 md:space-y-0'>
                {/* 1st */}
                <div className='flex justify-center md:justify-end gap-2 md:relative md:right-[4rem]'>
                    <div className='flex flex-col md:flex-row justify-center items-center md:-space-x-[3rem] max-w-[48rem] gap-6 md:gap-4'>
                        <img src="/bg3.svg" alt="industries" className='w-[18rem] md:w-[20rem] h-[13rem] md:h-[15rem] z-20' />
                        <div className='flex flex-col gap-3 md:gap-2 text-center md:text-left md:pl-6 px-4 md:px-0'>
                            <h1 className='text-white text-3xl md:text-4xl font-bold'>E-Commerce</h1>
                            <p className='text-white text-base md:text-base max-w-[330px] md:max-w-none'>Manage orders, inventory, and deliveries with ease to provide a seamless customer experience.</p>
                        </div>
                    </div>
                </div>

                {/* 2nd */}
                <div className='flex justify-center md:justify-start md:relative md:top-[-3rem] lg:top-[-6rem] md:left-[2rem]'>
                    <div className='flex flex-col md:flex-row justify-center items-center max-w-[48rem] gap-6 md:gap-4 md:-space-x-[3rem]'>
                        <div className='flex flex-col gap-3 md:gap-2 text-center md:text-left px-4 md:px-0'>
                            <h1 className='text-white text-3xl md:text-4xl font-bold'>Manufacturing</h1>
                            <p className='text-white text-base md:text-base max-w-[330px] md:max-w-none'>Optimize the movement of raw materials and finished products across multiple facilities. Optimize the movement of raw materials and finished products across multiple facilities.</p>
                        </div>
                        <img src="/icon2.svg" alt="industries" className='order-first md:order-none w-[18rem] md:w-[20rem] h-[13rem] md:h-[15rem] z-0' />
                    </div>
                </div>

                <div className='md:relative md:top-[-6rem] lg:top-[-12rem] flex flex-col gap-16 lg:gap-32 xl:gap-0'>
                    {/* 3rd */}
                    <div className='flex justify-center md:justify-end gap-2 md:relative md:right-[4rem]'>
                        <div className='flex flex-col md:flex-row justify-center items-center md:-space-x-[3rem] max-w-[48rem] gap-6'>
                            <img src="/icon4.svg" alt="industries" className='w-[18rem] md:w-[20rem] h-[13rem] md:h-[15rem] z-20' />
                            <div className='flex flex-col gap-3 md:gap-2 text-center md:text-left px-4 md:px-0'>
                                <h1 className='text-white text-3xl md:text-4xl font-bold'>Retail</h1>
                                <p className='text-white text-base md:text-base max-w-[330px] md:max-w-none'>Ensure timely inventory replenishment and faster order fulfillment for retail operations.</p>
                            </div>
                        </div>
                    </div>

                    {/* 4th */}
                    <div className='flex justify-center md:justify-start md:relative md:top-[-3rem] lg:top-[-6rem] md:left-[2rem]'>
                        <div className='flex flex-col md:flex-row justify-center items-center max-w-[48rem] gap-6 md:gap-4 md:-space-x-[3rem]'>
                            <div className='flex flex-col gap-3 md:gap-2 text-center md:text-left px-4 md:px-0'>
                                <h1 className='text-white text-3xl md:text-4xl font-bold'>Food & Beverage</h1>
                                <p className='text-white text-base md:text-base max-w-[330px] md:max-w-none'>Manage perishable goods, track temperatures, and optimize delivery routes to maintain freshness.</p>
                            </div>
                            <img src="/icon3.svg" alt="industries" className='order-first md:order-none w-[18rem] md:w-[20rem] h-[13rem] md:h-[15rem] z-10' />
                        </div>
                    </div>
                </div>

                {/* 5th */}
                <div className='flex justify-center md:justify-end gap-2 md:relative md:top-[-12rem] lg:top-[-25rem] md:right-[4rem]'>
                    <div className='flex flex-col md:flex-row justify-center items-center md:-space-x-[3rem] max-w-[48rem] gap-6'>
                        <img src="/icon5.svg" alt="industries" className='w-[18rem] md:w-[20rem] h-[13rem] md:h-[15rem] z-0' />
                        <div className='flex flex-col gap-3 md:gap-2 text-center md:text-left px-4 md:px-0'>
                            <h1 className='text-white text-3xl md:text-4xl font-bold'>Pharmaceuticals</h1>
                            <p className='text-white text-base md:text-base max-w-[330px] md:max-w-none'>Track critical supplies and manage compliance with temperature and security regulations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Industires