import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-background">
      {/* Floating background shapes */}
      <div className="floating-shape w-96 h-96 bg-primary/20 -top-20 -right-20" style={{ animationDelay: "0s" }} />
      <div className="floating-shape w-72 h-72 bg-secondary/20 bottom-0 -left-20" style={{ animationDelay: "2s" }} />
      <div className="floating-shape w-64 h-64 bg-accent/20 top-1/2 right-1/4" style={{ animationDelay: "4s" }} />
      <div className="floating-shape w-48 h-48 bg-highlight/15 top-1/4 left-1/3" style={{ animationDelay: "1s" }} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(221 83% 53%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="section-badge mb-6 inline-flex">
              <Sparkles className="w-3.5 h-3.5" />
              Trusted by 200+ Businesses Across India
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              We Build{" "}
              <span className="gradient-text-primary">Powerful</span>
              <br />
              Digital{" "}
              <span className="gradient-text-teal">Experiences</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Web Development, Digital Marketing & Cloud Solutions Under One Roof. 
              Serving businesses from <strong>Delhi & Himachal Pradesh</strong> to the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="btn-primary text-base px-8 py-3.5">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services/web-development" className="btn-outline text-base px-8 py-3.5">
                <Play className="w-4 h-4" />
                View Our Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start flex-wrap">
              {[
                { num: "200+", label: "Projects Done" },
                { num: "150+", label: "Happy Clients" },
                { num: "5+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold gradient-text-primary">{stat.num}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-full max-w-lg">
              <img
                src={heroHome}
                alt="Ishna Webtech team working on digital solutions"
                className="rounded-3xl shadow-hover object-cover w-full h-[480px]"
              />
              {/* Floating mini cards */}
              <div className="absolute -top-6 -right-8 card-glass rounded-2xl p-4 shadow-card animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="text-2xl font-bold gradient-text-primary">98%</div>
                <div className="text-xs text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="absolute -bottom-6 -left-8 card-glass rounded-2xl p-4 shadow-card animate-float" style={{ animationDelay: "3s" }}>
                <div className="text-2xl font-bold" style={{ color: "hsl(var(--accent))" }}>24/7</div>
                <div className="text-xs text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
