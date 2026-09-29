'use client';

import React from 'react';
import Image from 'next/image';
import { Search, Star } from 'lucide-react';
import Container from '@/components/ui/Container';
import GridBackground from '@/components/ui/GridBackground';

export default function Hero() {
  return (
    <section className="relative bg-[#003de1] text-white pt-12 sm:pt-16 pb-0 overflow-hidden min-h-[820px] lg:min-h-[880px] flex flex-col justify-between">
      {/* Background grid */}
      <GridBackground size={80} opacity={0.08} />

      {/* Floating 3D decorative shapes */}
      {/* Top-left lime spring */}
      <div
        className="absolute left-0 top-[23%] sm:top-[25%] lg:top-[26%] w-[95px] sm:w-[125px] lg:w-[150px] z-10 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero-particle-lime-spring.png"
          alt="Decorative lime spring"
          width={150}
          height={220}
          priority
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* Mid-left white zigzag */}
      <div
        className="absolute left-[9%] sm:left-[11%] lg:left-[13%] top-[45%] sm:top-[47%] w-[55px] sm:w-[70px] lg:w-[85px] z-10 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero-particle-white-zigzag.png"
          alt="Decorative white zigzag"
          width={85}
          height={95}
          priority
          className="w-full h-auto object-contain drop-shadow-md"
        />
      </div>

      {/* Bottom-left white torus */}
      <div
        className="absolute left-[-2%] sm:left-[0%] lg:left-[1%] bottom-[-2%] sm:bottom-[0%] lg:bottom-[1%] w-[180px] sm:w-[240px] lg:w-[300px] z-20 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero-particle-white-torus.png"
          alt="Decorative white torus ring"
          width={300}
          height={275}
          priority
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Top-right lime cylinder */}
      <div
        className="absolute right-0 top-[19%] sm:top-[21%] lg:top-[22%] w-[100px] sm:w-[125px] lg:w-[150px] z-10 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero-particle-lime-cylinder.png"
          alt="Decorative lime cylinder"
          width={150}
          height={235}
          priority
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* Mid-right white pyramid */}
      <div
        className="absolute right-[9%] sm:right-[11%] lg:right-[13%] top-[43%] sm:top-[45%] w-[60px] sm:w-[75px] lg:w-[90px] z-10 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero-particle-white-pyramid.png"
          alt="Decorative white pyramid"
          width={90}
          height={95}
          priority
          className="w-full h-auto object-contain drop-shadow-md"
        />
      </div>

      {/* Bottom-right white spring coil */}
      <div
        className="absolute right-[-1%] sm:right-[0%] lg:right-[1%] bottom-[-1%] sm:bottom-[0%] lg:bottom-[1%] w-[160px] sm:w-[210px] lg:w-[260px] z-20 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero-particle-white-spring.png"
          alt="Decorative white spring coil"
          width={260}
          height={315}
          priority
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Header content and search */}
      <Container className="relative z-20 text-center flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-white font-display max-w-[935px] mx-auto leading-[1.15]">
          Get Access to Hundreds <br />
          Courses Available
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-[17px] text-white/80 max-w-2xl mx-auto font-normal leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Course search form */}
        <div className="mt-8 flex items-center justify-center gap-3 w-full max-w-xl mx-auto">
          <div className="relative flex-1 max-w-[440px]">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-white text-gray-800 placeholder-gray-400 text-sm sm:text-[15px] font-normal rounded-full pl-13 pr-6 py-3.5 shadow-xl focus:outline-none focus:ring-2 focus:ring-[#d4fa20]"
            />
          </div>
          <button
            type="button"
            className="bg-[#d4fa20] text-black font-semibold text-sm sm:text-[15px] px-8 py-3.5 rounded-full hover:bg-[#bfe619] transition-all duration-200 shadow-xl shrink-0 cursor-pointer active:scale-95"
          >
            Search
          </button>
        </div>
      </Container>

      {/* Visual composition */}
      <div className="relative w-full max-w-5xl mx-auto flex justify-center items-end min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] mt-6 sm:mt-8">
        {/* Backdrop dome */}
        <div
          className="absolute w-[560px] h-[560px] sm:w-[680px] sm:h-[680px] lg:w-[800px] lg:h-[800px] bg-[#d4fa20] rounded-full z-0 left-1/2 -translate-x-1/2 top-0"
          aria-hidden="true"
        />

        {/* Featured student */}
        <div className="relative z-10 w-[310px] sm:w-[410px] lg:w-[465px] select-none pointer-events-none mb-0 leading-none">
          <Image
            src="/assets/images/hero-student.png"
            alt="Student with laptop smiling"
            width={516}
            height={483}
            priority
            className="w-full h-auto object-contain block drop-shadow-2xl"
          />
        </div>

        {/* Category card */}
        <div className="absolute top-[16%] sm:top-[18%] left-[6%] sm:left-[15%] lg:left-[20%] z-30 bg-white text-left px-5 py-3 rounded-2xl shadow-xl border border-white/80 max-w-[210px] transform hover:scale-105 transition-transform duration-200">
          <p className="text-gray-900 font-bold text-sm sm:text-[15px] font-display">
            UI/UX Design
          </p>
          <p className="text-gray-500 text-xs mt-0.5 whitespace-nowrap">
            200 Courses &bull; 1000+ Students
          </p>
        </div>

        {/* Progress card */}
        <div className="absolute top-[20%] sm:top-[22%] right-[6%] sm:right-[15%] lg:right-[20%] z-30 bg-white text-left px-5 py-3.5 rounded-2xl shadow-xl border border-white/80 min-w-[170px] sm:min-w-[185px] transform hover:scale-105 transition-transform duration-200">
          <p className="text-gray-500 text-xs font-medium">Learning Progress</p>
          <p className="text-gray-900 font-bold text-2xl sm:text-3xl font-display mt-0.5">
            55%
          </p>
          <div className="w-full h-2 bg-gray-100 rounded-full mt-2.5 overflow-hidden">
            <div
              className="h-full bg-[#d4fa20] rounded-full"
              style={{ width: '55%' }}
            />
          </div>
        </div>

        {/* Reviews & social proof */}
        <div className="absolute bottom-[6%] sm:bottom-[8%] left-[4%] sm:left-[11%] lg:left-[15%] z-30 bg-white text-left px-4 sm:px-5 py-3 rounded-2xl shadow-xl border border-white/80 transform hover:scale-105 transition-transform duration-200">
          <p className="text-gray-900 font-bold text-xs sm:text-sm font-display">
            Happy Students
          </p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-xs font-semibold text-gray-700">4.5</span>
            <span className="text-[11px] text-gray-500">(240)</span>
            <Star className="w-3.5 h-3.5 fill-[#d4fa20] text-[#d4fa20]" />
          </div>
          {/* Student avatars */}
          <div className="flex items-center -space-x-1.5 mt-2">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="w-6 h-6 rounded-full border border-white overflow-hidden bg-gray-200 shrink-0"
              >
                <Image
                  src={`/assets/images/student-avatar-${num}.png`}
                  alt={`Student ${num}`}
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="w-6 h-6 rounded-full bg-[#d4fa20] text-black font-bold text-[9px] flex items-center justify-center border border-white shrink-0">
              2K+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
