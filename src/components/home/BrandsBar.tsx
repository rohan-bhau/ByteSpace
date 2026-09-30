import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';

const partnerBrands = [
  { id: 1, name: 'Partner Brand 1', src: '/assets/images/partner-logo-1.png', width: 167, height: 40 },
  { id: 2, name: 'Partner Brand 2', src: '/assets/images/partner-logo-2.png', width: 168, height: 40 },
  { id: 3, name: 'Partner Brand 3', src: '/assets/images/partner-logo-3.png', width: 170, height: 40 },
  { id: 4, name: 'Partner Brand 4', src: '/assets/images/partner-logo-4.png', width: 170, height: 40 },
  { id: 5, name: 'Partner Brand 5', src: '/assets/images/partner-logo-5.png', width: 169, height: 41 },
];

export default function BrandsBar() {
  return (
    <section className="bg-[#f5f5f6] py-10 sm:py-12 md:py-14 border-b border-gray-200/60">
      <Container>
        <div className="flex items-center justify-between gap-8 flex-wrap lg:flex-nowrap">
          {partnerBrands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                className="h-7 sm:h-8 lg:h-9 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
