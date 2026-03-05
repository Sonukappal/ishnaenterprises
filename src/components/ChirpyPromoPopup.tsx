import { useState, useEffect } from "react";
import { X, Sparkles, Bot, ArrowRight, Zap, Star, Rocket } from "lucide-react";
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

      {/* Popup Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-md transition-all duration-300 ${closing ? "animate-scale-out" : "animate-scale-in"}`}
      >
        {/* Outer glow ring */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--primary))] via-purple-500 to-teal-400 rounded-[28px] opacity-60 blur-xl animate-pulse" />
        
        <div className="relative rounded-3xl overflow-hidden bg-background shadow-2xl border border-white/10">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors backdrop-blur-sm"
          >
            <X className="w-3.5 h-3.5 text-white" />
          </button>

          {/* Top gradient banner - compact */}
          <div className="relative bg-gradient-to-br from-[hsl(var(--primary))] via-purple-600 to-teal-500 px-6 py-6 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-2 left-6 w-20 h-20 rounded-full bg-yellow-300 blur-2xl" />
              <div className="absolute bottom-0 right-4 w-24 h-24 rounded-full bg-cyan-300 blur-2xl" />
            </div>
            <Sparkles className="absolute top-3 left-4 w-4 h-4 text-yellow-300 animate-pulse" />
            <Star className="absolute top-5 right-14 w-3 h-3 text-white/40 animate-pulse" style={{ animationDelay: "0.7s" }} />
            <Sparkles className="absolute bottom-3 right-6 w-3.5 h-3.5 text-yellow-200/50 animate-pulse" style={{ animationDelay: "1.2s" }} />

            <div className="relative">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-bold tracking-widest text-white/90 uppercase backdrop-blur-sm mb-2">
                <Bot className="w-3 h-3" /> AI Chatbot
              </span>
              <h3 className="text-xl font-extrabold text-white leading-snug">
                Automate Your Chat with
                <span className="block text-yellow-300 text-2xl mt-0.5">Chirpy AI ✨</span>
              </h3>
            </div>
          </div>

          {/* Avatar bridge */}
          <div className="flex justify-center -mt-7 relative z-10 mb-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))] to-teal-400 rounded-2xl rotate-6 scale-110 opacity-40 blur-sm" />
              <div className="relative w-14 h-14 rounded-xl bg-background shadow-lg border-[3px] border-background flex items-center justify-center">
                <img src={chirpyAvatar} alt="Chirpy AI" className="w-10 h-10 object-contain" />
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 pb-6 pt-2 text-center space-y-3">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Train your AI chatbot with PDFs & docs. Handle customer queries <strong className="text-foreground">24/7</strong> — instantly.
            </p>

            {/* FREE badge */}
            <div className="relative inline-block mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl blur-md opacity-40 animate-pulse" />
              <div className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/25">
                <Zap className="w-4 h-4 text-yellow-300 animate-pulse" />
                <span className="text-base font-black text-white tracking-wide">
                  🎉 FREE FOR NOW!
                </span>
                <Zap className="w-4 h-4 text-yellow-300 animate-pulse" />
              </div>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {[
                { label: "No Code", color: "bg-emerald-100 text-emerald-700" },
                { label: "PDF Training", color: "bg-blue-100 text-blue-700" },
                { label: "24/7 Support", color: "bg-purple-100 text-purple-700" },
              ].map((f) => (
                <span key={f.label} className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${f.color}`}>
                  {f.label}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://chirpyai.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-[hsl(var(--primary))] via-purple-600 to-teal-500 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02]"
            >
              <Rocket className="w-4 h-4" />
              Try Chirpy AI Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button onClick={handleClose} className="text-xs text-muted-foreground hover:text-foreground transition-colors pt-0.5">
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
