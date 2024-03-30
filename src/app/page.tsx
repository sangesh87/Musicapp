import HeroSection from "@/component/HeroSection";
import Instructors from "@/component/Instructors";
import MusicSchooTestimonialCards from "@/component/TestimonialCards";
import UpcomingWebinars from "@/component/UpcomingWebinars";
import WhyChooseUs from "@/component/WhyChooseUs";
import Featuredcourses from "@/component/featuredcourses";
import Footer from "@/component/footer";
import Image from "next/image";

export default function Home() {
  return (
   <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="text-2xl text-center ">
      </div>
      <HeroSection/>
      <Featuredcourses/>
      <WhyChooseUs/>
      <MusicSchooTestimonialCards/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </div>
  );
}
