import React from 'react';
import Image from 'next/image';

import Logo1 from '../../../../public/Clientele/HG.jpg';
import Logo2 from '../../../../public/Clientele/KCC_LOGO.png';
import Logo3 from '../../../../public/Clientele/L&T.png';
import Logo4 from '../../../../public/Clientele/apco.png';
import Logo5 from '../../../../public/Clientele/gawar.png';
import Logo6 from '../../../../public/Clientele/jkumar.png';
import Logo7 from '../../../../public/Clientele/monte.png';
import Logo8 from '../../../../public/Clientele/navayuga.png';

const OurClients = () => {
  const logos = [
    { src: Logo1, alt: 'HG Logo' },
    { src: Logo2, alt: 'KCC Logo' },
    { src: Logo3, alt: 'L&T Logo' },
    { src: Logo4, alt: 'APCO Logo' },
    { src: Logo5, alt: 'Gawar Logo' },
    { src: Logo6, alt: 'JKumar Logo' },
    { src: Logo7, alt: 'Monte Logo' },
    { src: Logo8, alt: 'Navayuga Logo' }
  ];

  return (
    <div className="container mx-auto overflow-hidden bg-white py-6 sm:py-8 md:py-10">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black text-center mb-8 sm:mb-10 md:mb-12">Our Clients</h2>
    <div className="animate-marquee flex w-full overflow-hidden">
        {[...logos, ...logos].map((logo, index) => (
         <div
         key={index}
         className="flex-shrink-0 w-28 sm:w-32 md:w-40 h-16 sm:h-16 md:h-20 mx-4 sm:mx-6 md:mx-10 flex items-center justify-center"
       >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={225}
              height={180}
              className="max-h-full max-w-full object-contain transition-all duration-800"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
