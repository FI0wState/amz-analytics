import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (

  <div className=" flex justify-center items-center">  
    <nav className="p-10 gap-40 flex justify-evenly items-center pt-10 sticky top-0">
            
            {/* Logo */}
            <div className="flex align-center gap-2">
                <h1 className='text-[14px] font-bold'>
                    AMZ Analytics
                </h1>
            </div>

            {/* Navbar Links */}
            <div className="text-[14px] font-medium flex align-center gap-2">
                <Link href="/">
                    Solutions
                </Link>
                <Link href="/">
                    Features 
                </Link>
                <Link href="/">
                    About 
                </Link>
            </div>

            {/* Let's Chat Button */}
            <div className="flex align-center gap-2">
                <button className='border border-white text-white text-[12px] px-4 py-1 rounded-sm'>
                    Let's Chat
                </button>
            </div>
    </nav>
    </div>
  );    
};  

export default Navbar;
