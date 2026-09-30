import React from "react";
import Image from "next/image";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/assets/images/testimonial-avatar-sarah.png",
    quote:
      "“ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.”",
  },
  {
    id: "2",
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/assets/images/testimonial-avatar-james.png",
    quote:
      "“I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.”",
  },
  {
    id: "3",
    name: "Alex R.",
    role: "Inspired Creator",
    avatar: "/assets/images/testimonial-avatar-alex.png",
    quote:
      "“As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.”",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-[#FAFAFA] py-20 sm:py-28 overflow-hidden">
      {/* Background Glows */}
      <div
        className="absolute -top-[241px] left-[calc(50%+122px)] w-[1137px] h-[1137px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(212, 251, 32, 0.40) 0%, rgba(212, 251, 32, 0.092) 53%, rgba(212, 251, 32, 0.024) 75%, transparent 100%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-[138px] left-[calc(50%-325px)] w-[672px] h-[672px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(212, 251, 32, 0.60) 0%, rgba(212, 251, 32, 0.138) 53%, rgba(212, 251, 32, 0.036) 75%, transparent 100%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-[149px] left-[calc(50%-1162px)] w-[1137px] h-[1137px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.055) 53%, rgba(0, 59, 226, 0.014) 75%, transparent 100%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 sm:mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-[#040819] leading-[1.2] tracking-tight">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>
          <div>
            <p className="text-sm sm:text-base text-[#4F4F4F] leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-[#CED0D3] p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Avatar */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden mb-4">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-lg font-semibold text-[#040819]">
                  {item.name}
                </h3>
                <p className="text-xs font-semibold text-[#003BE2] mt-0.5 mb-6">
                  {item.role}
                </p>

                {/* Quote */}
                <p className="text-sm sm:text-base text-[#4F4F4F] leading-relaxed font-normal">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
