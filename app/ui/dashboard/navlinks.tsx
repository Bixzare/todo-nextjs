"use client"

import{
    UserIcon,HomeIcon,InboxIcon,ArrowLeftIcon
} from '@heroicons/react/24/outline';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { logout } from '@/app/logout/actions';

// Map of links to display in the side nav
// depending on size of app, this would be stored in database

const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    {
      name: 'Tasks',href: '/dashboard/tasks',icon: InboxIcon,
    },
    { name: 'Account', href: '/dashboard/account', icon: UserIcon },
  ];
  
  export default function NavLinks()
  {
    const pathname = usePathname();
    return(
        <>
        {links.map((link) => {
            const LinkIcon = link.icon;
            return(
                <Link key={link.name} href={link.href} className={clsx('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-black hover:text-white md:flex-none md:justify-start md:p-2 md:px-3 text-black',
                    {
                        'bg-blue-200 text-black': pathname === link.href,

                    },
                )}
                >
                <LinkIcon className = "w-6"/>
                <p className ="hidden md:block">{link.name}</p>
                </Link>


            );
        })}

            
            <div  className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-black hover:text-white md:flex-none md:justify-start md:p-2 md:px-3 text-black'>
            <ArrowLeftIcon className = "w-6"/>
            <button onClick ={() => logout()}>Sign Out
                </button></div>
        {/*Write logic for sign out here use either pop up or another page to confirm if user wants to sign out */}
        </>
        
    );
  }