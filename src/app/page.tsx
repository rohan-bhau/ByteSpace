import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import BrandsBar from "@/components/home/BrandsBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BrandsBar />
      </main>
    </div>
  );
}
