import Header from '@/components/layouts/Header'
import Login from '@/components/ui/Login'
import React from 'react'

const page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between">
      <Header />
      <Login />
    </div>
  )
}

export default page