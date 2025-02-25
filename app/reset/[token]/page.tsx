import Header from '@/components/layouts/Header'
import ResetPassword from '@/components/ui/Reset'
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
      <ResetPassword token={token} />
    </div>
  )
}

export default page