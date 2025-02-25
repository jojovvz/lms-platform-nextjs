import Header from '@/components/layouts/Header'
import Pricing from '@/components/widgets/Pricing'
import React from 'react'

const page = () => {
    return (
        <div className="w-full flex flex-col items-center justify-between">
            <Header />
            <Pricing />
        </div>
    )
}

export default page