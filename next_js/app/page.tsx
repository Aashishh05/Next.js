import ChooseUs from "@/components/ChooseUs";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    
   <HeroSection />
   <FeaturedCourses />
   <ChooseUs />
   
   </div>
  );
}
