"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Course {
  id: string;
  title: string;
  author: string;
  thumbnail: string;
  lessons: string;
  duration: string;
  comments: string;
  level: string;
  rating: string;
  price: string;
  studentsCount: string;
}

const COURSES: Course[] = [
  {
    id: "1",
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    thumbnail: "/assets/images/course-figma-basics.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    rating: "4.5",
    price: "$25",
    studentsCount: "25k",
  },
  {
    id: "2",
    title: "Build Digital Asset",
    author: "purepearl studio",
    thumbnail: "/assets/images/course-digital-assets.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    rating: "4.5",
    price: "$25",
    studentsCount: "25k",
  },
  {
    id: "3",
    title: "the Power of Big Data",
    author: "purepearl studio",
    thumbnail: "/assets/images/course-big-data.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    rating: "4.5",
    price: "$25",
    studentsCount: "25k",
  },
  {
    id: "4",
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    thumbnail: "/assets/images/course-productivity.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    rating: "4.5",
    price: "$25",
    studentsCount: "25k",
  },
  {
    id: "5",
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    thumbnail: "/assets/images/course-money-management.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    rating: "4.5",
    price: "$25",
    studentsCount: "25k",
  },
  {
    id: "6",
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    thumbnail: "/assets/images/course-startup-success.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    rating: "4.5",
    price: "$25",
    studentsCount: "25k",
  },
];

const ROW1_TABS = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
];

const ROW2_TABS = [
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
];

const ROW3_TABS = [
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export default function PopularCourses() {
  const [activeTab, setActiveTab] = useState("Featured");

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-[#040819] leading-[1.2] tracking-tight">
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#82868E] leading-relaxed max-w-2xl mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-col items-center gap-3 mb-14">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {ROW1_TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#D4FB20] text-[#040819] shadow-sm font-semibold"
                      : "bg-[#F5F5F6] text-[#040819] hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {ROW2_TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#D4FB20] text-[#040819] shadow-sm font-semibold"
                      : "bg-[#F5F5F6] text-[#040819] hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {ROW3_TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#D4FB20] text-[#040819] shadow-sm font-semibold"
                      : "bg-[#F5F5F6] text-[#040819] hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
            <button className="text-sm font-semibold text-[#003BE2] hover:underline px-3 py-2">
              + More
            </button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-[24px] border border-[#CED0D3] p-4 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              {/* Thumbnail Container */}
              <div className="relative w-full aspect-[341/195] rounded-xl overflow-hidden mb-4">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Badges Overlay */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 text-[11px] font-medium text-[#4F4F4F]">
                  <span className="bg-[#F6F6F6]/90 backdrop-blur-sm px-2.5 py-1 rounded-full whitespace-nowrap shadow-xs">
                    {course.lessons}
                  </span>
                  <span className="bg-[#F6F6F6]/90 backdrop-blur-sm px-2.5 py-1 rounded-full whitespace-nowrap shadow-xs">
                    {course.duration}
                  </span>
                  <span className="bg-[#F6F6F6]/90 backdrop-blur-sm px-2.5 py-1 rounded-full whitespace-nowrap shadow-xs">
                    {course.comments}
                  </span>
                </div>
              </div>

              {/* Title & Rating */}
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-lg font-semibold text-[#040819] leading-snug truncate">
                  {course.title}
                </h3>
                <div className="flex items-center gap-1 text-sm text-[#4F4F4F] shrink-0 font-medium">
                  <span>{course.rating}</span>
                  <svg
                    className="w-4 h-4 fill-none stroke-[#CED0D3]"
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
              <p className="text-xs text-[#4F4F4F] mb-4">
                by{" "}
                <Link
                  href="#"
                  className="text-[#003BE2] hover:underline transition-colors"
                >
                  {course.author}
                </Link>
              </p>

              {/* Meta: Level + Students */}
              <div className="flex items-center justify-between mb-4">
                {/* Level badge */}
                <div className="inline-flex items-center gap-1.5 bg-[#F5F5F6] text-[#4B4C53] text-xs font-medium px-3 py-1.5 rounded-full">
                  <svg
                    className="w-3.5 h-3.5 fill-[#4B4C53]"
                    viewBox="0 0 16 16"
                  >
                    <rect x="2" y="10" width="2.5" height="4" rx="0.5" />
                    <rect x="6" y="7" width="2.5" height="7" rx="0.5" />
                    <rect x="10" y="4" width="2.5" height="10" rx="0.5" />
                  </svg>
                  <span>{course.level}</span>
                </div>

                {/* Student avatars */}
                <div className="flex items-center -space-x-1.5">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/assets/images/student-avatar-1.png"
                      alt="Student"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-6 h-6 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/assets/images/student-avatar-2.png"
                      alt="Student"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-6 h-6 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/assets/images/student-avatar-3.png"
                      alt="Student"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-6 h-6 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/assets/images/student-avatar-4.png"
                      alt="Student"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#D4FB20] text-[#040819] text-[9px] font-bold flex items-center justify-center border-2 border-white">
                    {course.studentsCount}
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="pt-3 border-t border-gray-100 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-[#003BE2]">
                  {course.price}
                </span>
                <span className="text-xs text-[#4F4F4F]">/lifetime</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
