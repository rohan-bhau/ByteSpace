import React from "react";
import Image from "next/image";

export default function WhyByteSpace() {
  return (
    <section className="w-full bg-[#FAFAFA] py-20 sm:py-28 relative overflow-hidden">
      {/* Background Glows */}
      <div
        className="absolute -top-[340px] sm:-top-[366px] left-[calc(50%-768px)] w-[960px] sm:w-[1000px] h-[960px] sm:h-[1000px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(212, 251, 32, 0.40) 0%, rgba(212, 251, 32, 0.092) 53%, rgba(212, 251, 32, 0.024) 75%, transparent 100%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-[48%] -left-[320px] w-[850px] h-[850px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0, 59, 226, 0.16) 0%, rgba(0, 59, 226, 0.037) 53%, rgba(0, 59, 226, 0.01) 75%, transparent 100%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-28 -left-36 sm:-left-32 w-[672px] h-[672px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(212, 251, 32, 0.60) 0%, rgba(212, 251, 32, 0.138) 53%, rgba(212, 251, 32, 0.036) 75%, transparent 100%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -right-28 sm:-right-24 w-[520px] h-[520px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.055) 53%, rgba(0, 59, 226, 0.014) 75%, transparent 100%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Part 1: Students Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 sm:mb-32">
          {/* Left: Text & Stats */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-[#040819] leading-[1.2] tracking-tight">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#82868E] leading-relaxed">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey.
            </p>

            {/* Stats */}
            <div className="mt-10 flex items-center gap-7 sm:gap-14">
              <div>
                <span className="text-3xl sm:text-4xl font-bold text-[#003BE2] block">
                  12K
                </span>
                <span className="text-sm sm:text-base text-[#4F4F4F] mt-1 block">
                  Students
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-bold text-[#003BE2] block">
                  70+
                </span>
                <span className="text-sm sm:text-base text-[#4F4F4F] mt-1 block">
                  Courses
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-bold text-[#003BE2] block">
                  16
                </span>
                <span className="text-sm sm:text-base text-[#4F4F4F] mt-1 block">
                  Creators
                </span>
              </div>
            </div>
          </div>

          {/* Right: Visual Showcase */}
          <div className="relative w-full max-w-[480px] h-[430px] sm:h-[520px] mx-auto flex items-center justify-center">
            {/* Spring Coil Particle */}
            <div className="absolute right-[-4px] sm:right-[-20px] bottom-[225px] sm:bottom-[280px] w-[120px] sm:w-[160px] h-[120px] sm:h-[160px] pointer-events-none z-40">
              <Image
                src="/assets/images/why-bytespace-coil-yellow.png"
                alt="Coil Spinner"
                width={160}
                height={160}
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>

            {/* Featured Course Card */}
            <div className="absolute left-2 sm:left-12 top-2 sm:top-5 z-10 bg-white/95 backdrop-blur-md rounded-[16px] sm:rounded-[20px] border border-[#CED0D3] p-2.5 sm:p-3 shadow-xl w-[185px] sm:w-[245px]">
              {/* Thumbnail */}
              <div className="relative w-full aspect-[341/195] rounded-lg sm:rounded-xl overflow-hidden mb-2 sm:mb-2.5">
                <Image
                  src="/assets/images/course-figma-basics.png"
                  alt="Learn Figma from Basic"
                  fill
                  className="object-cover"
                />
                {/* Badges Overlay */}
                <div className="absolute bottom-1 sm:bottom-1.5 left-1 sm:left-1.5 right-1 sm:right-1.5 flex items-center justify-between gap-0.5 sm:gap-1 text-[7px] sm:text-[8px] font-medium text-[#4F4F4F]">
                  <span className="bg-[#F6F6F6]/90 backdrop-blur-sm px-1 sm:px-1.5 py-0.5 rounded-full whitespace-nowrap shadow-xs">
                    17 Lessons
                  </span>
                  <span className="bg-[#F6F6F6]/90 backdrop-blur-sm px-1 sm:px-1.5 py-0.5 rounded-full whitespace-nowrap shadow-xs">
                    2 hours 16 mins
                  </span>
                  <span className="bg-[#F6F6F6]/90 backdrop-blur-sm px-1 sm:px-1.5 py-0.5 rounded-full whitespace-nowrap shadow-xs">
                    59 Comments
                  </span>
                </div>
              </div>

              {/* Title & Rating */}
              <div className="flex items-start justify-between gap-1 sm:gap-1.5 mb-1">
                <h4 className="text-[11px] sm:text-xs font-semibold text-[#040819] truncate leading-tight">
                  Learn Figma from Basic
                </h4>
                <div className="flex items-center gap-0.5 text-[9px] sm:text-[10px] text-[#4F4F4F] shrink-0 font-medium">
                  <span>4.5</span>
                  <svg
                    className="w-2.5 sm:w-3 h-2.5 sm:h-3 fill-none stroke-[#CED0D3]"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
              </div>

              {/* Author */}
              <p className="text-[9px] sm:text-[10px] text-[#4F4F4F] mb-1.5 sm:mb-2">
                by <span className="text-[#003BE2]">purepearl studio</span>
              </p>

              {/* Metadata & Enrolled Users */}
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <div className="inline-flex items-center gap-1 bg-[#F5F5F6] text-[#4B4C53] text-[8px] sm:text-[9px] font-medium px-1.5 sm:px-2 py-0.5 rounded-full">
                  <svg className="w-2.5 h-2.5 fill-[#4B4C53]" viewBox="0 0 16 16">
                    <rect x="2" y="10" width="2.5" height="4" rx="0.5" />
                    <rect x="6" y="7" width="2.5" height="7" rx="0.5" />
                    <rect x="10" y="4" width="2.5" height="10" rx="0.5" />
                  </svg>
                  <span>Beginner</span>
                </div>

                <div className="flex items-center -space-x-1">
                  <div className="relative w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full overflow-hidden border border-white">
                    <Image
                      src="/assets/images/student-avatar-1.png"
                      alt="Student"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full overflow-hidden border border-white">
                    <Image
                      src="/assets/images/student-avatar-2.png"
                      alt="Student"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full overflow-hidden border border-white">
                    <Image
                      src="/assets/images/student-avatar-3.png"
                      alt="Student"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-[#D4FB20] text-[#040819] text-[6px] sm:text-[7px] font-bold flex items-center justify-center border border-white">
                    25k
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="pt-1.5 sm:pt-2 border-t border-gray-100 flex items-baseline gap-1">
                <span className="text-sm sm:text-base font-bold text-[#003BE2]">$25</span>
                <span className="text-[8px] sm:text-[9px] text-[#4F4F4F]">/lifetime</span>
              </div>
            </div>

            {/* Student Image */}
            <div className="relative w-[280px] sm:w-[380px] h-[350px] sm:h-[460px] z-20">
              <Image
                src="/assets/images/why-bytespace-student-man.png"
                alt="Student with laptop and headphones"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Learning Progress Card */}
            <div className="absolute right-0 sm:right-[-18px] bottom-[165px] sm:bottom-[215px] z-30 bg-white/95 backdrop-blur-md rounded-[16px] sm:rounded-[20px] border border-[#CED0D3] p-2.5 sm:p-4 shadow-xl w-[175px] sm:w-[220px] h-[86px] sm:h-[102px] flex flex-col justify-between">
              <span className="text-[10px] sm:text-xs text-[#82868E] font-medium block">
                Learning Progress
              </span>
              <span className="text-xl sm:text-3xl font-bold text-[#040819] block tracking-tight">
                55%
              </span>
              <div className="w-full h-1.5 sm:h-2 bg-[#F0F0F0] rounded-full overflow-hidden">
                <div className="bg-[#D4FB20] h-full w-[55%] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Creators Platform */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Visual Showcase */}
          <div className="relative w-full max-w-[480px] h-[430px] sm:h-[520px] mx-auto flex items-center justify-center order-2 lg:order-1">
            {/* Spring Coil Particle */}
            <div className="absolute right-[24px] sm:right-[56px] top-[68px] sm:top-[96px] w-[120px] sm:w-[160px] h-[120px] sm:h-[160px] pointer-events-none z-10 rotate-45">
              <Image
                src="/assets/images/why-bytespace-coil-yellow.png"
                alt="Coil Spinner"
                width={160}
                height={160}
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>

            {/* Revenue Cards */}
            <div className="absolute left-2 sm:left-10 top-10 sm:top-20 z-10 flex flex-col gap-3.5 sm:gap-[31px]">
              {/* Total Revenue */}
              <div className="bg-[#003BE2] rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 text-white shadow-xl w-[185px] sm:w-[232px] h-[74px] sm:h-[88px] flex flex-col justify-between">
                <div className="flex justify-between items-center text-[9px] sm:text-[10px] text-white/80">
                  <span className="font-medium text-[11px] sm:text-xs">Total Revenue</span>
                  <span className="text-[8px] sm:text-[9px] text-white/70 bg-white/15 px-1.5 sm:px-2 py-0.5 rounded-full">last 30d</span>
                </div>
                <span className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-tight">
                  $120.29
                </span>
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="bg-[#D4FB20] h-full w-[70%] rounded-full" />
                </div>
              </div>

              {/* Year to Date */}
              <div className="bg-[#003BE2] rounded-xl sm:rounded-2xl p-2.5 sm:p-3 text-white shadow-xl w-[112px] sm:w-[134px] h-[86px] sm:h-[102px] flex flex-col justify-between">
                <div className="flex justify-between items-center text-[9px] sm:text-[10px] text-white/80">
                  <span className="font-medium text-[10px] sm:text-[11px] leading-tight">Year to Date</span>
                  <span className="text-[7px] sm:text-[8px] text-white/70 bg-white/15 px-1 py-0.5 rounded">YTD</span>
                </div>
                <span className="text-base sm:text-xl font-bold text-white tracking-tight leading-tight">
                  $1,200.18
                </span>
                <div>
                  <span className="inline-block bg-[#D4FB20] text-[#040819] text-[8px] sm:text-[9px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full">
                    +12%
                  </span>
                </div>
              </div>
            </div>

            {/* Creator Image */}
            <div className="relative w-[280px] sm:w-[380px] h-[350px] sm:h-[460px] z-20">
              <Image
                src="/assets/images/why-bytespace-creator-woman.png"
                alt="Creator with tablet and headset"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Happy Students Card */}
            <div className="absolute right-1 sm:right-[6px] bottom-[100px] sm:bottom-[148px] z-30 bg-white/95 backdrop-blur-md rounded-[15px] sm:rounded-[18px] border border-[#CED0D3] p-2.5 sm:p-3.5 shadow-xl w-[180px] sm:w-[215px] h-[78px] sm:h-[92px] flex flex-col justify-between">
              <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                <span className="text-[11px] sm:text-[13px] font-semibold text-[#040819]">
                  Happy Students
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#4F4F4F] font-medium flex items-center gap-1">
                  4.8 <span className="text-yellow-400">★</span>
                </span>
              </div>
              <div className="flex items-center -space-x-1 sm:-space-x-1.5">
                <div className="relative w-5 sm:w-7 h-5 sm:h-7 rounded-full overflow-hidden border-1.5 sm:border-2 border-white">
                  <Image
                    src="/assets/images/student-avatar-1.png"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-5 sm:w-7 h-5 sm:h-7 rounded-full overflow-hidden border-1.5 sm:border-2 border-white">
                  <Image
                    src="/assets/images/student-avatar-2.png"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-5 sm:w-7 h-5 sm:h-7 rounded-full overflow-hidden border-1.5 sm:border-2 border-white">
                  <Image
                    src="/assets/images/student-avatar-3.png"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-5 sm:w-7 h-5 sm:h-7 rounded-full overflow-hidden border-1.5 sm:border-2 border-white">
                  <Image
                    src="/assets/images/student-avatar-4.png"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-5 sm:w-7 h-5 sm:h-7 rounded-full bg-[#D4FB20] text-[#040819] text-[7px] sm:text-[9px] font-bold flex items-center justify-center border-1.5 sm:border-2 border-white">
                  25k
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content & Features */}
          <div className="max-w-xl order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-[#040819] leading-[1.2] tracking-tight">
              Create & Manage Courses Easily.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#82868E] leading-relaxed">
              <span className="font-semibold text-[#040819]">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Features Checklist */}
            <div className="mt-8 space-y-4">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#003BE2] flex items-center justify-center shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base font-medium text-[#040819]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
