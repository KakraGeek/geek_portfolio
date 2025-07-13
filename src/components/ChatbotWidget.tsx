import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

// Helper: Parse markdown Q&A pairs from the loaded file
function parseMarkdownQA(md: string) {
  // Split by ---
  const blocks = md.split(/---+/g);
  const qaPairs: { question: string; answer: string }[] = [];
  for (const block of blocks) {
    const userMatch = block.match(/\*\*👤 User:\*\*([\s\S]*?)\*\*🤖 GeekBot:\*\*([\s\S]*)/);
    if (userMatch) {
      const question = userMatch[1].replace(/^[\s:]+|\s+$/g, "").replace(/\n/g, " ");
      const answer = userMatch[2].replace(/^[\s:]+|\s+$/g, "").replace(/\n/g, " ");
      qaPairs.push({ question, answer });
    }
  }
  return qaPairs;
}

// Helper: Find the best matching answer
function getBotAnswer(userInput: string, qaPairs: { question: string; answer: string }[]) {
  const input = userInput.toLowerCase();
  // Try exact match or substring match
  for (const qa of qaPairs) {
    if (input.includes(qa.question.toLowerCase().slice(0, 10))) {
      return qa.answer;
    }
  }
  // Try keyword match
  for (const qa of qaPairs) {
    const qWords = qa.question.toLowerCase().split(/\W+/);
    if (qWords.some(word => word && input.includes(word))) {
      return qa.answer;
    }
  }
  return "I'm not sure about that, but you can ask about my background, services, process, or how to contact me!";
}

// Contact form logic (reused from ContactPage)
function ChatbotContactForm() {
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
        headers: { Accept: "application/json" },
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
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto">
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
      <Button
        type="submit"
        className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-3 hover:bg-orange-600 hover:scale-105 transition-all duration-200"
        disabled={isSubmitting}
      >
        <Send className="w-5 h-5" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
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
  );
}

export default function ChatbotWidget() {
  // State for open/close, messages, input, and loaded Q&A
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: `Hi! 👋 I’m GeekBot. You can ask me things like:\n• What services do you offer?\n• How can I contact you?\n• What’s your design process?` }
  ]);
  const [input, setInput] = useState("");
  const [qaPairs, setQaPairs] = useState<{ question: string; answer: string }[]>([]);
  const [showContact, setShowContact] = useState(false); // modal state
  const [userEmail, setUserEmail] = useState(""); // email state
  const [emailInput, setEmailInput] = useState(""); // input for email prompt
  const [emailError, setEmailError] = useState(""); // error message
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Fetch and parse the markdown Q&A on mount
  useEffect(() => {
    fetch("/geekbot_conversations.md")
      .then(res => res.text())
      .then(md => setQaPairs(parseMarkdownQA(md)));
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  // Email validation helper
  function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Handle email submit
  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidEmail(emailInput)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setUserEmail(emailInput);
    setEmailError("");
  }

  // Handle sending a message
  function handleSend(e?: React.FormEvent) {
    if (e) e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((msgs) => [...msgs, { from: "user", text: trimmed }]);
    setInput("");
    // Bot replies after a short delay
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: getBotAnswer(trimmed, qaPairs) }
      ]);
    }, 600);
  }

  return (
    <>
      {/* Floating button */}
      {!open && (
        <div className="group">
          <button
            className="fixed bottom-6 right-6 z-50 bg-radiant-blue text-white rounded-full p-4 shadow-lg hover:bg-warm-coral transition-colors flex items-center justify-center"
            onClick={() => setOpen(true)}
            aria-label="Need help? Chat with us!"
          >
            <MessageCircle className="w-7 h-7" />
          </button>
          {/* Tooltip for non-tech-savvy users */}
          <span className="pointer-events-none select-none fixed bottom-20 right-6 bg-dark-text text-white text-xs rounded px-3 py-1 shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 z-50">
            Need help? Chat with us!
          </span>
        </div>
      )}
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[95vw] bg-white rounded-xl shadow-2xl border border-soft-gray flex flex-col animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-radiant-blue rounded-t-xl">
            <span className="flex items-center gap-2 text-white font-bold text-lg">
              <MessageCircle className="w-5 h-5" /> Chatbot
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close chatbot" className="text-white hover:text-warm-coral transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          {/* Email prompt before chat */}
          {!userEmail ? (
            <form onSubmit={handleEmailSubmit} className="flex flex-col items-center justify-center px-6 py-8 gap-4">
              <div className="text-center text-dark-text text-base mb-2">
                <strong>Welcome!</strong> Before we start, please enter your email so we can send you a copy of this conversation if needed.
              </div>
              <input
                type="email"
                value={emailInput}
                onChange={e => setEmailInput(e.target.value)}
                placeholder="Your email address"
                className="rounded-lg border border-blue-100 px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-radiant-blue"
                required
              />
              {emailError && <div className="text-error-red text-xs">{emailError}</div>}
              <button
                type="submit"
                className="bg-radiant-blue text-white font-semibold rounded-lg px-4 py-2 w-full hover:bg-warm-coral transition-colors"
              >
                Start Chat
              </button>
            </form>
          ) : (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-blue-50" style={{ minHeight: 200, maxHeight: 320 }}>
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`rounded-lg px-3 py-2 text-sm max-w-[80%] ${msg.from === "user" ? "bg-warm-coral text-white" : "bg-white text-dark-text border border-blue-100"}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              {/* Input */}
              <form onSubmit={handleSend} className="flex items-center gap-2 px-4 py-3 border-t border-soft-gray bg-white rounded-b-xl">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 rounded-lg border border-blue-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-radiant-blue"
                  onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) handleSend(); }}
                />
                <button type="submit" className="bg-radiant-blue hover:bg-warm-coral text-white rounded-full p-2 transition-colors" aria-label="Send">
                  <Send className="w-5 h-5" />
                </button>
              </form>
              {/* I need human help button */}
              <div className="px-4 pb-4 pt-2">
                <button
                  className="w-full bg-orange-100 text-warm-coral font-semibold rounded-lg py-2 mt-2 hover:bg-orange-200 transition-colors"
                  onClick={() => setShowContact(true)}
                >
                  I need human help
                </button>
              </div>
              {/* Contact form modal */}
              <Dialog open={showContact} onOpenChange={setShowContact}>
                <DialogContent className="max-w-lg w-full">
                  <DialogHeader>
                    <DialogTitle>Contact Us</DialogTitle>
                  </DialogHeader>
                  <ChatbotContactForm />
                  <DialogClose asChild>
                    <button className="absolute top-4 right-4 text-gray-400 hover:text-warm-coral font-bold bg-white bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-50 focus:outline-none focus:ring-2 focus:ring-warm-coral">
                      <X className="w-6 h-6" />
                    </button>
                  </DialogClose>
                </DialogContent>
              </Dialog>
            </>
          )}
          {/* Animation keyframes */}
          <style>{`
            @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
            .animate-fade-in { animation: fade-in 0.4s; }
          `}</style>
        </div>
      )}
    </>
  );
} 