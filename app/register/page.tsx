import Header from '@/components/layouts/Header'
import Register from '@/components/ui/Register'
import React from 'react'

const page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between">
      <Header />
      <Register />
    </div>
  )
}

export default page