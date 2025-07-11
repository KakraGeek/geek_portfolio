// src/components/DesignPhilosophyCard.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DesignPhilosophyCard() {
  return (
    <Card className="card card-blue hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
           Design Philosophy
        </CardTitle>
      </CardHeader>
      <CardContent>
        <blockquote className="text-lg md:text-xl font-medium text-white leading-relaxed">
          "I design with your users in mind and your voice at the center. Every decision I make — from layout to logic — reflects your goals, your brand, and your feedback. I don't impose a solution. I build the solution you need, your way, with UX as the compass."
        </blockquote>
      </CardContent>
    </Card>
  );
}