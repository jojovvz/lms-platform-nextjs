import Header from '@/components/layouts/Header';
import Onboarding from '@/components/ui/Onboarding';
import React from 'react'

export const dynamic = 'force-dynamic';

const page = async ({
    params,
  }: {
    params: Promise<{ id: string }>
  }) => {
    const { id } = await params;
  return (
    <div className="w-full flex flex-col items-center justify-between">
        <Header />
        <Onboarding id={id} />
    </div>
  )
}

export default page