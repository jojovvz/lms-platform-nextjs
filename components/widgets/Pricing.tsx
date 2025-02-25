import { pricingPlans } from '@/data/pricing'
import React from 'react'
import { GiStarShuriken } from 'react-icons/gi'
import PricingComp from '../ui/Pricing'

const Pricing = () => {
    return (
        <div className='w-full flex overflow-x-hidden  justify-between px-[9vw]'>
            <div className='w-[12vw] -z-10 h-[30vw] bg-darkblue blur-[12vw] rounded-3xl -rotate-45'></div>
            <div className='w-[250vw] flex flex-col items-center gap-5'>
                <div className='flex flex-col items-center gap-2'>
                    <div className='p-2 w-[8vw] rounded-full border-[0.5px] border-zinc-200 flex items-center justify-center gap-2 text-center'><GiStarShuriken />Pricing</div>
                    <div className='text-[4rem] font-semibold text-white'>Our Pricing Plans</div>
                </div>
                <div className='grid grid-cols-3 gap-6'>
                    {
                        pricingPlans.map((item, index) => (
                            <PricingComp
                                content={item.content}
                                description={item.description}
                                price={item.price}
                                title={item.title}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
            <div className='w-[12vw] -z-10 h-[30vw] bg-darkblue blur-[12vw] rounded-3xl rotate-45'></div>
        </div>
    )
}

export default Pricing