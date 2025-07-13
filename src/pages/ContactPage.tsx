// ContactPage.tsx
// This file contains the ContactPage component, which displays the contact form and contact information for the portfolio website.

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Handshake, Mail, Phone, Smartphone, CheckCircle, XCircle, Send } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/manjrknn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-radiant-blue mb-6">
          Contact Me
        </h1>
        <p className="text-xl text-dark-text">
          Let's Build Something Together
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Form Card with gradient background and shadow */}
        <Card className="card border-l-4 border-radiant-blue bg-gradient-to-br from-blue-50 to-white shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-radiant-blue">
              📄 Get In Touch
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-dark-text mb-6">
              Got a project in mind? Need help with a workflow? Or just want to say hello?
            </p>
            {/* Contact form with improved focus styles */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                className="input-field w-full focus:border-2 focus:border-radiant-blue focus:ring-2 focus:ring-blue-200"
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                className="input-field w-full focus:border-2 focus:border-radiant-blue focus:ring-2 focus:ring-blue-200"
                required
              />
              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                className="input-field w-full focus:border-2 focus:border-radiant-blue focus:ring-2 focus:ring-blue-200"
              />
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows={4}
                className="input-field w-full resize-none focus:border-2 focus:border-radiant-blue focus:ring-2 focus:ring-blue-200"
                required
              ></textarea>
              {/* Improved Send Message button with icon and hover effect */}
              <Button 
                type="submit" 
                className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-3 hover:bg-orange-600 hover:scale-105 transition-all duration-200"
                disabled={isSubmitting}
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {/* Status Messages with icon and fade-in */}
              {status === "success" && (
                <div className="p-3 bg-fresh-mint text-white rounded-lg text-center flex items-center justify-center gap-2 animate-fade-in">
                  <CheckCircle className="w-6 h-6 text-white" />
                  <span>Thank you for reaching out! I'll get back to you shortly.</span>
                </div>
              )}
              {status === "error" && (
                <div className="p-3 bg-error-red text-white rounded-lg text-center flex items-center justify-center gap-2 animate-fade-in">
                  <XCircle className="w-6 h-6 text-white" />
                  <span>Oops! Something went wrong. Please try again.</span>
                </div>
              )}
              <style>{`
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                .animate-fade-in { animation: fade-in 0.4s; }
              `}</style>
            </form>
          </CardContent>
        </Card>
        {/* Contact Info Card with icons and improved spacing */}
        <Card className="card border-l-4 border-warm-coral bg-gradient-to-br from-orange-50 to-white shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-warm-coral">
              📞 Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-dark-text mb-2">Email:</h4>
              <div className="space-y-1">
                <a 
                  href="mailto:desmond.asiedu@gmail.com" 
                  className="flex items-center gap-2 text-radiant-blue hover:text-orange-600 transition-colors duration-200 block hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  desmond.asiedu@gmail.com
                </a>
                <a 
                  href="mailto:thegeektoolbox@gmail.com" 
                  className="flex items-center gap-2 text-radiant-blue hover:text-orange-600 transition-colors duration-200 block hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  thegeektoolbox@gmail.com
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-dark-text mb-2">Phone / WhatsApp:</h4>
              <div className="space-y-1">
                <a 
                  href="tel:+233244299095" 
                  className="flex items-center gap-2 text-radiant-blue hover:text-orange-600 transition-colors duration-200 block hover:scale-105"
                >
                  <Smartphone className="w-5 h-5" />
                  +233 (0)24-429-9095
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-dark-text mb-2">Alternate Phone:</h4>
              <div className="space-y-1">
                <a 
                  href="tel:+233202113633" 
                  className="flex items-center gap-2 text-radiant-blue hover:text-orange-600 transition-colors duration-200 block hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  020-211-3633
                </a>
                <p className="text-dark-text text-sm">(Phone calls only)</p>
              </div>
            </div>
            {/* Collaboration encouragement box remains unchanged */}
            <div className="bg-sky-teal/10 text-dark-text font-bold px-6 py-4 rounded-xl shadow my-6 flex flex-col sm:flex-row items-center sm:items-start justify-center gap-2 transition-transform duration-200 hover:scale-105 hover:brightness-105 text-center sm:text-left">
              <span className="flex items-center justify-center w-14 h-14 rounded-full border border-black mb-2 sm:mb-0 sm:mr-4">
                <Handshake className="w-12 h-12" aria-label="Collaboration" />
              </span>
              Don’t let bottlenecks slow you down. Let’s fix them—side by side.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
