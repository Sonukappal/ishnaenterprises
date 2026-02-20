import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <div
          className="rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden"
          style={{ background: "var(--gradient-primary)" }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{ background: "rgba(255,255,255,0.2)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              🚀 Ready to Scale Your Business?
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Ready to Grow Your Business Digitally?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Join 150+ businesses across India who trust Ishna Webtech Solutions for their digital transformation journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-primary bg-white hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:7217676271"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call: 7217676271
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-white/70 text-sm flex-wrap">
              <a href="mailto:ishnawebtech@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                ishnawebtech@gmail.com
              </a>
              <span>•</span>
              <span>📍 Delhi & Himachal Pradesh</span>
              <span>•</span>
              <span>Free Consultation Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
