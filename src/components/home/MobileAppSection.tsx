import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Smartphone } from "lucide-react";
import heroMobileDev from "@/assets/hero-mobile-dev.jpg";

const highlights = [
  "Cross-platform iOS & Android apps",
  "React Native & Flutter expertise",
  "Offline-first architecture",
  "App Store & Play Store deployment",
  "Push notifications & analytics",
  "Post-launch support & updates",
];

export default function MobileAppSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-card">
              <img
                src={heroMobileDev}
                alt="Mobile App Development"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-background rounded-2xl p-4 border border-border shadow-lg hidden sm:flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="font-bold text-foreground">50+</div>
                <div className="text-xs text-muted-foreground">Apps Delivered</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="section-badge mb-4" style={{ background: "hsl(262 83% 58% / 0.1)", color: "hsl(262 83% 58%)", borderColor: "hsl(262 83% 58% / 0.25)" }}>
              Mobile App Development
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5">
              Build Powerful <span className="gradient-text-primary">Mobile Apps</span> That Users Love
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We create high-performance, beautifully designed mobile applications for iOS and Android. 
              From concept to App Store launch, our expert team delivers apps that engage users and drive business growth.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4.5 h-4.5 flex-shrink-0" style={{ color: "hsl(262 83% 58%)" }} />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/services/mobile-development"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, hsl(262 83% 58%), hsl(221 83% 53%))" }}
              >
                Explore Mobile Development
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 hover:bg-purple-50"
                style={{ borderColor: "hsl(262 83% 58%)", color: "hsl(262 83% 58%)" }}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}