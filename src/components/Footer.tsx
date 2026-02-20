import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const serviceLinks = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "Web Designing", href: "/services/web-designing" },
  { label: "eCommerce Solutions", href: "/services/ecommerce" },
  { label: "CMS Development", href: "/services/cms-development" },
  { label: "SEO Services", href: "/digital-marketing/seo" },
  { label: "Azure Services", href: "/devops/azure" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <div>
                <div className="font-bold text-lg leading-tight gradient-text-primary">Ishna Webtech</div>
                <div className="text-xs text-white/60 leading-tight">Solutions</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Transforming Ideas into Digital Excellence. We provide cutting-edge web development, digital marketing, and cloud solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary/80 flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:7217676271" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/40 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-white/50 mb-0.5">Phone</div>
                  <div className="text-sm text-white/80 hover:text-white transition-colors">7217676271</div>
                </div>
              </a>
              <a href="mailto:ishnawebtech@gmail.com" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/40 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-white/50 mb-0.5">Email</div>
                  <div className="text-sm text-white/80 hover:text-white transition-colors break-all">ishnawebtech@gmail.com</div>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-white/50 mb-0.5">Locations</div>
                  <div className="text-sm text-white/80">Delhi & Himachal Pradesh, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Ishna Webtech Solutions. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Transforming Ideas into Digital Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
