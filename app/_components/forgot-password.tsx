// ForgotPassword.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ForgotPassword: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 ">
      {/* Logo */}
      <div className="mb-[53px]">
        <Image
          src="/logo.png"
          alt="Cash Complete Logo"
          width={120}
          height={70}
          priority
        />
      </div>

      {/* Card */}
      <div
        className="bg-white mb-[132px]  rounded-[15px]   w-full max-w-md"
        style={{
          boxShadow: "0px 5px 40px 0px rgba(0, 0, 0, 0.1)",
          padding: "40px",
          borderRadius: "8px",
        }}>
        <h1 className="text-[32px] font-bold text-[#052B4E] mb-[24px]">
          Forgot Password?
        </h1>

        <p className="text-[#353535] mb-[24px] text-[16px]">
          Having trouble signing into your Cash Complete account?
        </p>

        <p className="text-gray-700 font-[400] text-[16px] mb-6">
          Contact your{" "}
          <Link href="#" className="text-[#055DAE] underline hover:underline">
            administrator
          </Link>{" "}
          for help
        </p>
        <hr className="mb-[24px]" />

        {/* Buttons */}
        <div className="flex  items-center gap-4 pb-[93px] ">
          <button className="text-gray-700 text-[16px] font-[700] hover:underline">
            Remember Password
          </button>

          <button className="bg-[#F5F5F5] text-gray-800 px-6 py-2 rounded hover:bg-gray-200 transition-colors">
            Log In
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <div className="flex justify-center gap-6 mb-[24px]">
          <Link
            href="#"
            className="hover:underline text-[16px] font-[300] text-[#75757580]">
            Help
          </Link>
          <Link
            href="#"
            className="hover:underline text-[16px] font-[300] text-[#75757580]">
            Privacy
          </Link>
          <Link
            href="#"
            className="hover:underline text-[16px] font-[300] text-[#75757580]">
            Terms
          </Link>
        </div>
        <p className="text-[16px] font-[400] text-[#555555]">
          © 2022 BlueChip Technologies, LTD. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
