import { getTransactionDetails } from '@/app/actions/transaction'
import React from 'react'

const Success = async () => {
  const webhookData = await getTransactionDetails();
  return (
    <div>{JSON.stringify(webhookData)}</div>
  )
}

export default Success