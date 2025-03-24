import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 h-screen items-center justify-center p-4">
      <Link href='/user-manager/user/login' className="w-full sm:w-auto">
        <button className="w-full text-white px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors">
          Go to Login Page
        </button>
      </Link>
      
      <Link href='/user-manager/user/reset-password' className="w-full sm:w-auto">
        <button className="w-full text-white px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors">
          Password Reset
        </button>
      </Link>
      
      <Link href='/control-tower' className="w-full sm:w-auto">
        <button className="w-full text-white px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors">
          Control Tower
        </button>
      </Link>
      
      <Link href='/user-manager/user/forgot-password' className="w-full sm:w-auto">
        <button className="w-full text-white px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors">
          Forgot Password
        </button>
      </Link>
      
      <Link href='/order-and-delivery/cash-request' className="w-full sm:w-auto">
        <button className="w-full text-white px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors">
          Cash Request
        </button>
      </Link>
    </div>
  );
}