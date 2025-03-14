import React from 'react'
import Button from '../Button'
import Link from 'next/link'
import { getCurrentUser } from '@/app/actions/findUser';
import { FaBars } from 'react-icons/fa';
import MobileMenu from '../ui/MobileMenu';

const Header = async () => {
    const user = await getCurrentUser();
    return (
        <div className='w-full flex justify-between items-center md:px-[10vw] px-[5vw] py-4 bg-transparent'>
            <div className='flex items-center gap-16'>
                <div className='text-lightblue font-semibold text-3xl tracking-tighter flex items-center gap-1 lowercase'>COURSEENE</div>
                <div className='hidden md:flex items-center gap-3'>
                    <Link href="/"><div>Explore</div></Link>
                    <Link href="/pricing"><div>Pricing</div></Link>
                    <Link href="/support"><div>Support</div></Link>
                </div>
            </div>
            <div className='hidden md:flex items-center gap-2'>
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
            <div className='md:hidden block'>
                <MobileMenu
                    trigger={<FaBars
                        size={24}
                        className='cursor-pointer'
                     />}
                    user={user as any}
                 />
            </div>
        </div>
    )
}

export default Header