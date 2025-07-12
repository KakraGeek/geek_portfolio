// src/components/WorkSamplesCard.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@/components/ui/dialog";

const workSamples = [
  {
    title: "Business Management Application",
    description: "Business management for Ghanaian fashion artisans. Effortlessly manage clients, orders, payments, inventory, and view reports—all in one place.",
    type: "🎨 Sample 1",
    url: "https://efficio-seven.vercel.app/",
    external: true,
    borderColor: "border-radiant-blue" // Unique edge color for this card
  },
  {
    title: "Members Portal for an Association", 
    description: "Website for an association with public-facing pages and authenticated access to an application for group management and administrative tasks.",
    type: "🛠️ Sample 2",
    url: "https://abneg-portal-pi.vercel.app/",
    external: true,
    borderColor: "border-warm-coral" // Unique edge color for this card
  }
];

export default function WorkSamplesCard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {workSamples.map((sample, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger asChild>
              {/*
                Add a thick, colored left border to each card using border-l-4 and the sample's borderColor.
                This makes each card stand out on the white background.
              */}
              <div className={`bg-white rounded-xl shadow-md p-6 flex flex-col gap-2 transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer border-l-4 ${sample.borderColor}`}>
                <span className="font-bold text-lg text-radiant-blue flex items-center gap-2">
                  {sample.title}
                </span>
                {/* Always show the description below the title */}
                <span className="text-sm text-dark-text mb-1">{sample.description}</span>
                {/* Row with 'hover for details' and Live View button */}
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">(Hover for details)</span>
                  {/* Live View button opens the sample URL in a new tab */}
                  <a
                    href={sample.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-radiant-blue text-white px-3 py-1 rounded font-semibold text-sm hover:bg-vibrant-yellow hover:text-dark-text transition-colors duration-200"
                  >
                    Live View
                  </a>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-white border border-gray-200 shadow-lg">
              <div className="font-bold text-radiant-blue mb-1">{sample.title}</div>
              <div className="text-sm text-muted-foreground mb-2">{sample.description.slice(0, 80)}...</div>
              {/* Placeholder for tech stack badges (Prompt 3) */}
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">React</span>
                <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">TypeScript</span>
                <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Tailwind CSS</span>
              </div>
              {/* Learn More button opens Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="mt-2 bg-radiant-blue text-white px-4 py-2 rounded hover:bg-vibrant-yellow hover:text-dark-text font-semibold transition-colors duration-200">Learn More</button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl p-6">
                  <DialogClose asChild>
                    <button
                      aria-label="Close"
                      className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-warm-coral font-bold bg-white bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-50 focus:outline-none focus:ring-2 focus:ring-warm-coral"
                    >
                      ×
                    </button>
                  </DialogClose>
                  <h2 className="text-2xl font-bold text-radiant-blue mb-4">{sample.title}</h2>
                  {/* Project screenshot */}
                  <img
                    src={sample.title === workSamples[0].title ? "/efficio_homepage.png" : "/abneg_homepage.png"}
                    alt={sample.title + ' homepage screenshot'}
                    className="max-h-60 w-auto mx-auto rounded-lg border border-soft-gray mb-4"
                  />
                  <p className="mb-4 text-dark-text">{sample.description}</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <a href={sample.url} target="_blank" rel="noopener noreferrer" className="bg-radiant-blue text-white px-4 py-2 rounded hover:bg-vibrant-yellow hover:text-dark-text font-semibold transition-colors duration-200">Live Demo</a>
                  </div>
                  {/* Placeholder for tech stack badges (Prompt 3) */}
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">React</span>
                    <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">TypeScript</span>
                    <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Tailwind CSS</span>
                  </div>
                </DialogContent>
              </Dialog>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
}
  