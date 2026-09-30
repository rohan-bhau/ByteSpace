import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative w-full bg-[#003BE2] py-20 sm:py-24 overflow-hidden min-h-[488px] flex items-center justify-center">
      {/* Blueprint Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* 3D Particles */}
      <div
        className="absolute left-[calc(50%-838px)] top-[-162px] w-[1714px] h-[803px] pointer-events-none select-none z-0 scale-[0.55] sm:scale-[0.75] md:scale-[0.85] lg:scale-100 origin-center"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/cta-particles-group.png"
          alt="3D Abstract Particles"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-white leading-[1.15] sm:leading-[1.2] tracking-tight">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="mt-5 text-[13px] sm:text-sm text-white/80 leading-relaxed sm:leading-[26px] max-w-[720px] mx-auto font-normal">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="mt-8">
          <Link
            href="/register"
            className="inline-block bg-[#D4FB20] text-[#040819] font-semibold text-sm px-8 py-3 rounded-full hover:brightness-105 active:scale-95 transition-all shadow-md"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
