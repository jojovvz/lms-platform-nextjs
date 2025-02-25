import Header from '@/components/layouts/Header'
import Register from '@/components/ui/Register'
import Verify from '@/components/ui/Verify'
import React from 'react'

export const dynamic = 'force-dynamic';

const page = async ({
  params,
}: {
  params: Promise<{ token: string }>
}) => {
  const { token } = await params;
  return (
    <div className="w-full flex flex-col items-center justify-between">
      <Header />
      <Verify token={token} />
    </div>
  )
}

export default page