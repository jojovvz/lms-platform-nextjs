import React from 'react'
import Button from '../Button'

const Hero = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-between items-center md:px-[9vw] px-[2vw]'>
      {/* Left decorative blur element for large screens */}
      <div className='hidden md:block w-[12vw] -z-10 h-[30vw] bg-darkblue blur-[12vw] rounded-3xl -rotate-45'></div>
      
      <div className='md:w-[60vw] w-full flex flex-col items-center gap-4'>
        <div></div>
        <div className='md:text-[5rem] text-[3.5rem] tracking-tighter leading-none text-center font-semibold'>
          Advanced Learning Platform
        </div>
        <div className='text-center text-lightblue'>
          Discover a seamless and engaging way to learn, teach, and grow. Our platform brings everything you need to elevate your skills and knowledge in one place.
        </div>
        <div className='md:w-[40vw] w-full flex md:flex-row flex-col justify-center items-center md:gap-2 gap-4'>
          <Button content="Start With Free Trial" />
          <Button content="Request Demo" secondary />
        </div>
      </div>
      
      {/* Right decorative blur element for large screens */}
      <div className='hidden md:block w-[12vw] -z-10 h-[30vw] bg-darkblue blur-[12vw] rounded-3xl rotate-45'></div>
    </div>
  )
}

export default Hero
