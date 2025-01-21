'use client';

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { HiOutlineStop, HiOutlineBadgeCheck } from "react-icons/hi";
import { MdOutlineSupportAgent } from "react-icons/md";
import toast from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setStatus('Message sent successfully!');
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const { error } = await response.json();
        toast.success('Failed to send message. Please try again.');
        setStatus(error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again.');
    }
  };
  
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-32 py-8 mb-10 lg:mb-48">
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-center font-bold text-[30px] sm:text-[35px] md:text-[40px]'>Get In Touch With Us</h1>
        <p className='w-full sm:w-[600px] text-[14px] sm:text-[16px] text-center mt-4'>
          For more information about our products & services, please feel free to drop us an email.
          Our staff is always ready to help you out. Do not hesitate!
        </p>
      </div>

      <div className="mx-auto flex flex-col items-center justify-center md:flex-row gap-40 mt-12">
        {/* Contact Left Side */}
        <div className="space-y-8 flex-1">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-xl" />
            <div className="w-[250px]">
              <strong>Address</strong>
              <p className="text-sm">236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-xl" />
            <div className="w-[250px]">
              <strong>Phone</strong>
              <p className="text-sm">Mobile: +(84) 546-6789</p>
              <p className="text-sm">Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MdAccessTimeFilled className="text-xl" />
            <div className="w-[250px]">
              <strong>Working Time</strong>
              <p className="text-sm">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-sm">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Right Side (Form) */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="mx-auto max-w-xl w-full">
            <div className="">
              {/* Name */}
              <div className="mt-2.5 w-full space-y-4">
                <label htmlFor="name" className="block text-sm font-semibold">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-[#F5F5F5] px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  required
                />
              </div>

              {/* Email */}
              <div className="mt-2.5 w-full space-y-4">
                <label htmlFor="email" className="block text-sm font-semibold">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md bg-[#F5F5F5] px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  required
                />
              </div>

              {/* Subject */}
              <div className="mt-2.5 w-full space-y-4">
                <label htmlFor="subject" className="block text-sm font-semibold">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject*"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-md bg-[#F5F5F5] px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-3 mt-2.5 w-full space-y-4">
                <label htmlFor="message" className="block text-sm font-semibold">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-[#F5F5F5] px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-3 mt-6 flex justify-start">
                <button
                  type="submit"
                  className="bg-[#029fae] rounded-md w-full sm:w-[215px] h-[56px] text-white flex items-center justify-center cursor-pointer hover:bg-[#80a3d8] transition-colors duration-200"
                >
                  <p className="text-sm font-semibold">Send Message</p>
                </button>
              </div>

              {/* Status Message */}
              {status && <p className="mt-4 text-center text-sm">{status}</p>}
            </div>
          </form>
        </div>
      </div>

      <div className="w-full py-8 bg-[#f4f4f4] lg:h-[270px] flex flex-col lg:flex-row items-center justify-center gap-40 mt-24">
        <div className='flex gap-2 ml-10 items-start justify-center'>
          <HiOutlineStop className='text-[45px]' />
          <div className='flex flex-col'>
            <strong>High Quality</strong>
            <span className='text-[#898989]'>crafted from top materials</span>
          </div>
        </div>
        <div className='flex gap-2 ml-4 items-center justify-center'>
          <HiOutlineBadgeCheck className='text-[45px]' />
          <div className='flex flex-col'>
            <strong>Warranty Protection</strong>
            <span className='text-[#898989]'>Over 2 years</span>
          </div>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <MdOutlineSupportAgent className='text-[45px]' />
          <div className='flex flex-col'>
            <strong>24 / 7 Support</strong>
            <span className='text-[#898989]'>Dedicated support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
