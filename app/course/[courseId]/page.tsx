'use client'

import { getTransactionDetails } from '@/app/actions/transaction';
import React from 'react'

const page = () => {
  const [details, setDetails] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await getTransactionDetails();
      const data = await response.json();
      setDetails(data);
    }
    fetchData();
  }, []);
  console.log("Details: ", details);
  return (
    <div>page</div>
  )
}

export default page