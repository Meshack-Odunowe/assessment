// app/not-found.tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NotFound() {
  const pathname = usePathname();
  const pageName = pathname.split('/').pop() || 'page';
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 max-w-md">
        <h1 className="text-6xl font-bold text-indigo-600 mb-2">404</h1>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600">
            The <span className="font-medium text-indigo-500">{pageName}</span> page is not yet available.
          </p>
          <p className="text-gray-500 mt-2">
            We're working on it and it will be coming soon!
          </p>
        </div>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}