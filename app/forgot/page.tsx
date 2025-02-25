import Header from '@/components/layouts/Header';
import Forgot from '@/components/ui/Forgot';
import React from 'react';

export const dynamic = "force-dynamic";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between">
      <Header />
      <Forgot />
    </div>
  );
};

export default Page;
