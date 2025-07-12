// src/components/WorkSamplesCard.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const workSamples = [
  {
    title: "Business Management Application for Fashion Industry Artisans",
    description: "A comprehensive business management platform designed for fashion industry artisans. Features dashboard analytics, client management, order tracking, inventory control, payment processing, and detailed reporting — all in one integrated solution.",
    type: "🎨 Sample 1",
    url: "https://efficio-seven.vercel.app/",
    external: true
  },
  {
    title: "Networking Website and Application for an Association", 
    description: "A professional networking platform designed for association members. Features member profiles, networking tools, event management, communication channels, and collaborative resources to strengthen community connections and professional relationships.",
    type: "🛠️ Sample 2",
    url: "https://abneg-portal-pi.vercel.app/",
    external: true
  }
];

export default function WorkSamplesCard() {
  const [selectedProject, setSelectedProject] = useState<typeof workSamples[0] | null>(null);

  const handleViewLiveProject = (sample: typeof workSamples[0]) => {
    if (sample.external && sample.url) {
      window.open(sample.url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleViewModal = (sample: typeof workSamples[0]) => {
    setSelectedProject(sample);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Card className="card card-yellow hover:scale-105 transition-transform duration-300">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
            🧪 Featured Work Samples
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {workSamples.map((sample, index) => (
            <div key={index} className="border-b border-white border-opacity-30 pb-4 last:border-b-0">
              <h4 className="text-xl font-bold text-white mb-3">
                {sample.type}: {sample.title}
              </h4>
              <p className="text-white text-lg leading-relaxed mb-4">{sample.description}</p>
              <div className="flex gap-2 flex-wrap">
                <Button 
                  onClick={() => handleViewLiveProject(sample)}
                  className="bg-white text-yellow-600 hover:bg-gray-100 transition-colors duration-200 font-semibold"
                >
                  View Live Project
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-yellow-600 font-semibold"
                  onClick={() => handleViewModal(sample)}
                >
                  View in Modal
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-radiant-blue">
                  {selectedProject.type}: {selectedProject.title}
                </h3>
                <Button 
                  onClick={closeModal}
                  variant="outline"
                  className="text-dark-text hover:bg-soft-gray"
                >
                  ✕
                </Button>
              </div>
              {/* Show screenshot for each work sample using direct title comparison for reliability */}
              <div className="w-full flex flex-col items-center">
                {/* Make sure the screenshot files are in the public directory and named exactly as referenced */}
                <img
                  src={selectedProject.title === workSamples[0].title ? "/efficio_homepage.png" : "/abneg_homepage.png"}
                  alt={selectedProject.title + ' homepage screenshot'}
                  className="w-full max-h-[60vh] object-contain rounded-lg border border-soft-gray mb-4"
                />
                {/* Show the live preview message for both work samples */}
                <p className="text-warm-coral font-semibold text-center mb-4">
                  Live preview not available due to security settings. Please use the button below to visit the site.
                </p>
              </div>
              <div className="flex gap-2 pt-2">
                <Button 
                  onClick={() => handleViewLiveProject(selectedProject)}
                  className="bg-radiant-blue text-white hover:bg-vibrant-yellow hover:text-dark-text transition-colors duration-200"
                >
                  Visit Live Site
                </Button>
                <Button 
                  onClick={closeModal}
                  variant="outline"
                  className="border-warm-coral text-warm-coral hover:bg-warm-coral hover:text-white"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
  