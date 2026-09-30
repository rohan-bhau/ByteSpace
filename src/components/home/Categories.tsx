import React from "react";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  href: string;
  viewBox: string;
  icon: React.ReactNode;
}

const CATEGORIES: Category[] = [
  {
    id: "design",
    name: "Design",
    href: "#",
    viewBox: "53.5 36 60 60",
    icon: (
      <>
        <path
          d="M89.86 65.2633L92.215 62.9083L86.59 57.2833L84.235 59.6383L78.025 53.4433C76.855 52.2733 74.95 52.2733 73.78 53.4433L70.93 56.2933C69.76 57.4633 69.76 59.3683 70.93 60.5383L77.125 66.7333L70 73.8733V79.4983H75.625L82.765 72.3583L88.96 78.5533C90.385 79.9783 92.305 79.4533 93.205 78.5533L96.055 75.7033C97.225 74.5333 97.225 72.6283 96.055 71.4583L89.86 65.2633ZM79.27 64.6033L73.06 58.4083L75.895 55.5583L77.8 57.4633L76.03 59.2483L78.145 61.3633L79.93 59.5783L82.105 61.7533L79.27 64.6033ZM91.09 76.4383L84.895 70.2433L87.745 67.3933L89.92 69.5683L88.135 71.3533L90.25 73.4683L92.035 71.6833L93.94 73.5883L91.09 76.4383Z"
          fill="#242528"
        />
        <path
          d="M96.565 58.5583C97.15 57.9733 97.15 57.0283 96.565 56.4433L93.055 52.9333C92.35 52.2283 91.375 52.4983 90.94 52.9333L88.195 55.6783L93.82 61.3033L96.565 58.5583Z"
          fill="#242528"
        />
      </>
    ),
  },
  {
    id: "development",
    name: "Development",
    href: "#",
    viewBox: "53 36 60 60",
    icon: (
      <path
        d="M75.5 55.5H90.5V58.5H93.5V52.5C93.5 50.85 92.15 49.515 90.5 49.515L75.5 49.5C73.85 49.5 72.5 50.85 72.5 52.5V58.5H75.5V55.5ZM88.115 72.885L95 66L88.115 59.115L86 61.245L90.755 66L86 70.755L88.115 72.885ZM80 70.755L75.245 66L80 61.245L77.885 59.115L71 66L77.885 72.885L80 70.755ZM90.5 76.5H75.5V73.5H72.5V79.5C72.5 81.15 73.85 82.5 75.5 82.5H90.5C92.15 82.5 93.5 81.15 93.5 79.5V73.5H90.5V76.5Z"
        fill="#242528"
      />
    ),
  },
  {
    id: "it-software",
    name: "IT & Software",
    href: "#",
    viewBox: "54 35 60 60",
    icon: (
      <path
        d="M96 74C97.65 74 98.985 72.65 98.985 71L99 56C99 54.35 97.65 53 96 53H72C70.35 53 69 54.35 69 56V71C69 72.65 70.35 74 72 74H66V77H102V74H96ZM72 56H96V71H72V56Z"
        fill="#242528"
      />
    ),
  },
  {
    id: "business",
    name: "Business",
    href: "#",
    viewBox: "54 35 60 60",
    icon: (
      <path
        d="M84 57.5V54.5C84 52.85 82.65 51.5 81 51.5H72C70.35 51.5 69 52.85 69 54.5V75.5C69 77.15 70.35 78.5 72 78.5H81C82.65 78.5 84 77.15 84 75.5V72.5H96C97.65 72.5 99 71.15 99 69.5V60.5C99 58.85 97.65 57.5 96 57.5H84ZM72 54.5H81V75.5H72V54.5ZM96 69.5H84V60.5H96V69.5Z"
        fill="#242528"
      />
    ),
  },
  {
    id: "marketing",
    name: "Marketing",
    href: "#",
    viewBox: "54 35 60 60",
    icon: (
      <path
        d="M82.5 68H79.5C79.5 60.545 85.545 54.5 93 54.5V57.5C87.195 57.5 82.5 62.195 82.5 68ZM93 63.5V60.5C88.86 60.5 85.5 63.86 85.5 68H88.5C88.5 65.51 90.51 63.5 93 63.5ZM76.5 53C76.5 51.335 75.165 50 73.5 50C71.835 50 70.5 51.335 70.5 53C70.5 54.665 71.835 56 73.5 56C75.165 56 76.5 54.665 76.5 53ZM83.175 53.75H80.175C79.815 55.88 77.985 57.5 75.75 57.5H71.25C70.005 57.5 69 58.505 69 59.75V63.5H78V60.11C80.79 59.225 82.875 56.765 83.175 53.75ZM94.5 72.5C96.165 72.5 97.5 71.165 97.5 69.5C97.5 67.835 96.165 66.5 94.5 66.5C92.835 66.5 91.5 67.835 91.5 69.5C91.5 71.165 92.835 72.5 94.5 72.5ZM96.75 74H92.25C90.015 74 88.185 72.38 87.825 70.25H84.825C85.125 73.265 87.21 75.725 90 76.61V80H99V76.25C99 75.005 97.995 74 96.75 74Z"
        fill="#242528"
      />
    ),
  },
  {
    id: "photography",
    name: "Photography",
    href: "#",
    viewBox: "54 35 60 60",
    icon: (
      <>
        <path
          d="M96 54.5H91.245L88.5 51.5H79.5L76.755 54.5H72C70.35 54.5 69 55.85 69 57.5V75.5C69 77.15 70.35 78.5 72 78.5H96C97.65 78.5 99 77.15 99 75.5V57.5C99 55.85 97.65 54.5 96 54.5ZM96 75.5H72V57.5H78.075L80.82 54.5H87.18L89.925 57.5H96V75.5Z"
          fill="#242528"
        />
        <path
          d="M84 66.5C85.6569 66.5 87 65.1569 87 63.5C87 61.8431 85.6569 60.5 84 60.5C82.3431 60.5 81 61.8431 81 63.5C81 65.1569 82.3431 66.5 84 66.5Z"
          fill="#242528"
        />
        <path
          d="M88.17 68.87C86.895 68.315 85.485 68 84 68C82.515 68 81.105 68.315 79.83 68.87C78.72 69.35 78 70.43 78 71.645V72.5H90V71.645C90 70.43 89.28 69.35 88.17 68.87Z"
          fill="#242528"
        />
      </>
    ),
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
              className="group flex flex-col items-center justify-center w-[167px] h-[167px] rounded-[24px] border border-[#CED0D3] bg-white transition-all duration-200 hover:-translate-y-1 hover:border-[#003BE2] hover:shadow-lg"
            >
              <div className="w-[60px] h-[60px] rounded-full bg-[#D4FB20] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200">
                <svg
                  viewBox={category.viewBox}
                  className="w-[60px] h-[60px]"
                  aria-hidden="true"
                >
                  {category.icon}
                </svg>
              </div>
              <span className="font-medium text-[16px] text-[#242528] tracking-tight text-center px-2">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
