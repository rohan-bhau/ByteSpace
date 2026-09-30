import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import BrandsBar from "@/components/home/BrandsBar";
import PopularCourses from "@/components/home/PopularCourses";
import Categories from "@/components/home/Categories";
import WhyByteSpace from "@/components/home/WhyByteSpace";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BrandsBar />
        <PopularCourses />
        <Categories />
        <WhyByteSpace />
      </main>
    </div>
  );
}
