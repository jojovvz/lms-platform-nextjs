import Header from '@/components/layouts/Header'
import Login from '@/components/ui/Login'
import React from 'react'

export const dynamic = 'force-dynamic';

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between">
      <Header />
      <Login />
    </div>
  )
}

export default Page;
