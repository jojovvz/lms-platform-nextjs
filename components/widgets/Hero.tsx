import React from 'react'
import Button from '../Button'

const Hero = () => {
  return (
    <div className='w-full flex justify-between px-[9vw]'>
      <div className='w-[12vw] -z-10 h-[30vw] bg-darkblue blur-[12vw] rounded-3xl -rotate-45'></div>
      <div className='w-[60vw] flex flex-col items-center gap-4'>
        <div></div>
        <div className='text-[5rem] tracking-tighter leading-none text-center font-semibold'>Advanced Learning Platform</div>
        <div className='text-center text-lightblue'>Discover a seamless and engaging way to learn, teach, and grow. Our platform brings everything you need to elevate your skills and knowledge in one place.</div>
        <div className='w-[40vw] flex justify-center items-center gap-2'>
          <Button
            content="Start With Free Trial"
          />
          <Button
            content="Request Demo"
            secondary
          />
        </div>
      </div>
      <div className='w-[12vw] -z-10 h-[30vw] bg-darkblue blur-[12vw] rounded-3xl rotate-45'></div>
    </div>
  )
}

export default Hero