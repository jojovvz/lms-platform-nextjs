 import { supportData } from '@/data/support'
import React from 'react'
import SupportCard from '../ui/SupportCard'

const Support = () => {
    return (
        <div className='w-full overflow-x-hidden flex justify-between md:px-[9vw] px-[1vw]'>
            <div className='w-[12vw] -z-10 h-[30vw] bg-darkblue blur-[12vw] rounded-3xl -rotate-45'></div>
            <div className='w-[200vw]  flex flex-col items-center gap-5'>
                <div className='flex flex-col items-center gap-2'>
                    <div className='md:text-[4rem] text-[2rem] font-semibold text-center'>Help & Support</div>
                    <div className='text-center text-sm md:text-md'>Our Help & Support team is here to assist you with any questions or issues you may encounter. Whether you need technical guidance, account assistance, or answers to general queries, we provide prompt and reliable support through email, chat, and a comprehensive knowledge base. Your satisfaction is our priority!</div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    supportData.map((data, index) => (
                        <SupportCard 
                            key={index}
                            icon={data.icon}
                            title={data.title}
                            description={data.description}
                        />
                    ))
                }
                </div>
            </div>
            <div className='w-[12vw] -z-10 h-[30vw] bg-darkblue blur-[12vw] rounded-3xl rotate-45'></div>
        </div>
    )
}

export default Support