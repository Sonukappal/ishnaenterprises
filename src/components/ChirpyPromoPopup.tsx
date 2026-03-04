import { useState, useEffect } from "react";
import { X, Sparkles, Bot, ArrowRight, Zap, MessageCircle } from "lucide-react";
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
      <div className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 ${closing ? "opacity-0" : "animate-fade-in"}`} />

      {/* Popup */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${closing ? "animate-scale-out" : "animate-scale-in"}`}
      >
        {/* Colorful animated top section */}
        <div className="relative bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(262,80%,55%)] to-[hsl(180,70%,45%)] px-6 pt-8 pb-14 overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-sm" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/10 blur-sm" />
          <div className="absolute top-4 right-16 w-16 h-16 rounded-full bg-white/5" />

          {/* Floating icons */}
          <Sparkles className="absolute top-5 left-5 w-5 h-5 text-yellow-300/70 animate-pulse" />
          <MessageCircle className="absolute top-8 right-24 w-4 h-4 text-white/30 animate-pulse" style={{ animationDelay: "0.5s" }} />
          <Sparkles className="absolute bottom-10 right-8 w-4 h-4 text-yellow-300/50 animate-pulse" style={{ animationDelay: "1s" }} />

          {/* Close */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {/* Header text */}
          <div className="relative text-center text-white">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold tracking-wide mb-3 backdrop-blur-sm">
              <Bot className="w-3.5 h-3.5" />
              AI-POWERED CHATBOT
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight drop-shadow-md">
              Automate Your Chat<br />with <span className="text-yellow-300">Chirpy AI</span>
            </h3>
          </div>
        </div>

        {/* Avatar overlapping */}
        <div className="flex justify-center -mt-10 relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-background shadow-xl border-4 border-background flex items-center justify-center rotate-6 hover:rotate-0 transition-transform duration-300">
            <img
              src={chirpyAvatar}
              alt="Chirpy AI"
              className="w-16 h-16 object-contain drop-shadow-md"
            />
          </div>
        </div>

        {/* Content */}
        <div className="bg-background px-6 sm:px-8 pb-7 pt-4">
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
              Train your own AI chatbot with PDFs & docs. Let it handle customer queries <strong className="text-foreground">24/7</strong> — instantly and accurately.
            </p>

            {/* FREE badge - highlighted */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-lg opacity-30 animate-pulse" />
              <div className="relative flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border-2 border-emerald-400/30">
                <Zap className="w-5 h-5 text-emerald-500 animate-pulse" />
                <span className="text-lg sm:text-xl font-black tracking-wide bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                  🎉 FREE FOR NOW!
                </span>
                <Zap className="w-5 h-5 text-emerald-500 animate-pulse" />
              </div>
            </div>

            {/* Features mini row */}
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground py-1">
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> No Code</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> PDF Training</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> 24/7 Support</span>
            </div>

            {/* CTA */}
            <a
              href="https://chirpyai.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 text-base font-bold px-8 py-4 w-full justify-center rounded-2xl text-white overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(262,80%,55%)] to-[hsl(180,70%,45%)] transition-transform" />
              <span className="absolute inset-0 bg-gradient-to-r from-[hsl(180,70%,45%)] via-[hsl(262,80%,55%)] to-[hsl(var(--primary))] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center gap-2">
                Try Chirpy AI Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <button onClick={handleClose} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
