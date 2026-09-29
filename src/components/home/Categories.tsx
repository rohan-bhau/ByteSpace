import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  svgPath: string;
  href: string;
}

const CATEGORIES: Category[] = [
  {
    id: "design",
    name: "Design",
    svgPath: "/assets/images/category-card-design.svg",
    href: "#",
  },
  {
    id: "development",
    name: "Development",
    svgPath: "/assets/images/category-card-development.svg",
    href: "#",
  },
  {
    id: "it-software",
    name: "IT & Software",
    svgPath: "/assets/images/category-card-it-software.svg",
    href: "#",
  },
  {
    id: "business",
    name: "Business",
    svgPath: "/assets/images/category-card-business.svg",
    href: "#",
  },
  {
    id: "marketing",
    name: "Marketing",
    svgPath: "/assets/images/category-card-marketing.svg",
    href: "#",
  },
  {
    id: "photography",
    name: "Photography",
    svgPath: "/assets/images/category-card-photography.svg",
    href: "#",
  },
];

export default function Categories() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-[950px] mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-[#040819] leading-[1.2] tracking-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#82868E] leading-relaxed max-w-[840px] mx-auto">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6 justify-items-center">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group block w-[167px] h-[167px] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="relative w-[167px] h-[167px]">
                <Image
                  src={category.svgPath}
                  alt={category.name}
                  width={167}
                  height={167}
                  className="w-full h-full drop-shadow-none group-hover:drop-shadow-md transition-all duration-200"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
