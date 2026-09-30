import React from "react";
import Image from "next/image";

export default function AuthShowcase() {
  return (
    <div className="w-[320px] h-[345px] sm:w-[415px] sm:h-[445px] md:w-[485px] md:h-[520px] lg:w-[548px] lg:h-[585px] relative">
      <div className="w-[548px] h-[585px] absolute top-0 left-0 origin-top-left scale-[0.584] sm:scale-[0.757] md:scale-[0.885] lg:scale-100 pointer-events-none select-none">
        {/* Back Course Card: Build Digital Asset */}
        <div className="absolute left-[25px] top-[89px] w-[373px] h-[384px] bg-white rounded-[24px] p-4 shadow-xl z-10">
          <div className="relative w-full h-[195px] rounded-[16px] overflow-hidden bg-gray-900">
            <Image
              src="/assets/images/auth-course-digital-asset.png"
              alt="Build Digital Asset"
              fill
              className="object-cover"
              sizes="341px"
            />
            <div className="absolute bottom-3 left-3 bg-[#F5F5F5]/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium text-[#4F4F4F]">
              17 Lessons
            </div>
          </div>

          <div className="pt-4">
            <h3 className="font-poppins font-semibold text-[18px] text-[#242528] leading-tight">
              Build Digital Asset
            </h3>
            <p className="font-satoshi text-[14px] text-[#82868E] mt-0.5">
              by purepearl studio
            </p>

            <div className="flex items-center gap-3 pt-3">
              <div className="flex items-center gap-1.5 bg-[#F5F5F6] px-3 py-1.5 rounded-lg text-xs font-medium text-[#4B4C53]">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="18" y1="20" x2="18" y2="4" />
                  <line x1="12" y1="20" x2="12" y2="10" />
                  <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
                Beginner
              </div>

              <div className="flex items-center">
                <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src="/assets/images/student-avatar-1.png"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-8 h-8 rounded-full border-2 border-white -ml-2 overflow-hidden">
                  <Image
                    src="/assets/images/student-avatar-2.png"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-8 h-8 rounded-full border-2 border-white -ml-2 overflow-hidden">
                  <Image
                    src="/assets/images/student-avatar-3.png"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-8 h-8 rounded-full border-2 border-white -ml-2 overflow-hidden">
                  <Image
                    src="/assets/images/student-avatar-4.png"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-black text-white text-[11px] font-bold flex items-center justify-center -ml-2 border-2 border-white">
                  26+
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3">
              <div>
                <span className="font-bold text-[18px] text-[#300B6B]">$25</span>
                <span className="text-xs text-[#82868E]">/lifetime</span>
              </div>
              <div className="flex items-center gap-1 text-sm font-semibold text-[#4B4C53]">
                4.5
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#D4FB20"
                  stroke="#D4FB20"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Front Course Card: the Power of Big Data */}
        <div className="absolute left-[136px] top-0 w-[373px] h-[384px] bg-white rounded-[24px] p-4 shadow-2xl z-20">
          <div className="relative w-full h-[195px] rounded-[16px] overflow-hidden bg-gray-900">
            <Image
              src="/assets/images/auth-course-big-data.png"
              alt="the Power of Big Data"
              fill
              className="object-cover"
              sizes="341px"
            />
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
              <span className="bg-[#F5F5F5]/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium text-[#4F4F4F]">
                17 Lessons
              </span>
              <span className="bg-[#F5F5F5]/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium text-[#4F4F4F]">
                2 hours 16 mins
              </span>
              <span className="bg-[#F5F5F5]/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium text-[#4F4F4F]">
                59 Comments
              </span>
            </div>
          </div>

          <div className="pt-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-poppins font-semibold text-[18px] text-[#242528] leading-tight">
                  the Power of Big Data
                </h3>
                <p className="font-satoshi text-[14px] text-[#82868E] mt-0.5">
                  by purepearl studio
                </p>
              </div>
              <div className="flex items-center gap-1 text-sm font-semibold text-[#4B4C53]">
                4.5
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#D4FB20"
                  stroke="#D4FB20"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <div className="flex items-center gap-1.5 bg-[#F5F5F6] px-3 py-1.5 rounded-lg text-xs font-medium text-[#4B4C53]">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="18" y1="20" x2="18" y2="4" />
                  <line x1="12" y1="20" x2="12" y2="10" />
                  <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
                Beginner
              </div>

              <div className="flex items-center">
                <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src="/assets/images/student-avatar-1.png"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-8 h-8 rounded-full border-2 border-white -ml-2 overflow-hidden">
                  <Image
                    src="/assets/images/student-avatar-2.png"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-8 h-8 rounded-full border-2 border-white -ml-2 overflow-hidden">
                  <Image
                    src="/assets/images/student-avatar-3.png"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-8 h-8 rounded-full border-2 border-white -ml-2 overflow-hidden">
                  <Image
                    src="/assets/images/student-avatar-4.png"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-black text-white text-[11px] font-bold flex items-center justify-center -ml-2 border-2 border-white">
                  26+
                </div>
              </div>
            </div>

            <div className="pt-3">
              <span className="font-bold text-[18px] text-[#300B6B]">$25</span>
              <span className="text-xs text-[#82868E]">/lifetime</span>
            </div>
          </div>
        </div>

        {/* Happy Students Badge Card */}
        <div className="absolute left-[251px] top-[435px] w-[258px] h-[123px] bg-[#D4FB20] rounded-[20px] p-4 shadow-2xl z-30 flex flex-col justify-between">
          <div>
            <h4 className="font-poppins font-semibold text-[16px] text-[#242528] leading-tight whitespace-nowrap">
              Happy Students
            </h4>
            <div className="flex items-center gap-1 mt-1 text-[13px] font-medium text-[#4B4C53]">
              <span>4.5 (240)</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#003BE2"
                stroke="#003BE2"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative w-[30px] h-[30px] rounded-full border-2 border-[#D4FB20] overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/student-avatar-1.png"
                alt="Student"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[30px] h-[30px] rounded-full border-2 border-[#D4FB20] -ml-2 overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/student-avatar-2.png"
                alt="Student"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[30px] h-[30px] rounded-full border-2 border-[#D4FB20] -ml-2 overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/student-avatar-3.png"
                alt="Student"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[30px] h-[30px] rounded-full border-2 border-[#D4FB20] -ml-2 overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/student-avatar-4.png"
                alt="Student"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[30px] h-[30px] rounded-full border-2 border-[#D4FB20] -ml-2 overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/student-avatar-5.png"
                alt="Student"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[30px] h-[30px] rounded-full border-2 border-[#D4FB20] -ml-2 overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/student-avatar-6.png"
                alt="Student"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[30px] h-[30px] rounded-full border-2 border-[#D4FB20] -ml-2 overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/testimonial-avatar-sarah.png"
                alt="Student"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-[30px] h-[30px] rounded-full bg-[#242528] text-white text-[10px] font-bold flex items-center justify-center -ml-2 border-2 border-[#D4FB20] flex-shrink-0">
              2K+
            </div>
          </div>
        </div>

        {/* 3D Torus Particle */}
        <div className="absolute left-[20px] top-[10px] w-[146px] h-[146px] z-30">
          <Image
            src="/assets/images/auth-particle-torus-lime.png"
            alt="3D Lime Torus"
            width={146}
            height={146}
            className="w-full h-full object-contain"
          />
        </div>

        {/* 3D Pyramid Particle */}
        <div className="absolute left-0 top-[397px] w-[188px] h-[188px] z-30">
          <Image
            src="/assets/images/auth-particle-pyramid-lime.png"
            alt="3D Lime Pyramid"
            width={188}
            height={188}
            className="w-full h-full object-contain"
          />
        </div>

        {/* 3D Zigzag Particle */}
        <div className="absolute left-[373px] top-[321px] w-[175px] h-[175px] z-40 rotate-[-45deg]">
          <Image
            src="/assets/images/auth-particle-zigzag-white.png"
            alt="3D White Zigzag"
            width={175}
            height={175}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
