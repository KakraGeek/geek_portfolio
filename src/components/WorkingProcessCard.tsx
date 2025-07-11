// src/components/WorkingProcessCard.tsx

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
    <Card className="card card-orange hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
           How I Work
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {processSteps.map((step, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`w-5 h-5 rounded-full ${step.color} flex-shrink-0 mt-1`}></div>
            <div>
              <h4 className="font-bold text-lg text-white mb-1">{step.step}</h4>
              <p className="text-white text-lg leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
        <div className="mt-6 p-4 bg-white bg-opacity-25 rounded-lg">
          <p className="text-base font-medium text-white">
            ⚠️ <strong>Feedback is never a "step" to me. It's a cycle that powers everything.</strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}