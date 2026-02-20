import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Users, Shield, Zap, Award, ThumbsUp, Star } from "lucide-react";
import heroContact from "@/assets/hero-contact.jpg";

const whyContactUs = [
  { icon: Zap, title: "Response Within 2 Hours", desc: "Send us a message and our team will respond with a personalized proposal within 2 business hours — not days." },
  { icon: Shield, title: "No Obligation Free Consultation", desc: "Our initial consultation is completely free with zero commitment. Explore your options before deciding anything." },
  { icon: Users, title: "Speak to Real Experts", desc: "You speak directly with our technical and marketing experts — not sales reps who don't understand your problem." },
  { icon: ThumbsUp, title: "Honest Assessment", desc: "We'll tell you exactly what you need — and what you don't. We won't upsell services that won't benefit your business." },
  { icon: Award, title: "Clear Proposals", desc: "You get a detailed, itemized proposal with timeline, deliverables, and pricing — no vague estimates." },
  { icon: Star, title: "Serving Delhi & HP", desc: "We're local. We understand your market, your customers, and the regional business dynamics that affect your success." },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero with image */}
        <section className="relative overflow-hidden min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <img src={heroContact} alt="Contact Ishna Webtech Solutions" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.88) 0%, rgba(25,95,53,0.1) 60%, rgba(249,115,22,0.7) 100%)" }} />
          </div>
          <div className="max-w-4xl mx-auto px-4 py-20 text-center relative z-10 w-full">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5 backdrop-blur-sm" style={{ background: "rgba(255,255,255,0.2)", color: "white", border: "1px solid rgba(255,255,255,0.4)" }}>
              Contact Us
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Let's Start a <span style={{ color: "#93c5fd" }}>Conversation</span>
            </h1>
            <p className="text-lg text-white/85">
              Ready to transform your digital presence? Reach out for a free consultation.
            </p>
          </div>
        </section>



        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-10">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
                  <p className="text-muted-foreground">We're here to help. Contact us via phone, email, or fill out the form.</p>
                </div>

                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "7217676271",
                    sub: "Mon-Sat, 9am-7pm IST",
                    href: "tel:7217676271",
                    color: "hsl(var(--primary))",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "ishnawebtech@gmail.com",
                    sub: "We reply within 24 hours",
                    href: "mailto:ishnawebtech@gmail.com",
                    color: "hsl(var(--secondary))",
                  },
                  {
                    icon: MapPin,
                    label: "Offices",
                    value: "Delhi & Himachal Pradesh",
                    sub: "India",
                    href: "#",
                    color: "hsl(var(--accent))",
                  },
                  {
                    icon: Clock,
                    label: "Working Hours",
                    value: "Mon - Saturday",
                    sub: "9:00 AM - 7:00 PM IST",
                    href: "#",
                    color: "hsl(25 95% 53%)",
                  },
                ].map((info) => (
                  <a key={info.label} href={info.href} className="flex items-start gap-4 group">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: `${info.color}15` }}
                    >
                      <info.icon className="w-5 h-5" style={{ color: info.color }} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{info.label}</div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{info.value}</div>
                      <div className="text-xs text-muted-foreground">{info.sub}</div>
                    </div>
                  </a>
                ))}

                {/* Free Consultation Banner */}
                <div className="rounded-2xl p-6 text-white" style={{ background: "var(--gradient-primary)" }}>
                  <h3 className="font-bold text-lg mb-2">Free Consultation</h3>
                  <p className="text-white/80 text-sm mb-4">Schedule a free 30-minute consultation with our experts.</p>
                  <a
                    href="tel:7217676271"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg text-primary font-semibold text-sm hover:bg-white/90 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center p-12">
                      <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. Our team will contact you within 24 hours.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                        className="btn-primary"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-background rounded-3xl p-8 border border-border space-y-5">
                    <h3 className="text-xl font-bold mb-2">Send Us a Message</h3>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Full Name *</label>
                        <input
                          required
                          type="text"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Email Address *</label>
                        <input
                          required
                          type="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="Your phone number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5">Message *</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us about your project..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition-all resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Ishna Webtech */}
        <section className="section-padding" style={{ background: "hsl(210 40% 98%)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="section-badge mb-4">Why Reach Out to Us?</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Opt for <span className="gradient-text-primary">Ishna Webtech</span> Solutions?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Getting in touch is the first step toward transforming your business. Here's what makes working with us different.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyContactUs.map((item, i) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-primary/60 mb-1">0{i + 1}</div>
                      <h3 className="font-bold mb-1.5">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Map placeholder */}
        <section className="px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl overflow-hidden h-72 bg-muted border border-border flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground font-medium">Delhi & Himachal Pradesh, India</p>
                <p className="text-sm text-muted-foreground">Interactive map — embed Google Maps here</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

