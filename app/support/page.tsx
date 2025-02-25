import Header from '@/components/layouts/Header'
import Support from '@/components/widgets/Support'
import React from 'react'

const page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between">
      <Header />
      <Support />
    </div>
  )
}

export default page