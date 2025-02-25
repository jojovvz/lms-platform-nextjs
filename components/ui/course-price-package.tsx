'use client';

import React from 'react';

interface CoursePricingPackageProps {
    title: string;
    description: string;
    selected?: boolean,
    onClick?: (value: string) => void
}

const CoursePricingPackage = ({ title, description, onClick, selected }: CoursePricingPackageProps) => {

    return (
        <div
            className={`
                flex flex-col gap-3 p-4 rounded-xl border-[2px] cursor-pointer
                ${selected ? 'border-lightblue' : 'border-gray-300'}
            `}
            onClick={() => onClick && onClick(title)}
        >
            <div className='flex flex-col gap-0'>
                <div className='text-lg font-semibold'>{title}</div>
                <div className='text-xs'>{description}</div>
            </div>
        </div>
    );
};

export default CoursePricingPackage;
