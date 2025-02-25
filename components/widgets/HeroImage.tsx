import Image from 'next/image'
import React from 'react'
import HeroImageUrl from '@/public/HeroImage.png'

const HeroImage = () => {
  return (
    <Image
        alt=''
        src={HeroImageUrl}
        width={900}
        height={500}
        className='flex items-center justify-center rounded-xl'
     />
  )
}

export default HeroImage