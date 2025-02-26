import { getTransactionDetails } from '@/app/actions/transaction'
import React from 'react'

const page = async () => {
  const webhookData = await getTransactionDetails();
  return (
    <div>{JSON.stringify(webhookData)}</div>
  )
}

export default page