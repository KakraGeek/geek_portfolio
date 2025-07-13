// src/pages/HomePage.tsx

import DesignPhilosophyCard from "@/components/DesignPhilosophyCard";
import WorkingProcessCard from "@/components/WorkingProcessCard";
import WorkSamplesCard from "@/components/WorkSamplesCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Section with background image, overlay, and CTA */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center text-center mb-12">
        {/* Background image */}
        <img
          src="/hero_image_1.jpg"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ filter: 'brightness(0.7)' }}
        />
        {/* Overlay: white + touch of green for subtle effect */}
        <div className="absolute inset-0 bg-white/60 z-10" />
        <div className="absolute inset-0 bg-green-100/20 z-20" />
        {/* Hero content */}
        <div className="relative z-30 flex flex-col items-center justify-center w-full px-4 py-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] mb-4 animate-slide-down">
            The Geek Toolbox
          </h1>
          <p className="text-lg md:text-2xl text-white font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] mb-8 animate-fade-in delay-150">
            Custom digital tools | WebDev for professionals, teams, and entrepreneurs
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-warm-coral text-white font-extrabold px-8 py-4 rounded-full shadow-lg text-lg hover:bg-orange-600 hover:scale-105 transition-all duration-200 animate-fade-in delay-300 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
          >
            Contact Me
          </a>
        </div>
        {/* Animations keyframes */}
        <style>{`
          @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
          .animate-fade-in { animation: fade-in 1s both; }
          .animate-fade-in.delay-150 { animation-delay: 0.15s; }
          .animate-fade-in.delay-300 { animation-delay: 0.3s; }
          @keyframes slide-down { from { transform: translateY(-40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
          .animate-slide-down { animation: slide-down 0.8s cubic-bezier(0.4,0,0.2,1) both; }
        `}</style>
      </section>
      {/* Wavy SVG divider */}
      <div className="-mt-8 mb-8">
        <svg viewBox="0 0 1440 100" className="w-full h-16" preserveAspectRatio="none">
          <path fill="#fff" fillOpacity="1" d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,101.3C672,107,768,85,864,80C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      {/* Tabs for Design Philosophy and How I Work */}
      <Tabs defaultValue="design" className="w-full">
        {/*
          TabsList is styled with a border, rounded corners, subtle shadow, and a light background
          to make it stand out on a white page.
        */}
        <TabsList className="mb-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
          {/*
            TabsTrigger now matches the card backgrounds:
            - Design Philosophy: blue gradient
            - How I Work: orange gradient
            - Both: white text, bold, shadow on active
            - Inactive: dark gray text
          */}
          <TabsTrigger
            value="design"
            className="
              data-[state=active]:bg-gradient-to-br
              data-[state=active]:from-blue-400
              data-[state=active]:to-blue-600
              data-[state=active]:text-white
              data-[state=active]:font-bold
              data-[state=inactive]:text-gray-700
              data-[state=active]:shadow
              transition-all
            "
          >
            Design Philosophy
          </TabsTrigger>
          <TabsTrigger
            value="work"
            className="
              data-[state=active]:bg-gradient-to-br
              data-[state=active]:from-orange-400
              data-[state=active]:to-orange-600
              data-[state=active]:text-white
              data-[state=active]:font-bold
              data-[state=inactive]:text-gray-700
              data-[state=active]:shadow
              transition-all
            "
          >
            How I Work
          </TabsTrigger>
        </TabsList>
        <TabsContent value="design">
          {/* Design Philosophy section */}
          <DesignPhilosophyCard />
        </TabsContent>
        <TabsContent value="work">
          {/* How I Work section */}
          <WorkingProcessCard />
        </TabsContent>
      </Tabs>
      {/* Work Samples section remains below */}
      <WorkSamplesCard />
    </div>
  );
}
