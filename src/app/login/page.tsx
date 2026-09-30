import React from "react";
import Link from "next/link";
import Image from "next/image";

import AuthShowcase from "@/components/auth/AuthShowcase";

export const metadata = {
  title: "Login - ByteSpace",
  description: "Sign in to your ByteSpace account to continue learning.",
};

export default function LoginPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#003BE2] flex flex-col justify-between overflow-x-hidden selection:bg-[#D4FB20] selection:text-[#242528]">
      {/* Background blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.14) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* Top Header Logo */}
      <header className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[120px] pt-8 sm:pt-10">
        <Link href="/" className="inline-flex items-center group">
          <Image
            src="/assets/brand/logo-icon.svg"
            alt="ByteSpace"
            width={29}
            height={32}
            priority
            className="w-[29px] h-[32px] transition-transform duration-200 group-hover:scale-105"
          />
        </Link>
      </header>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[120px] py-8 lg:py-0 flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-8">
        {/* Left Showcase */}
        <div className="hidden lg:flex w-full lg:max-w-[496px] flex-col justify-center">
          <div className="max-w-[475px]">
            <h1 className="font-poppins font-semibold text-[20px] leading-[24px] text-white tracking-[-0.2px]">
              Sign in with ease
            </h1>
            <p className="font-satoshi text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28.8px] text-[#F5F5F6] mt-2">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-10 flex justify-center lg:justify-start">
            <AuthShowcase />
          </div>
        </div>

        {/* Right Form Card */}
        <div className="w-full max-w-[440px] sm:max-w-[500px] lg:max-w-[579px] lg:h-[784px] bg-white rounded-[24px] px-6 py-8 sm:px-10 sm:py-10 lg:px-[63px] lg:pt-[61px] lg:pb-[40px] shadow-2xl flex flex-col justify-between my-4 lg:my-8 mx-auto lg:mx-0">
          <div>
            {/* Header */}
            <div>
              <span className="font-satoshi text-[18px] leading-[28.8px] text-[#003BE2]">
                Sign In
              </span>
              <h2 className="font-poppins font-semibold text-[32px] sm:text-[44px] leading-[1.2] text-[#242528] mt-1">
                Welcome Back
              </h2>
            </div>

            {/* Inputs */}
            <form className="mt-8 sm:mt-10 space-y-6">
              <div className="space-y-2">
                <label className="block font-satoshi font-medium text-[14px] leading-[16.8px] text-[#242528]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="designer@example.com"
                  className="w-full h-[52px] rounded-[12px] px-6 border border-[#E5E6E8] bg-white text-[#242528] text-[16px] font-satoshi placeholder:text-[#82868E] focus:outline-none focus:border-[#003BE2] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-satoshi font-medium text-[14px] leading-[16.8px] text-[#242528]">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full h-[52px] rounded-[12px] px-6 border border-[#E5E6E8] bg-white text-[#242528] text-[16px] font-satoshi placeholder:text-[#82868E] focus:outline-none focus:border-[#003BE2] transition-colors"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="h-[46px] px-6 bg-[#D4FB20] text-[#242528] font-satoshi font-medium text-[18px] leading-[21.6px] rounded-[24px] hover:brightness-95 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
                >
                  Sign In
                </button>
              </div>
            </form>

            {/* Social Authentication */}
            <div className="mt-10 lg:mt-[73px]">
              {/* Or Divider */}
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="flex-1 h-[1px] bg-[#D1D1D1]" />
                <span className="font-satoshi text-[18px] text-[#888888] px-3">
                  or
                </span>
                <div className="flex-1 h-[1px] bg-[#D1D1D1]" />
              </div>

              {/* Social Buttons */}
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  aria-label="Sign in with Facebook"
                  className="w-[72px] h-[72px] rounded-[24px] border border-[#D1D1D1] bg-white hover:bg-gray-50 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                >
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.879V14.89H7.898V12H10.438V9.797C10.438 7.29 11.931 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.563H15.193C13.95 8.563 13.563 9.334 13.563 10.125V12H16.336L15.893 14.89H13.563V21.879C18.343 21.128 22 16.991 22 12C22 6.477 17.523 2 12 2Z"
                      fill="#000000"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  aria-label="Sign in with Google"
                  className="w-[72px] h-[72px] rounded-[24px] border border-[#D1D1D1] bg-white hover:bg-gray-50 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.35 11.1H12V14.93H17.37C16.89 17.18 14.83 18.77 12 18.77C8.69 18.77 6 16.08 6 12.77C6 9.46 8.69 6.77 12 6.77C13.56 6.77 14.97 7.33 16.07 8.24L18.87 5.44C17.07 3.76 14.69 2.77 12 2.77C6.48 2.77 2 7.25 2 12.77C2 18.29 6.48 22.77 12 22.77C17.76 22.77 21.6 18.72 21.6 13C21.6 12.33 21.51 11.71 21.35 11.1Z"
                      fill="#000000"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Footer Link */}
          <div className="text-center font-satoshi text-[16px] leading-[25.6px] mt-8 lg:mt-0">
            <span className="text-[#888888]">New user? </span>
            <Link
              href="/signup"
              className="text-[#003BE2] hover:underline font-normal"
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-6 lg:h-10" />
    </main>
  );
}
