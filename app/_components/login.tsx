'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Login attempt with:', { username });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5F5F5] p-[40px]">
      <div className="w-full max-w-[470px]">
        <div className="mb-8 flex justify-center">
          <Image 
            src="/logo.png" 
            alt="Cash Complete Logo" 
            width={150} 
            height={60}
            priority
          />
        </div>
        
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-6  text-2xl text-[#052B4E] font-bold text-gray-800 ">Log In</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="mb-2 block text-[14px] font-[700] text-[#555555]">
                Username
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Image src='/Group.png' width={20}  height={20} alt='Person Icon'/>
                </div>
                <input
                  id="username"
                  type="text"
                  placeholder="Your email address or Username"
                  className="block w-full rounded-md border border-gray-300  py-2 pl-10 bg-white pr-3 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="mb-[24px]">
              <label htmlFor="password" className="mb-2 block text-sm font-[700] text-[#555555]">
                Password
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Image src='lock.svg' width={20} height={20} alt='padlock'/>
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full  rounded-[15px] bg-[#055DAE] py-[12px] px-[172px] text-center font-medium text-white hover:bg-[#022546] focus:outline-none focus:ring-2 focus:ring-[#055DAE] focus:ring-offset-2"
            >
              Log In
            </button>
          </form>
          
          <div className="mt-[24px]  text-sm">
            <span className="text-gray-600">Forgot your Password? </span>
            <Link href="/help" className="font-medium text-[#055DAE] hover:text-blue-500">
              Get Help
            </Link>
          </div>
        </div>
        
        <footer className="mt-8 text-center text-xs font-[300] text-[#75757580] text-[16px]">
          <nav className="mb-4">
            <ul className="flex justify-center space-x-4">
              <li>
                <Link href="/help" className="hover:text-gray-700">Help</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-700">Privacy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-700">Terms</Link>
              </li>
            </ul>
          </nav>
          <p className=' font-[400]  text-[#555555]'>© 2022 BlueChip Technologies, LTD. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}