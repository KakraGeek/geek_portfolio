// src/pages/ContactPage.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Handshake } from "lucide-react";

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
        {/* Contact Form Card */}
        <Card className="card border-l-4 border-radiant-blue">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-radiant-blue">
              📄 Get In Touch
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-dark-text mb-6">
              Got a project in mind? Need help with a workflow? Or just want to say hello?
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                className="input-field w-full"
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                className="input-field w-full"
                required
              />
              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                className="input-field w-full"
              />
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows={4}
                className="input-field w-full resize-none"
                required
              ></textarea>
              <Button 
                type="submit" 
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              
              {/* Status Messages */}
              {status === "success" && (
                <div className="p-3 bg-fresh-mint text-white rounded-lg text-center">
                  ✅ Thank you for reaching out! I'll get back to you shortly.
                </div>
              )}
              {status === "error" && (
                <div className="p-3 bg-error-red text-white rounded-lg text-center">
                  ❌ Oops! Something went wrong. Please try again.
                </div>
              )}
            </form>
          </CardContent>
        </Card>
        
        {/* Contact Info Card */}
        <Card className="card border-l-4 border-warm-coral">
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
                  className="text-radiant-blue hover:text-vibrant-yellow transition-colors duration-200 block"
                >
                  desmond.asiedu@gmail.com
                </a>
                <a 
                  href="mailto:thegeektoolbox@gmail.com" 
                  className="text-radiant-blue hover:text-vibrant-yellow transition-colors duration-200 block"
                >
                  thegeektoolbox@gmail.com
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-dark-text mb-2">Phone / WhatsApp:</h4>
              <div className="space-y-1">
                <a 
                  href="tel:+233244299095" 
                  className="text-radiant-blue hover:text-vibrant-yellow transition-colors duration-200 block"
                >
                  +233 (0)24-429-9095
                </a>
                <p className="text-dark-text text-sm">(WhatsApp available)</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-dark-text mb-2">Alternate Phone:</h4>
              <div className="space-y-1">
                <a 
                  href="tel:+233202113633" 
                  className="text-radiant-blue hover:text-vibrant-yellow transition-colors duration-200 block"
                >
                  020-211-3633
                </a>
                <p className="text-dark-text text-sm">(Phone calls only)</p>
              </div>
            </div>
            
            <div className="bg-sky-teal/10 text-dark-text font-bold px-6 py-4 rounded-xl shadow my-6 flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-105 hover:brightness-105 text-left text-justify">
              <span className="flex items-center justify-center w-14 h-14 rounded-full border border-black mr-4">
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
