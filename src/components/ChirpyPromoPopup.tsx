import { useState, useEffect } from "react";
import { X, Sparkles, Bot, ArrowRight, Zap } from "lucide-react";
import chirpyAvatar from "@/assets/chirpy-ai-avatar.png";

export default function ChirpyPromoPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={handleClose}>
      {/* Backdrop */}
      <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${closing ? "opacity-0" : "animate-fade-in"}`} />

      {/* Popup */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${closing ? "animate-scale-out" : "animate-scale-in"}`}
      >
        {/* Gradient top bar */}
        <div className="h-2 w-full gradient-primary" />

        <div className="bg-background p-6 sm:p-8">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-muted/80 hover:bg-muted flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>

          {/* Floating sparkles */}
          <div className="absolute top-6 left-6">
            <Sparkles className="w-5 h-5 text-primary/40 animate-pulse" />
          </div>

          {/* Avatar */}
          <div className="flex justify-center mb-5">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center">
                <img
                  src={chirpyAvatar}
                  alt="Chirpy AI"
                  className="w-20 h-20 object-contain drop-shadow-lg"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full gradient-primary flex items-center justify-center shadow-lg">
                <Bot className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
              Automate Your Chat with<br />
              <span className="gradient-text-primary">Chirpy AI</span> Chatbot
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
              Train your AI chatbot with your own documents and let it handle customer queries 24/7 — instantly and accurately.
            </p>

            {/* Free badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
              <Zap className="w-4 h-4 text-emerald-500" />
              <span className="text-base font-extrabold tracking-wide bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                🎉 FREE FOR NOW!
              </span>
              <Zap className="w-4 h-4 text-emerald-500" />
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="https://chirpyai.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3.5 w-full justify-center rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                Try Chirpy AI Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <button onClick={handleClose} className="text-xs text-muted-foreground hover:text-foreground transition-colors pt-1">
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
