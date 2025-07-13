import React, { useState } from "react";
import type { ReactNode } from "react";
import { BookOpen, Target } from "lucide-react"; // Example icons

// ExpandableCard: A card that expands/collapses to show or hide its content.
// Props:
// - title: The title shown on the card header
// - children: The content to show when expanded
// - borderColorClass: Tailwind class for the left border color (e.g., 'border-radiant-blue')
// - headerGradientClass: Tailwind class for the header background gradient
// - icon: Optional ReactNode for an icon (defaults provided)
// - defaultExpanded: (optional) if true, card starts expanded
export default function ExpandableCard({
  title,
  children,
  borderColorClass = 'border-soft-gray',
  headerGradientClass = 'bg-gradient-to-br from-blue-50 to-blue-100',
  icon,
  defaultExpanded = false
}: {
  title: string;
  children: React.ReactNode;
  borderColorClass?: string;
  headerGradientClass?: string;
  icon?: ReactNode;
  defaultExpanded?: boolean;
}) {
  // State to track if the card is expanded
  const [expanded, setExpanded] = useState(defaultExpanded);

  // Toggle the expanded state
  const toggleExpand = () => setExpanded((prev) => !prev);

  // Pick a default icon if none provided
  let defaultIcon = <BookOpen className="w-7 h-7 text-radiant-blue mr-3" aria-hidden="true" />;
  if (title.toLowerCase().includes("mission")) {
    defaultIcon = <Target className="w-7 h-7 text-warm-coral mr-3" aria-hidden="true" />;
  }

  return (
    <div
      className={`rounded-card shadow-lg mb-6 transition-all duration-300 bg-white border-l-4 ${expanded ? borderColorClass : 'border-soft-gray'}
        hover:shadow-xl hover:scale-105 hover:z-10`}
      style={{ position: 'relative' }}
    >
      {/* Card Header: Click to expand/collapse */}
      <button
        className={`w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-radiant-blue rounded-t-card ${headerGradientClass} hover:brightness-105 transition-colors`}
        onClick={toggleExpand}
        aria-expanded={expanded}
        aria-controls={`expandable-content-${title.replace(/\s+/g, '-')}`}
      >
        <span className="flex items-center">
          {/* Icon on the left */}
          {icon || defaultIcon}
          <span className="text-2xl font-bold text-radiant-blue">{title}</span>
        </span>
        {/* Animated arrow */}
        <span
          className={`ml-4 transition-transform duration-300 ease-in-out ${expanded ? 'rotate-90' : ''}`}
          aria-hidden="true"
        >
          ▶
        </span>
      </button>
      {/* Card Content: Only show if expanded, with fade-in */}
      {expanded && (
        <div
          id={`expandable-content-${title.replace(/\s+/g, '-')}`}
          className="px-6 py-6 text-dark-text text-lg border-t border-soft-gray bg-white rounded-b-card transition-opacity duration-300 opacity-100 animate-fade-in"
        >
          {children}
        </div>
      )}
      {/* Fade-in animation keyframes (inline for learning) */}
      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.4s; }
      `}</style>
    </div>
  );
} 