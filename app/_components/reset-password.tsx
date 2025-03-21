"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("Weak");

  const checkPasswordStrength = (pass: string) => {
    if (!pass) {
      setPasswordStrength("Weak");
      return;
    }

    // Simple password strength check
    if (pass.length < 8) {
      setPasswordStrength("Weak");
    } else if (
      pass.length >= 8 &&
      /[A-Z]/.test(pass) &&
      /[0-9]/.test(pass) &&
      /[^A-Za-z0-9]/.test(pass)
    ) {
      setPasswordStrength("Strong");
    } else {
      setPasswordStrength("Medium");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Logo */}
      <div className="mb-8">
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
        className="bg-white rounded-[15px] ;
] max-w-[480px]  p-[40px] w-fit "  style={{ 
  boxShadow: "0px 5px 40px 0px rgba(0, 0, 0, 0.1)",
  padding: "40px",
  borderRadius: "8px" 
}}>
        <h1 className="text-[32px] font-bold text-[#052B4E] mb-[24px]">
          Reset Password
        </h1>

        {/* New Password */}
        <div className="mb-4">
          <label
            htmlFor="new-password"
            className="block text-[14px] font-[700] text-[#555555] mb-[10px]">
            New Password
          </label>
          <div className="relative">
            <input
              id="new-password"
              type="password"
              className="w-full border placeholder:text-[14px] placeholder:font-[400] border-gray-300 rounded p-3 pl-10"
              placeholder="Create a new password"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Image src="lock.svg" width={20} height={20} alt="padlock" />
            </div>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label
            htmlFor="confirm-password"
            className="block text-[14px] font-[700] text-[#555555] mb-[10px]">
            New Password
          </label>
          <div className="relative">
            <input
              id="confirm-password"
              type="password"
              className="w-full border placeholder:text-[14px] placeholder:font-[400] border-gray-300 rounded p-3 pl-10"
              placeholder="Create a new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Image src="lock.svg" width={20} height={20} alt="padlock" />
            </div>
          </div>
        </div>

        {/* Password Strength */}
        <div className="mb-4">
          <p className="text-[14px] font-[700]  text-[#353535]">
            Password Strength:{" "}
            <span
              className={`font-medium ${
                passwordStrength === "Weak"
                  ? "text-[#F6515B] font-[700]"
                  : passwordStrength === "Medium"
                  ? "text-yellow-500"
                  : "text-green-500"
              }`}>
              {passwordStrength}
            </span>
          </p>
          <p className="text-[13px] text-[#555555] mt-[24px]">
            Use at least 8 characters. Don&apos;t use a password from another
            site, or something obvious like: pet&apos;s name, phone number, or
            birthdate.
          </p>
        </div>

        {/* Change Password Button */}
        <button className="w-full bg-[#055DAE] text-white font-medium py-3 rounded-[15px] hover:bg-[#044d93] transition-colors mt-4">
          Change Password
        </button>
      </div>

      {/* Footer */}
      <div className="mt-[84px] text-center text-sm text-gray-500">
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

export default ResetPassword;
