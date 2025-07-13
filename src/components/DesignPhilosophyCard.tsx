// src/components/DesignPhilosophyCard.tsx

import React from "react";

export default function DesignPhilosophyCard() {
  return (
    <div className="rounded-card shadow-lg bg-white p-8 md:p-12 mb-8 flex flex-col gap-6">
      {/* Card Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-radiant-blue mb-4">Design Philosophy</h2>
      {/* Card Content */}
      <p className="text-lg md:text-xl leading-relaxed text-dark-text mb-4">
        My approach to design is simple: <strong className="text-warm-coral">put people first</strong>. Every pixel, every interaction, and every workflow is crafted to make life easier for real users.
      </p>
      <ul className="space-y-3 pl-5 list-disc text-lg leading-relaxed">
        <li><span className="font-semibold text-radiant-blue">Empathy:</span> I design with the user’s needs, frustrations, and goals in mind.</li>
        <li><span className="font-semibold text-radiant-blue">Clarity:</span> I believe in clear, intuitive interfaces that guide users naturally.</li>
        <li><span className="font-semibold text-radiant-blue">Consistency:</span> I use familiar patterns and visual cues to build trust and reduce confusion.</li>
      </ul>
    </div>
  );
}