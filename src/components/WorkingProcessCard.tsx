// src/components/WorkingProcessCard.tsx

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const processSteps = [
  {
    step: "Step 1: We Talk",
    description: "You tell me what's not working or what you dream of building. I listen — deeply.",
    color: "bg-white bg-opacity-25"
  },
  {
    step: "Step 2: I Sketch", 
    description: "I turn your ideas into a clickable prototype you can explore and tweak.",
    color: "bg-white bg-opacity-25"
  },
  {
    step: "Step 3: We Tweak Together",
    description: "You poke holes, I patch. We loop this as long as it takes.",
    color: "bg-white bg-opacity-25"
  },
  {
    step: "Step 4: We Launch",
    description: "And when it's live, I'm still around. Real-world feedback matters — and I keep refining.",
    color: "bg-white bg-opacity-25"
  }
];

export default function WorkingProcessCard() {
  return (
    <div className="rounded-card shadow-lg bg-white p-8 md:p-12 mb-8 flex flex-col gap-6">
      {/* Card Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-radiant-blue mb-4">How I Work</h2>
      {/* Card Content */}
      <div className="space-y-6">
        {processSteps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className={`w-5 h-5 rounded-full ${step.color} flex-shrink-0 mt-1`}></div>
            <div>
              <h4 className="font-bold text-xl md:text-2xl text-radiant-blue mb-1">{step.step}</h4>
              <p className="text-dark-text text-lg leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
        <div className="mt-8 p-4 bg-soft-gray rounded-lg">
          <p className="text-base font-medium text-dark-text leading-relaxed">
            Feedback is continuous, not occasional. It’s how we get it right—together.
          </p>
        </div>
      </div>
    </div>
  );
}