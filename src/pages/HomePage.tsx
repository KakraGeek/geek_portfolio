// src/pages/HomePage.tsx

import DesignPhilosophyCard from "@/components/DesignPhilosophyCard";
import WorkingProcessCard from "@/components/WorkingProcessCard";
import WorkSamplesCard from "@/components/WorkSamplesCard";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-radiant-blue mb-4">
          The Geek Toolbox
        </h1>
        <p className="text-lg md:text-xl text-dark-text px-4">
          Custom digital tools | WebDev for professionals, teams, and entrepreneurs
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        <DesignPhilosophyCard />
        <WorkingProcessCard />
      </div>
      
      <WorkSamplesCard />
    </div>
  );
}
