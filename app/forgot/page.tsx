import Header from '@/components/layouts/Header'
import Forgot from '@/components/ui/Forgot'
import React from 'react'

const page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between">
        <Header />
      <Forgot />
    </div>
  )
}

export default page