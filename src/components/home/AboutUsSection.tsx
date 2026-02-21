import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Shield, Zap } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";

const highlights = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To empower businesses with innovative digital solutions that drive growth, efficiency, and long-term success.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be the most trusted digital partner for businesses across India, delivering world-class technology solutions.",
  },
  {
    icon: Shield,
    title: "Reliability",
    desc: "We stand behind every project with 24/7 support, transparent communication, and guaranteed satisfaction.",
  },
  {
    icon: Zap,
    title: "Innovation",
    desc: "We leverage cutting-edge technologies and industry best practices to keep your business ahead of the curve.",
  },
];

export default function AboutUsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-hover">
              <img
                src={heroAbout}
                alt="About Ishna Webtech Solutions"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 card-glass rounded-2xl p-5 shadow-card">
              <div className="text-3xl font-bold gradient-text-primary">5+</div>
              <div className="text-sm text-muted-foreground font-medium">Years of Excellence</div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <div className="section-badge mb-4">Who We Are</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="gradient-text-primary">Ishna Webtech</span> Solutions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Based in <strong>Delhi & Himachal Pradesh</strong>, Ishna Webtech Solutions is a
              full-service digital agency specializing in web development, digital marketing, and
              cloud solutions. With over 200 successful projects and 150+ happy clients, we transform
              ideas into powerful digital experiences that drive real business results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
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

            <Link
              to="/about"
              className="btn-primary text-base px-8 py-3.5 inline-flex items-center gap-2"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
