
import React from 'react'
import Container from './Container'
import { navBarList } from '@/constants'
import Link from 'next/link'
import { getSession } from '@/lib/manageSession'

const NavBar = async() => {
  const session = await getSession();

  

  return (
    <div >
        <Container className='h-10 '>
            
            <div className='h-full gap-3 md:gap-7 flex items-center justify-end'>
              
                {navBarList?.map((item)=>(
                    <Link key={item.title} href={item.link} className='navBarItem'>
                        {item.title}</Link>
                ))}
                
                
                {session ? ( <Link href={"/dashboard"} className="navBarItem"  >
                            Dashboard </Link>) : 
                           ( <Link href={"/signin"} className="navBarItem" >
                            Sign in </Link> )}
                
                {session?.user?.email === process.env.ADMIN_EMAIL && (
                            <Link href={"/studio"} className="navBarItem" >
                            Studio </Link> )}
                {session?.user && (
                            <Link href={"/orders"} className="navBarItem" >
                            Orders </Link> )}
            </div>
        </Container>

    </div>
  )
}

export default NavBar