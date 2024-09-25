import Link from 'next/link';
import React from 'react';
import NavLinks from '@/app/ui/dashboard/navlinks';
import Image from 'next/image';
import SVGIMG from '/app/ui/icons/logo.svg'

export default function SideNav()
{
    return(
        <div className = "flex h-full flex-col px-3 py-4 md:px-2 bg-white">
        <div className=" h-1/5 w-full relative flex justify-start items-center">
          <Image
            src={SVGIMG}
            alt="Tomo Logo"
            layout="fill"
            objectFit="contain" // Maintain aspect ratio
          />
        </div>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks/>
                 <div className="hidden h-auto grow rounded-md md:block"> </div>
            </div>
        </div>
            
    );
}