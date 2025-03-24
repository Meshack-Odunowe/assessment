'use client';

import React from 'react';
import Image from 'next/image';
import { Bell, Menu } from 'lucide-react';
import { useSidebar } from '../context/SidebarContextProvider';

const Navbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="py-[11px] bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center">
          {/* Hamburger menu */}
          <button
            className="p-[12px] rounded-[15px] bg-[#F5F5F5] hover:bg-gray-100 mr-4"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <Menu className="size-[24px] text-gray-600" />
          </button>

            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Cash Complete"
                width={95}
                height={55}
                className="object-contain"
              />
              
              <div className="ml-6 flex flex-col text-sm">
                <span className="text-[#757575] font-[400] text-[13px]">Branch</span>
                <div className="flex items-center">
                  <span className="font-[100] text-[16px] italic">Opebi Branch</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            {/* Notification icon */}
            <button className="p-[12px] rounded-[15px] bg-[#F5F5F5] hover:bg-gray-100 relative mr-[22px]">
              <Image src='/chat.svg' width={24} height={22} alt='chat icon' className="w-5 h-5 text-gray-600 " />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-[12px] rounded-[15px] bg-[#F5F5F5] hover:bg-gray-100 relative mr-[40px]">
              <Bell className="w-5 h-5 text-gray-600 " />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User profile */}
            <div className="flex items-center">
              <div className=" bg-[#F5F5F5] rounded-[15px] flex items-center justify-center p-[12px] text-[16px] font-[700] text-[#0F3677] ">
                OE
              </div>
              <div className="ml-3 hidden sm:flex flex-col text-sm">
                <span className="text-[#353535] font-[100] italic">Olamide Eniola</span>
                <span className="text-[13px] font-[400] text-[#757575]">Cash Officer</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </header>

    
  );
};

export default Navbar;