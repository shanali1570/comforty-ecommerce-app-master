import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Logo = ({className}:{className?:string}) => {
    return (
        <Link href={'/'}>

            <h2 className={twMerge('relative flex items-center gap-3 group text-2xl text-accent hover:text-darkOrange font-bold  hoverEffect overflow-hidden', className)}>
            <Image 
                width={400}
                height={400}
                alt='Logo'
                src={"/Logo.png"}
                className='w-[26.67px] h-[23.33px]'
        />
            Comforty
            <span className='absolute w-full left-0 bottom-0 h-px bg-darkOrange -translate-x-[105%] group-hover:translate-x-0 hoverEffect'/>
            </h2>
        </Link>
    )
}

export default Logo