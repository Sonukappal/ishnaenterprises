import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, HelpCircle, ChevronDown, ChevronUp, Star, ThumbsUp, Shield, Zap, Users, Clock } from "lucide-react";
import { useState } from "react";

interface WhyUsReason {
  icon: React.ElementType;
  title: string;
  desc: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  benefits: string[];
  process: { step: string; desc: string }[];
  faqs: { q: string; a: string }[];
  badge: string;
  color: string;
  heroImage?: string;
  whyUsTitle?: string;
  whyUsReasons?: WhyUsReason[];
}

const defaultWhyUsReasons: WhyUsReason[] = [
  { icon: Users, title: "Expert Dedicated Team", desc: "You get certified specialists—not generalists—who breathe this technology every day and have delivered 200+ successful projects." },
  { icon: Shield, title: "Proven Track Record", desc: "With 150+ happy clients across India, our results speak for themselves. We're trusted by startups and enterprises alike." },
  { icon: Zap, title: "Fast Turnaround", desc: "We combine agile workflows with experienced teams to deliver projects on time without cutting corners on quality." },
  { icon: Clock, title: "24/7 Support", desc: "Post-launch, we're always a call away. Our dedicated support team ensures your platform runs flawlessly around the clock." },
  { icon: ThumbsUp, title: "Transparent Pricing", desc: "No hidden fees, no surprises. We provide detailed quotes upfront and keep you informed at every step of the project." },
  { icon: Star, title: "Results-Driven Approach", desc: "Every decision is backed by data. We focus on delivering measurable outcomes—not just deliverables—for your business." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        className="flex items-center justify-between w-full p-5 text-left hover:bg-muted/30 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium">{q}</span>
        {open ? <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{a}</div>
      )}
    </div>
  );
}

export default function ServicePageTemplate({
  title, subtitle, description, technologies, benefits, process, faqs, badge, color, heroImage,
  whyUsTitle, whyUsReasons,
}: ServicePageProps) {
  const reasons = whyUsReasons ?? defaultWhyUsReasons;
  const reasonsTitle = whyUsTitle ?? `Why Choose Ishna Webtech for ${badge}?`;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden min-h-[480px] flex items-center">
          {/* Background image */}
          {heroImage && (
            <div className="absolute inset-0">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.88) 0%, rgba(124,58,237,0.82) 60%, rgba(0,0,0,0.6) 100%)" }} />
            </div>
          )}
          {!heroImage && (
            <>
              <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
              <div className="floating-shape w-80 h-80 bg-primary/15 -top-20 -right-20" />
            </>
          )}

          <div className="max-w-5xl mx-auto px-4 py-20 text-center relative z-10 w-full">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5 backdrop-blur-sm"
              style={heroImage
                ? { background: "rgba(255,255,255,0.2)", color: "white", border: "1px solid rgba(255,255,255,0.4)" }
                : { background: `${color}15`, color, borderColor: `${color}30`, border: `1px solid ${color}30` }
              }
            >
              {badge}
            </div>
            <h1 className={`text-4xl sm:text-5xl font-bold mb-5 ${heroImage ? "text-white" : "text-foreground"}`}>
              {title}
            </h1>
            <p className={`text-lg max-w-2xl mx-auto mb-8 ${heroImage ? "text-white/85" : "text-muted-foreground"}`}>{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                style={heroImage
                  ? { border: "2px solid rgba(255,255,255,0.5)", color: "white" }
                  : { border: `2px solid ${color}`, color }
                }
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>

        {/* Description + Benefits */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl font-bold mb-5">Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">{description}</p>
                <h3 className="font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium border"
                      style={{ background: `${color}08`, color, borderColor: `${color}25` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-5">Key Benefits</h3>
                <div className="space-y-3">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color }} />
                      <span className="text-muted-foreground">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Ishna Webtech */}
        <section className="section-padding" style={{ background: "hsl(210 40% 98%)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div
                className="section-badge mb-4"
                style={{ background: `${color}10`, color, borderColor: `${color}25` }}
              >
                Why Choose Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {reasonsTitle}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Choosing the right digital partner makes all the difference. Here's why businesses across India trust us.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason, i) => (
                <div
                  key={reason.title}
                  className="bg-white rounded-2xl p-6 border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-5 -translate-y-4 translate-x-4"
                    style={{ background: color }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ background: `${color}12` }}
                  >
                    <reason.icon className="w-6 h-6" style={{ color }} />
                  </div>
                  <div
                    className="text-xs font-bold mb-1 opacity-60"
                    style={{ color }}
                  >
                    0{i + 1}
                  </div>
                  <h3 className="font-bold text-base mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>

            {/* Trust strip */}
            <div className="mt-10 rounded-2xl p-6 flex flex-wrap items-center justify-center gap-8 border border-border bg-white">
              {[
                { num: "200+", label: "Projects Delivered" },
                { num: "150+", label: "Happy Clients" },
                { num: "5+", label: "Years Experience" },
                { num: "98%", label: "Client Satisfaction" },
                { num: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold" style={{ color }}>{stat.num}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our <span className="gradient-text-primary">Process</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p, i) => (
                <div key={p.step} className="bg-background rounded-2xl p-6 border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                  <div
                    className="w-10 h-10 rounded-xl text-white font-bold text-sm flex items-center justify-center mb-4"
                    style={{ background: color }}
                  >
                    0{i + 1}
                  </div>
                  <h3 className="font-bold mb-2">{p.step}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding" style={{ background: "hsl(210 40% 98%)" }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <HelpCircle className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
