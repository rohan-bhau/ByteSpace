'use client';

import React from 'react';
import Image from 'next/image';
import { Search, Star } from 'lucide-react';
import Container from '@/components/ui/Container';
import GridBackground from '@/components/ui/GridBackground';

export default function Hero() {
  return (
    <section className="relative bg-[#003de1] text-white pt-12 sm:pt-16 pb-0 overflow-hidden min-h-[820px] lg:min-h-[880px] flex flex-col justify-between">
      {/* 1. Exact Blueprint Square Grid Overlay */}
      <GridBackground size={80} opacity={0.08} />

      {/* 2. Six 3D Particles Positioned at Exact Figma Coordinates */}
      {/* Particle 1: Top-Left Electric Lime 3D Spring */}
      <div
        className="absolute left-0 top-[26%] sm:top-[27%] lg:top-[28%] w-[100px] sm:w-[125px] lg:w-[150px] z-10 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero-particle-lime-spring.png"
          alt="3D Lime Spring Particle"
          width={150}
          height={220}
          priority
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* Particle 2: Mid-Left 3D White Zigzag */}
      <div
        className="absolute left-[10%] sm:left-[12%] lg:left-[14%] top-[47%] sm:top-[48%] lg:top-[49%] w-[60px] sm:w-[75px] lg:w-[90px] z-10 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero-particle-white-zigzag.png"
          alt="3D White Zigzag Particle"
          width={90}
          height={100}
          priority
          className="w-full h-auto object-contain drop-shadow-md"
        />
      </div>

      {/* Particle 3: Bottom-Left 3D White Torus / Donut */}
      <div
        className="absolute left-[1%] sm:left-[2%] lg:left-[3%] bottom-[2%] sm:bottom-[3%] w-[150px] sm:w-[200px] lg:w-[240px] z-20 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero-particle-white-torus.png"
          alt="3D White Torus Particle"
          width={240}
          height={215}
          priority
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Particle 4: Top-Right Electric Lime 3D Cylinder */}
      <div
        className="absolute right-0 top-[22%] sm:top-[23%] lg:top-[24%] w-[110px] sm:w-[135px] lg:w-[160px] z-10 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero-particle-lime-cylinder.png"
          alt="3D Lime Cylinder Particle"
          width={160}
          height={250}
          priority
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* Particle 5: Mid-Right 3D White Pyramid / Tetrahedron */}
      <div
        className="absolute right-[10%] sm:right-[12%] lg:right-[14%] top-[44%] sm:top-[45%] lg:top-[46%] w-[65px] sm:w-[80px] lg:w-[95px] z-10 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero-particle-white-pyramid.png"
          alt="3D White Pyramid Particle"
          width={95}
          height={100}
          priority
          className="w-full h-auto object-contain drop-shadow-md"
        />
      </div>

      {/* Particle 6: Bottom-Right 3D White Spring Coil */}
      <div
        className="absolute right-[1%] sm:right-[2%] lg:right-[3%] bottom-[2%] sm:bottom-[3%] w-[120px] sm:w-[155px] lg:w-[185px] z-20 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/assets/images/hero-particle-white-spring.png"
          alt="3D White Spring Particle"
          width={185}
          height={235}
          priority
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* 3. Text & Search Content */}
      <Container className="relative z-20 text-center flex flex-col items-center">
        {/* Main Headline (Figma: 935 x 172 Hug, Clash Display Bold, Pure White) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-white font-display max-w-[935px] mx-auto leading-[1.15]">
          Get Access to Hundreds <br />
          Courses Available
        </h1>

        {/* Subtitle Description */}
        <p className="mt-4 text-sm sm:text-base md:text-[17px] text-white/80 max-w-2xl mx-auto font-normal leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar: Separate input pill + separate lime button with gap */}
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

      {/* 4. Center Visual Section (Large Dome + Student + 3 Floating Badges) */}
      <div className="relative w-full max-w-5xl mx-auto flex justify-center items-end min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] mt-6 sm:mt-8">
        {/* Large Electric Lime Dome / Circle: Upper half visible, bottom half cut off by hero frame */}
        <div
          className="absolute w-[560px] h-[560px] sm:w-[680px] sm:h-[680px] lg:w-[800px] lg:h-[800px] bg-[#d4fa20] rounded-full z-0 left-1/2 -translate-x-1/2 top-0"
          aria-hidden="true"
        />

        {/* Student Image: Positioned starting inside the circle, head rising near the top halo */}
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

        {/* Floating Card 1: UI/UX Design (Left of Student Face) */}
        <div className="absolute top-[16%] sm:top-[18%] left-[6%] sm:left-[15%] lg:left-[20%] z-30 bg-white text-left px-5 py-3 rounded-2xl shadow-xl border border-white/80 max-w-[210px] transform hover:scale-105 transition-transform duration-200">
          <p className="text-gray-900 font-bold text-sm sm:text-[15px] font-display">
            UI/UX Design
          </p>
          <p className="text-gray-500 text-xs mt-0.5 whitespace-nowrap">
            200 Courses &bull; 1000+ Students
          </p>
        </div>

        {/* Floating Card 2: Learning Progress (Right of Student Face) */}
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

        {/* Floating Card 3: Happy Students (Bottom Left overlapping Dome) */}
        <div className="absolute bottom-[6%] sm:bottom-[8%] left-[4%] sm:left-[11%] lg:left-[15%] z-30 bg-white text-left px-4 sm:px-5 py-3 rounded-2xl shadow-xl border border-white/80 transform hover:scale-105 transition-transform duration-200">
          <p className="text-gray-900 font-bold text-xs sm:text-sm font-display">
            Happy Students
          </p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-xs font-semibold text-gray-700">4.5</span>
            <span className="text-[11px] text-gray-500">(240)</span>
            <Star className="w-3.5 h-3.5 fill-[#d4fa20] text-[#d4fa20]" />
          </div>
          {/* Overlapping Avatars (6 avatars) + 2K+ Badge */}
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
            {/* 2K+ Green Pill Badge */}
            <div className="w-6 h-6 rounded-full bg-[#d4fa20] text-black font-bold text-[9px] flex items-center justify-center border border-white shrink-0">
              2K+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
