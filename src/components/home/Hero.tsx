'use client';

import React from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import Container from '@/components/ui/Container';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#003BE2] text-white pt-10 sm:pt-14 pb-0 overflow-hidden min-h-[760px] sm:min-h-[840px] lg:min-h-[904px] flex flex-col justify-between">
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.14) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Yellow Arch */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[390px] sm:top-[420px] md:top-[440px] lg:top-[462px] w-[500px] h-[500px] sm:w-[720px] sm:h-[720px] md:w-[880px] md:h-[880px] lg:w-[1149px] lg:h-[1149px] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero-yellow-arch.png"
          alt=""
          width={1149}
          height={1149}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      {/* 3D Particles: Desktop */}
      <div
        className="hidden lg:block absolute left-[calc(50%-838px)] top-[101px] w-[1719px] h-[803px] pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero-particles-group.png"
          alt=""
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* 3D Particles: Mobile & Tablet Left */}
      <div
        className="block lg:hidden absolute -left-3 sm:-left-1 md:left-2 top-[240px] sm:top-[220px] md:top-[200px] w-[95px] sm:w-[140px] md:w-[180px] h-auto pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero-particles-left.png"
          alt=""
          width={520}
          height={805}
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 3D Particles: Mobile & Tablet Right */}
      <div
        className="block lg:hidden absolute -right-3 sm:-right-1 md:right-2 top-[240px] sm:top-[220px] md:top-[200px] w-[95px] sm:w-[140px] md:w-[180px] h-auto pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero-particles-right.png"
          alt=""
          width={523}
          height={805}
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Content */}
      <Container className="relative z-30 text-center flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-white font-display max-w-[935px] mx-auto leading-[1.15]">
          Get Access to Hundreds <br />
          Courses Available
        </h1>

        <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-[17px] text-white/80 max-w-2xl mx-auto font-normal leading-relaxed px-2">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3 w-full max-w-xl mx-auto px-2">
          <div className="relative flex-1 max-w-[440px]">
            <Search className="absolute left-3.5 sm:left-5 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-white text-gray-800 placeholder-gray-400 text-xs sm:text-[15px] font-normal rounded-full pl-10 sm:pl-13 pr-4 sm:pr-6 py-2.5 sm:py-3.5 shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D4FB20]"
            />
          </div>
          <button
            type="button"
            className="bg-[#D4FB20] text-[#040819] font-semibold text-xs sm:text-[15px] px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full hover:brightness-105 transition-all duration-200 shadow-xl shrink-0 cursor-pointer active:scale-95"
          >
            Search
          </button>
        </div>
      </Container>

      {/* Student & Floating Badges */}
      <div className="relative w-full max-w-[1440px] mx-auto flex justify-center items-end min-h-[340px] sm:min-h-[460px] lg:min-h-[541px] mt-4 sm:mt-8">
        {/* Student Cutout */}
        <div className="relative z-20 w-[270px] sm:w-[380px] md:w-[460px] lg:w-[578px] select-none pointer-events-none mb-0 leading-none">
          <Image
            src="/assets/images/hero-student.png"
            alt="Student with laptop smiling"
            width={578}
            height={541}
            priority
            className="w-full h-auto object-contain block drop-shadow-2xl"
          />
        </div>

        {/* Floating Card: UI/UX Design */}
        <div className="absolute left-[2%] sm:left-[6%] md:left-[12%] lg:left-[calc(50%-316px)] top-[50px] sm:top-[75px] md:top-[95px] lg:top-[127px] w-[135px] sm:w-[165px] md:w-[190px] lg:w-[214px] bg-white rounded-[12px] sm:rounded-[16px] px-3 sm:px-4 py-2.5 sm:py-3.5 shadow-xl z-30">
          <div className="flex flex-col gap-0.5 sm:gap-1">
            <h3 className="text-xs sm:text-sm lg:text-[16px] font-medium text-[#242528] leading-tight">
              UI/UX Design
            </h3>
            <div className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[11px] lg:text-[12px] text-[#82868E] whitespace-nowrap">
              <span>200 Courses</span>
              <span className="text-[8px]">•</span>
              <span>1000+ Students</span>
            </div>
          </div>
        </div>

        {/* Floating Card: Learning Progress */}
        <div className="absolute right-[2%] sm:right-[6%] md:right-[10%] lg:left-[calc(50%+122px)] lg:right-auto top-[60px] sm:top-[85px] md:top-[105px] lg:top-[139px] w-[140px] sm:w-[175px] md:w-[200px] lg:w-[232px] bg-white rounded-[12px] sm:rounded-[16px] p-2.5 sm:p-3.5 lg:p-4 shadow-xl z-30 flex flex-col justify-between">
          <div>
            <span className="text-[10px] sm:text-xs lg:text-[14px] font-medium text-[#242528] block leading-tight">
              Learning Progress
            </span>
            <span className="text-2xl sm:text-3xl lg:text-[48px] font-semibold text-[#242528] font-display block leading-tight mt-1 lg:mt-2">
              55%
            </span>
          </div>
          <div className="w-full h-1.5 sm:h-2 bg-[#F6F6F6] rounded-full overflow-hidden mt-2 lg:mt-3">
            <div className="bg-[#D4FB20] h-full w-[56%] rounded-full" />
          </div>
        </div>

        {/* Floating Card: Happy Students */}
        <div className="absolute left-[2%] sm:left-[5%] md:left-[8%] lg:left-[calc(50%-392px)] top-[170px] sm:top-[220px] md:top-[270px] lg:top-[325px] w-[170px] sm:w-[215px] md:w-[235px] lg:w-[260px] bg-white rounded-[12px] sm:rounded-[16px] p-2.5 sm:p-3.5 lg:p-4 shadow-xl z-30 flex flex-col justify-between">
          <div>
            <h3 className="text-xs sm:text-sm lg:text-[16px] font-medium text-[#242528] leading-tight">
              Happy Students
            </h3>
            <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 sm:mt-1">
              <span className="text-[10px] sm:text-[11px] lg:text-[12px] text-[#82868E]">4.5 (240)</span>
              <svg className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4 fill-[#D4FB20]" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center mt-2 sm:mt-3">
            {[
              '/assets/images/student-avatar-1.png',
              '/assets/images/student-avatar-2.png',
              '/assets/images/student-avatar-3.png',
              '/assets/images/student-avatar-4.png',
              '/assets/images/student-avatar-5.png',
              '/assets/images/student-avatar-6.png',
              '/assets/images/testimonial-avatar-sarah.png',
            ].map((src, i) => (
              <div
                key={i}
                className={`relative w-5 h-5 sm:w-7 sm:h-7 lg:w-[32px] lg:h-[32px] rounded-full overflow-hidden border sm:border-2 border-white ${
                  i > 0 ? '-ml-1.5 sm:-ml-2' : ''
                } shrink-0`}
              >
                <Image src={src} alt="Student avatar" fill className="object-cover" />
              </div>
            ))}
            <div className="w-5 h-5 sm:w-7 sm:h-7 lg:w-[32px] lg:h-[32px] rounded-full bg-[#D4FB20] text-[#242528] font-bold text-[7px] sm:text-[9px] lg:text-[11px] flex items-center justify-center border sm:border-2 border-white -ml-1.5 sm:-ml-2 shrink-0">
              2K+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
