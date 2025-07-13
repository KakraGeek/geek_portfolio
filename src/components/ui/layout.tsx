import { useState } from "react";
import type { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function Layout({ children }: { children?: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-dark-text">
      {/* Header with navigation */}
      <header className="w-full bg-white shadow-lg py-4 px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/Geek_Logo_res-removebg-preview.png"
              alt="The Geek Toolbox Logo"
              className="h-14 w-14 md:h-20 md:w-20 object-contain"
            />
            <span className="text-xl md:text-2xl font-bold text-radiant-blue">
              The Geek Toolbox
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="bg-radiant-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">Home</Link>
            <Link to="/about" className="bg-warm-coral text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200 font-semibold">About Me</Link>
            <Link to="/contact" className="bg-fresh-mint text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold">Contact Me</Link>
          </nav>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-radiant-blue hover:bg-blue-700 transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <nav className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="pt-4 pb-2 space-y-2">
            <Link 
              to="/" 
              className="block w-full text-left px-4 py-2 rounded-lg bg-radiant-blue text-white hover:bg-blue-700 transition-colors duration-200 font-semibold"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block w-full text-left px-4 py-2 rounded-lg bg-warm-coral text-white hover:bg-orange-600 transition-colors duration-200 font-semibold"
              onClick={closeMenu}
            >
              About Me
            </Link>
            <Link 
              to="/contact" 
              className="block w-full text-left px-4 py-2 rounded-lg bg-fresh-mint text-white hover:bg-green-600 transition-colors duration-200 font-semibold"
              onClick={closeMenu}
            >
              Contact Me
            </Link>
          </div>
        </nav>
      </header>

      {/* Main content area */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {children || <Outlet />}
      </main>

      {/* Footer */}
      <footer className="w-full bg-dark-text text-white py-6 px-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © The Geek Toolbox 2025. Powered by The Geek Toolbox.
          </p>
        </div>
      </footer>
      {/* Chatbot widget appears on every page */}
      <ChatbotWidget />
    </div>
  );
}

