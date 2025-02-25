import React from 'react'

interface ProgressProps {
    title: string,
    description: string,
    content: React.ReactElement
}

const Feature: React.FC<ProgressProps> = ({
    title,
    description,
    content
}) => {
  return (
    <div className='w-full flex flex-col gap-4 bg-muted p-2 rounded-xl'>
        <div className='flex flex-col gap-2'>
            <div className='text-xl font-semibold'>{title}</div>
            <div className='text-zinc-500'>{description}</div>
        </div>
        <div>{content}</div>
    </div>
  )
}

export default Feature