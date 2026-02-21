import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Code2, Palette, AppWindow, Database, ShoppingCart, BarChart3, Search, Share2, MousePointerClick, PenTool, Cloud, Server } from "lucide-react";
import logo from "@/assets/logo.png";

const serviceItems = [
  { icon: Code2, label: "Web Development", href: "/services/web-development", desc: "Custom websites & web apps" },
  { icon: Palette, label: "Web Designing", href: "/services/web-designing", desc: "Beautiful UI/UX design" },
  { icon: AppWindow, label: "Custom Web Applications", href: "/services/custom-web-apps", desc: "Tailored business solutions" },
  { icon: Database, label: "CMS Development", href: "/services/cms-development", desc: "WordPress, Drupal & more" },
  { icon: ShoppingCart, label: "eCommerce Solutions", href: "/services/ecommerce", desc: "Online stores that sell" },
];

const marketingItems = [
  { icon: Search, label: "SEO", href: "/digital-marketing/seo", desc: "Rank higher on Google" },
  { icon: Share2, label: "Social Media Marketing", href: "/digital-marketing/smm", desc: "Grow your social presence" },
  { icon: MousePointerClick, label: "PPC Campaigns", href: "/digital-marketing/ppc", desc: "Pay-per-click advertising" },
  { icon: PenTool, label: "Content Writing", href: "/digital-marketing/content", desc: "Compelling content that converts" },
];

const devopsItems = [
  { icon: Cloud, label: "Azure Services", href: "/devops/azure", desc: "Microsoft Azure cloud solutions" },
  { icon: Server, label: "AWS Services", href: "/devops/aws", desc: "Amazon Web Services setup" },
];

interface MegaMenuProps {
  items: { icon: React.ElementType; label: string; href: string; desc: string }[];
  title: string;
  onClose: () => void;
}

const MegaMenu = ({ items, title, onClose }: MegaMenuProps) => (
  <div className="mega-menu w-[480px]">
    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">{title}</p>
    <div className="grid grid-cols-2 gap-1">
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          onClick={onClose}
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors group"
        >
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <item.icon className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">{item.label}</div>
            <div className="text-xs text-muted-foreground">{item.desc}</div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
  }, [location]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", menu: "services" },
    { label: "Digital Marketing", menu: "marketing" },
    { label: "DevOps", menu: "devops" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`nav-sticky transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Ishna Webtech Solutions" className="h-12 w-auto group-hover:scale-110 transition-transform" />
            <div>
              <div className="font-bold text-lg leading-tight gradient-text-primary">Ishna Webtech</div>
              <div className="text-xs text-muted-foreground leading-tight">Solutions</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.href ? (
                  <Link
                    to={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5 ${
                      location.pathname === link.href ? "text-primary bg-primary/8" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5 ${
                      activeMenu === link.menu ? "text-primary bg-primary/8" : "text-foreground"
                    }`}
                    onMouseEnter={() => setActiveMenu(link.menu || null)}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === link.menu ? "rotate-180" : ""}`} />
                  </button>
                )}
                {link.menu && activeMenu === link.menu && (
                  <div onMouseEnter={() => setActiveMenu(link.menu || null)}>
                    {link.menu === "services" && <MegaMenu items={serviceItems} title="Our Services" onClose={() => setActiveMenu(null)} />}
                    {link.menu === "marketing" && <MegaMenu items={marketingItems} title="Digital Marketing" onClose={() => setActiveMenu(null)} />}
                    {link.menu === "devops" && <MegaMenu items={devopsItems} title="DevOps & Cloud" onClose={() => setActiveMenu(null)} />}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="btn-primary text-sm">
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.href ? (
                  <Link
                    to={link.href}
                    className="block px-4 py-3 rounded-xl font-medium hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 rounded-xl font-medium hover:bg-primary/5 hover:text-primary transition-colors"
                      onClick={() => setActiveMenu(activeMenu === link.menu ? null : link.menu || null)}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === link.menu ? "rotate-180" : ""}`} />
                    </button>
                    {activeMenu === link.menu && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.menu === "services" && serviceItems.map((item) => (
                          <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary rounded-lg hover:bg-primary/5">
                            {item.label}
                          </Link>
                        ))}
                        {link.menu === "marketing" && marketingItems.map((item) => (
                          <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary rounded-lg hover:bg-primary/5">
                            {item.label}
                          </Link>
                        ))}
                        {link.menu === "devops" && devopsItems.map((item) => (
                          <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary rounded-lg hover:bg-primary/5">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-border">
              <Link to="/contact" className="btn-primary w-full justify-center text-sm">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
