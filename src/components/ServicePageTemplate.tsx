import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

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
}

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
  title, subtitle, description, technologies, benefits, process, faqs, badge, color,
}: ServicePageProps) {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="py-20 px-4 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="floating-shape w-80 h-80 bg-primary/15 -top-20 -right-20" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div
              className="section-badge mb-5"
              style={{ background: `${color}15`, color, borderColor: `${color}30` }}
            >
              {badge}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-5">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">Get Free Consultation <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/about" className="btn-outline">Learn About Us</Link>
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

        {/* Process */}
        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our <span className="gradient-text-primary">Process</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p, i) => (
                <div key={p.step} className="bg-white rounded-2xl p-6 border border-border hover:shadow-card transition-shadow">
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
        <section className="section-padding bg-white">
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
