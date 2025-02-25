import React from 'react'
import { GiStarShuriken } from 'react-icons/gi'
import Feature from '../ui/Progress'
import ProgressChart from '../ui/ProgressChart'
import Version from '../ui/Version'

const Features = () => {
    return (
        <div className='w-full flex flex-col items-center gap-4 px-[10vw] py-10'>
            <div className='p-2 rounded-full border-[0.5px] border-zinc-200 flex items-center justify-center gap-2 text-center'><GiStarShuriken />Features</div>
            <div className='text-[2.5rem] font-medium text-center leading-none tracking-tighter'>Peak behind the curtain at the source of our platform's transformative power.</div>
            <div className='w-full flex justify-between gap-4'>
                <div className='w-1/2'>
                    <ProgressChart />
                </div>
                <div className='w-1/2'>
                    <Version />
                </div>
            </div>
        </div>
    )
}

export default Features