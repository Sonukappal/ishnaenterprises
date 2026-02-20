import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app this would send to backend
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="py-16 px-4 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="floating-shape w-72 h-72 bg-primary/15 -top-20 -right-20" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="section-badge mb-5">Contact Us</div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Let's Start a <span className="gradient-text-primary">Conversation</span>
            </h1>
            <p className="text-lg text-muted-foreground">
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
