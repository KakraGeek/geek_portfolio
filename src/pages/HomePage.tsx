// src/pages/HomePage.tsx

import DesignPhilosophyCard from "@/components/DesignPhilosophyCard";
import WorkingProcessCard from "@/components/WorkingProcessCard";
import WorkSamplesCard from "@/components/WorkSamplesCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
