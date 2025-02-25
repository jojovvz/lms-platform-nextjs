import React from 'react'
import Button from '../Button'
import Link from 'next/link'
import { getCurrentUser } from '@/app/actions/findUser';

const Header = async () => {
    const user = await getCurrentUser();
    return (
        <div className='w-full flex justify-between items-center px-[10vw] py-4'>
            <div className='flex items-center gap-16'>
                <div className='text-lightblue font-semibold text-3xl tracking-tighter flex items-center gap-1 lowercase'>COURSEENE</div>
                <div className='flex items-center gap-3'>
                    <Link href="/"><div>Explore</div></Link>
                    <Link href="/pricing"><div>Pricing</div></Link>
                    <Link href="/support"><div>Support</div></Link>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <Link href={user ? '/dashboard' : '/login'}>
                    <Button
                        content={user ? "Dashboard" : "Login"}
                        secondary
                    />
                </Link>
                <Link href="/register">
                    <Button
                        content="Start Free Trial"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Header