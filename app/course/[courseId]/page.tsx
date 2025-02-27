'use client'

import { getTransactionDetails } from '@/app/actions/transaction';
import React from 'react'

const Page = ({
  params,
}: {
  params: Promise<{ courseId: string }>
}) => {
  const [details, setDetails] = React.useState(null);
  
  React.useEffect(() => {
    const fetchData = async () => {
      const { courseId } = await params;
      const response = await getTransactionDetails(courseId);
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

export default Page