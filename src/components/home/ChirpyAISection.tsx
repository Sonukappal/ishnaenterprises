import { Link } from "react-router-dom";
import { ArrowRight, Upload, MessageSquare, Brain, Sparkles } from "lucide-react";
import chirpyAvatar from "@/assets/chirpy-ai-avatar.png";

const features = [
  {
    icon: Upload,
    title: "Train with PDFs",
    desc: "Upload your product manuals, service docs, or any PDF to train your AI chatbot instantly.",
  },
  {
    icon: MessageSquare,
    title: "Smart Conversations",
    desc: "Chirpy AI answers customer queries accurately based on your uploaded knowledge base.",
  },
  {
    icon: Brain,
    title: "Learns Your Business",
    desc: "The more documents you feed it, the smarter it gets about your products and services.",
  },
  {
    icon: Sparkles,
    title: "24/7 Customer Support",
    desc: "Provide round-the-clock automated support without hiring additional staff.",
  },
];

export default function ChirpyAISection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content side */}
          <div>
            <div className="section-badge mb-4">Our Product</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              Meet <span className="gradient-text-primary">Chirpy AI</span>
            </h2>
            <p className="text-lg font-semibold text-primary mb-4">
              Your Intelligent AI Chatbot
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Chirpy AI is a smart, trainable AI chatbot that you can customize for your business.
              Simply upload PDF documents related to your work, products, or services — and Chirpy
              learns everything to answer your customers' questions instantly and accurately.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-0.5">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://chirpyai.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-3.5 inline-flex items-center gap-2"
            >
              Try Chirpy AI
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Image side */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center animate-float">
                <img
                  src={chirpyAvatar}
                  alt="Chirpy AI - Intelligent AI Chatbot"
                  className="w-60 h-60 sm:w-80 sm:h-80 object-contain drop-shadow-2xl"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 card-glass rounded-2xl px-5 py-3 shadow-card text-center">
                <div className="text-sm font-bold gradient-text-primary">PDF-Trained AI</div>
                <div className="text-xs text-muted-foreground">Smart • Fast • Accurate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
