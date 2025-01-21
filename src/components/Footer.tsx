import Image from 'next/image';
import React from 'react';
import Container from './Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-100 ">
      <Container className='h-10 flex flex-col sm:flex-row-reverse items-center justify-between'>
        
        {/* Footer Text */}
      
        <Image
            width={227}
            height={27}
            alt="Footer Logo"
            src="/FooterLogos.png"
            className="w-[180px] lg:w-[227px] h-auto text-[#e1e3e5]"
                />

        <p className="text-[14px] font-poppins text-[#9a9caa]">
            © {currentYear} - Comforty - Designed & Developed by&nbsp;
            <strong className="text-black">Syed Muhammad Shan-e-Ali</strong>
        </p>

        

      </Container>
      
    </div>
  );
};

export default Footer;
