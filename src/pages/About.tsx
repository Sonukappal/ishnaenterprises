import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/home/CTASection";
import { Target, Eye, Users, CheckCircle, Lightbulb, Code, Rocket, Headphones, Award } from "lucide-react";

const processSteps = [
  { icon: Lightbulb, num: "01", title: "Discovery", desc: "We dive deep into your business goals, target audience, and requirements." },
  { icon: Rocket, num: "02", title: "Design", desc: "Our designers create stunning wireframes and prototypes tailored to your brand." },
  { icon: Code, num: "03", title: "Development", desc: "We build your solution using cutting-edge technologies and best practices." },
  { icon: CheckCircle, num: "04", title: "Deploy", desc: "We launch your product with thorough testing and quality assurance." },
  { icon: Headphones, num: "05", title: "Support", desc: "Ongoing maintenance, updates, and 24/7 support to keep you running." },
];

const team = [
  { name: "Founders", role: "Management", initial: "F" },
  { name: "Dev Team", role: "Web Development", initial: "D" },
  { name: "Design Team", role: "UI/UX Design", initial: "D" },
  { name: "Marketing Team", role: "Digital Marketing", initial: "M" },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="py-20 px-4 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="floating-shape w-80 h-80 bg-primary/20 -top-20 -right-20" />
          <div className="floating-shape w-60 h-60 bg-secondary/15 bottom-0 -left-10" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="section-badge mb-6">About Us</div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Transforming Ideas into{" "}
              <span className="gradient-text-primary">Digital Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ishna Webtech Solutions is a full-service digital agency based in Delhi & Himachal Pradesh, India. 
              We specialize in web development, digital marketing, and cloud solutions that drive real business growth.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-background rounded-3xl p-8 border border-border">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses across India with innovative digital solutions that drive growth, enhance visibility, 
                  and create lasting competitive advantages. We are committed to delivering exceptional quality with a client-first approach.
                </p>
              </div>
              <div className="bg-background rounded-3xl p-8 border border-border">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "hsl(var(--secondary) / 0.15)" }}>
                  <Eye className="w-6 h-6" style={{ color: "hsl(var(--secondary))" }} />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's most trusted digital transformation partner by helping businesses of all sizes leverage 
                  technology for sustainable growth and success in the global digital landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Intro */}
        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="section-badge mb-5">Who We Are</div>
                <h2 className="text-3xl font-bold mb-5">
                  Your Trusted <span className="gradient-text-primary">Digital Partner</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Founded with a passion for digital innovation, Ishna Webtech Solutions brings together a team of 
                  experienced developers, designers, marketers, and cloud specialists dedicated to your success.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-7">
                  From our offices in Delhi and Himachal Pradesh, we serve clients across India and beyond, 
                  delivering end-to-end digital solutions that are professional, scalable, and results-driven.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Web Development", val: "Expert" },
                    { label: "Digital Marketing", val: "Certified" },
                    { label: "Cloud Solutions", val: "AWS & Azure" },
                    { label: "Client Satisfaction", val: "98%" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-xl p-4 border border-border">
                      <div className="font-bold gradient-text-primary">{item.val}</div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "200+", label: "Projects Done", color: "hsl(var(--primary))" },
                  { num: "150+", label: "Happy Clients", color: "hsl(var(--secondary))" },
                  { num: "5+", label: "Years Experience", color: "hsl(var(--accent))" },
                  { num: "24/7", label: "Support", color: "hsl(25 95% 53%)" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-2xl p-6 border border-border text-center hover:shadow-card transition-shadow">
                    <div className="text-3xl font-bold mb-1" style={{ color: stat.color }}>{stat.num}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <div className="section-badge mb-4">Our Process</div>
              <h2 className="text-3xl font-bold mb-4">
                How We <span className="gradient-text-primary">Work</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <div key={step.title} className="text-center relative">
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-border z-0" style={{ left: "60%" }} />
                  )}
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-xs text-muted-foreground mb-1">{step.num}</div>
                    <h3 className="font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Different */}
        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="section-badge mb-4">Why We're Different</div>
              <h2 className="text-3xl font-bold">What Sets Us <span className="gradient-text-primary">Apart</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Award, title: "Quality First", desc: "We never compromise on quality. Every line of code, every design element is crafted with care." },
                { icon: Users, title: "Dedicated Teams", desc: "You get a dedicated project manager and team who understand your business deeply." },
                { icon: Lightbulb, title: "Innovation-Driven", desc: "We stay ahead of technology trends to bring you cutting-edge solutions." },
                { icon: CheckCircle, title: "Proven Track Record", desc: "200+ successfully delivered projects across diverse industries." },
                { icon: Target, title: "Results-Oriented", desc: "Every strategy is backed by data and aimed at delivering measurable outcomes." },
                { icon: Headphones, title: "Always Available", desc: "Our support team is available 24/7 to address your needs." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
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
