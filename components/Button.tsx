'use client'

import React from 'react'

interface ButtonProps {
    content: React.ReactElement | string,
    secondary?: boolean,
    onClick?: () => void,
    className?: string,
    type?: "submit" | "reset",
    disabled?: boolean,
    disabledText?: string
}

const Button = ({ content, secondary, onClick, className, type, disabled, disabledText }: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            type={type}
            onClick={onClick}
            className={`${disabled ? 'bg-darkblue/50' : ''} ${secondary ? 'bg-white text-darkblue dark:border-none border-[0.5px] border-zinc-600] shadow-sm shadow-white' : 'bg-darkblue text-white shadow-sm shadow-darkblue'} font-medium px-5 py-2 rounded-lg ${className}`}
        >
            {disabled ? disabledText : content}
        </button>
    )
}

export default Button