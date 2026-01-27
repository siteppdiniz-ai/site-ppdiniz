import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { WhoIsFor } from "@/components/sections/WhoIsFor";
import { HowWeHelp } from "@/components/sections/HowWeHelp";
import { Testimonials } from "@/components/sections/Testimonials";
import { LatestNews } from "@/components/sections/LatestNews";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Solutions />
      <WhoIsFor />
      <HowWeHelp />
      <Testimonials />
      <LatestNews />
    </div>
  );
}
