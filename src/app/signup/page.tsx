import React from "react";
import Link from "next/link";
import Image from "next/image";
import AuthShowcase from "@/components/auth/AuthShowcase";

export const metadata = {
    title: "Sign Up - ByteSpace",
    description: "Create an account and start learning with ByteSpace.",
};

export default function SignupPage() {
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
                            Sign up and come in
                        </h1>
                        <p className="font-satoshi text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28.8px] text-[#F5F5F6] mt-2">
                            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
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
                                Create an Account
                            </span>
                            <h2 className="font-poppins font-semibold text-[32px] sm:text-[44px] leading-[1.2] text-[#242528] mt-1 whitespace-pre-line">
                                Welcome to{"\n"}ByteSpace
                            </h2>
                        </div>

                        {/* Inputs */}
                        <form className="mt-8 sm:mt-10 space-y-6">
                            <div className="space-y-2">
                                <label className="block font-satoshi font-medium text-[14px] leading-[16.8px] text-[#242528]">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Jamie Davis"
                                    className="w-full h-[52px] rounded-[12px] px-6 border border-[#E5E6E8] bg-white text-[#242528] text-[16px] font-satoshi placeholder:text-[#82868E] focus:outline-none focus:border-[#003BE2] transition-colors"
                                />
                            </div>

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
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Footer Link */}
                    <div className="text-center font-satoshi text-[16px] leading-[25.6px] mt-8 lg:mt-0">
                        <span className="text-[#4B4C53]">Already have an account? </span>
                        <Link
                            href="/login"
                            className="text-[#003BE2] hover:underline font-normal"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom spacer */}
            <div className="h-6 lg:h-10" />
        </main>
    );
}
