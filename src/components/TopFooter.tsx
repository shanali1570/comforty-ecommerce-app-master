"use client"
import React, { useState } from 'react'
import Container from './Container'
import Logo from './Logo'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import { footerData } from '@/constants'
import toast from 'react-hot-toast'

const TopFooter = () => {

  const icons = [
    {
      title: "Face Book",
      link: "https://facebook.com/",
      icon: <FaFacebook />,
    },
    {
      title: "Twitter",
      link: "https://twitter.com/",
      icon: <FaTwitter />,
    },
    {
      title: "Instagram",
      link: "https://instagram.com/",
      icon: <FaInstagram />,
    },
    {
      title: "Pinterest",
      link: "https://pinterest.com/",
      icon: <FaPinterest />,
    },
    {
      title: "YouTube",
      link: "https://youtube.com/",
      icon: <FaYoutube />,
    },
  ];
       
    
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<string | null>(null);
  console.log(status);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      // Simple validation to check if email is entered
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        setStatus('Please enter a valid email.');
        return;
      }
  
      // Fake success response
      setStatus('Subscribed successfully!');
      toast.success('Subscribed successfully!');
      setEmail(''); // Clear the email field
    };

  return (
    <div className='w-full  bg-accentWhite border-t-[1px] border-t-lightText/50'>
        <Container className='flex flex-col md:flex-row justify-between items-center md:items-start gap-7  my-10'>
            <div className='space-y-5'>
               
                    <Logo className='w-36'/>
                
                
                <p className='text-[14px] lg:text-[16px] lg:pr-8 font-Inter font-bold  text-[#272343] '>
                 Vivamus tristique odio sit amet velit semper, 
                <br/>
                eu posuere turpis interdum. 
                <br/>
                Cras egestas purus
                </p>

                {/* Socail Media Links */}
                <div className="flex items-center justify-between w-[150px] md:w-[206px] h-[38px]">
                {
                    icons?.map((item)=>(
                    
                    <Link 
                    href={item?.link} 
                    key={item?.title} 
                    target="_blank" // Open in a new tab
                    rel="noopener noreferrer" // Security for external links
                    className=" w-[38px] h-[38px] 
                    hover:border-[1px] text-gray-500 hover:text-[#007580] hover:border-darkOrange rounded-full 
                    flex items-center justify-center hoverEffect">
                    {item?.icon}
                    </Link>
                            
                    ))
                }
                </div>

            </div>

            {/* footer different pages links */}
            <div className='flex gap-16'>
            {
                footerData?.map((item)=>(
                    <div key={item?._id}>
                        <h3 className='text-darkOrange/90 text-lg font-semibold mb-3 ' >
                            {item?.title}
                        </h3>

                        <div className='flex flex-col gap-0.5'>
                            {
                                item?.listItem?.map((list)=>
                                list?.listData?.map((data)=>
                                <Link key={data.text} href={data.url} 
                                 className='py-1 text-accent font-medium hover:text-darkOrange hoverEffect'
                                 >
                                    {data.text}
                                </Link>
                                )
                                )
                            }
                        </div>

                    </div>
                ))
            }
            </div>
            
             {/* Newsletter Section */}
          <div className='space-y-8 '>
            <h1 className="text-darkOrange/90 text-lg text-center md:text-left font-semibold mb-3 ">NEWSLETTER</h1>
            <form onSubmit={handleSubmit} className="lg:flex gap-4 ">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
        onChange={(e) => setEmail(e.target.value)}
                className="w-full lg:w-[250px] h-[46px] border-[1px] border-[#e1e3e5] rounded-md bg-[#F5F5F5] p-2 text-sm"
              />
              <button  
              type="submit"
              className='text-white bg-[#029fae] mt-4 lg:mt-0 hover:opacity-80 w-full lg:w-[127px] h-[46px] rounded-md'>
                Subscribe
              </button>
            </form>
            <h1 className="text-[#9a9caa] font-bold text-[15px] font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              <br/>
              Nullam tincidunt erat enim.
            </h1>
          </div>

        </Container>
    </div>
  )
}

export default TopFooter