import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Code2, Palette, AppWindow, Database, ShoppingCart, Smartphone, Search, Share2, MousePointerClick, PenTool, Cloud, Server, Bot, GraduationCap, ExternalLink, ArrowRight } from "lucide-react";
import logo from "@/assets/logo-black.png";

const serviceItems = [
{ icon: Code2, label: "Web Development", href: "/services/web-development", desc: "Custom websites & web apps", color: "from-blue-500 to-blue-600" },
{ icon: Palette, label: "Web Designing", href: "/services/web-designing", desc: "Beautiful UI/UX design", color: "from-purple-500 to-pink-500" },
{ icon: AppWindow, label: "Custom Web Applications", href: "/services/custom-web-apps", desc: "Tailored business solutions", color: "from-indigo-500 to-blue-500" },
{ icon: Database, label: "CMS Development", href: "/services/cms-development", desc: "WordPress, Drupal & more", color: "from-teal-500 to-emerald-500" },
{ icon: ShoppingCart, label: "eCommerce Solutions", href: "/services/ecommerce", desc: "Online stores that sell", color: "from-orange-500 to-amber-500" },
{ icon: Smartphone, label: "Mobile Development", href: "/services/mobile-development", desc: "iOS & Android apps", color: "from-cyan-500 to-blue-500" }];


const marketingItems = [
{ icon: Search, label: "SEO", href: "/digital-marketing/seo", desc: "Rank higher on Google", color: "from-green-500 to-emerald-500" },
{ icon: Share2, label: "Social Media Marketing", href: "/digital-marketing/smm", desc: "Grow your social presence", color: "from-pink-500 to-rose-500" },
{ icon: MousePointerClick, label: "PPC Campaigns", href: "/digital-marketing/ppc", desc: "Pay-per-click advertising", color: "from-amber-500 to-orange-500" },
{ icon: PenTool, label: "Content Writing", href: "/digital-marketing/content", desc: "Compelling content that converts", color: "from-violet-500 to-purple-500" }];


const devopsItems = [
{ icon: Cloud, label: "Azure Services", href: "/devops/azure", desc: "Microsoft Azure cloud solutions", color: "from-sky-500 to-blue-600" },
{ icon: Server, label: "AWS Services", href: "/devops/aws", desc: "Amazon Web Services setup", color: "from-orange-400 to-amber-500" }];

const productItems = [
{ icon: Bot, label: "Chirpy AI", href: "https://chirpyai.in", desc: "AI chatbot trained on your docs", external: true, color: "from-violet-500 to-purple-600" },
{ icon: GraduationCap, label: "Easy Tutor", href: "https://easytutor.co.in", desc: "Smart tutoring platform", external: true, color: "from-emerald-500 to-teal-500" }];


interface MegaMenuItem {
  icon: React.ElementType;
  label: string;
  href: string;
  desc: string;
  external?: boolean;
  color?: string;
}

interface MegaMenuProps {
  items: MegaMenuItem[];
  title: string;
  subtitle?: string;
  onClose: () => void;
}

const MegaMenu = ({ items, title, subtitle, onClose }: MegaMenuProps) =>
<div className="mega-menu-enhanced">
    <div className="px-5 pt-5 pb-3">
      <div className="flex items-center gap-2 mb-0.5">
        <div className="w-1.5 h-5 rounded-full gradient-primary" />
        <p className="text-sm font-bold text-foreground">{title}</p>
      </div>
      {subtitle && <p className="text-xs text-muted-foreground ml-3.5">{subtitle}</p>}
    </div>
    <div className="px-3 pb-4">
      <div className="grid grid-cols-2 gap-1">
        {items.map((item) => {
          const itemClass = "flex items-start gap-3 p-3 rounded-xl hover:bg-muted/80 transition-all duration-200 group cursor-pointer";
          const content = (
            <>
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color || "from-primary to-secondary"} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-200`}>
                <item.icon className="w-[18px] h-[18px] text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors truncate">{item.label}</span>
                  {item.external && <ExternalLink className="w-3 h-3 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />}
                </div>
                <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">{item.desc}</p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/0 group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-1 flex-shrink-0" />
            </>
          );
          return item.external ? (
            <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" onClick={onClose} className={itemClass}>
              {content}
            </a>
          ) : (
            <Link key={item.href} to={item.href} onClick={onClose} className={itemClass}>
              {content}
            </Link>
          );
        })}
      </div>
    </div>
    {/* Bottom accent line */}
    <div className="h-1 w-full rounded-b-2xl gradient-primary opacity-60" />
  </div>;
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
  { label: "Products", menu: "products" },
  { label: "Contact", href: "/contact" }];


  return (
    <nav
      className={`nav-sticky transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}
      onMouseLeave={() => setActiveMenu(null)}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img alt="Ishna Webtech Solutions" className="h-14 w-auto group-hover:scale-105 transition-transform" src="/lovable-uploads/2f4fc5b5-8755-4f8b-bb37-3930df890a20.webp" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
            <div key={link.label} className="relative">
                {link.href ?
              <Link
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5 ${
                location.pathname === link.href ? "text-primary bg-primary/8" : "text-foreground"}`
                }>

                    {link.label}
                  </Link> :

              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5 ${
                activeMenu === link.menu ? "text-primary bg-primary/8" : "text-foreground"}`
                }
                onMouseEnter={() => setActiveMenu(link.menu || null)}>

                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === link.menu ? "rotate-180" : ""}`} />
                  </button>
              }
                {link.menu && activeMenu === link.menu &&
              <div onMouseEnter={() => setActiveMenu(link.menu || null)}>
                    {link.menu === "services" && <MegaMenu items={serviceItems} title="Our Services" subtitle="Everything you need to build your digital presence" onClose={() => setActiveMenu(null)} />}
                    {link.menu === "marketing" && <MegaMenu items={marketingItems} title="Digital Marketing" subtitle="Grow your brand and reach more customers" onClose={() => setActiveMenu(null)} />}
                    {link.menu === "devops" && <MegaMenu items={devopsItems} title="DevOps & Cloud" subtitle="Scale your infrastructure with confidence" onClose={() => setActiveMenu(null)} />}
                    {link.menu === "products" && <MegaMenu items={productItems} title="Our Products" subtitle="Innovative tools built by our team" onClose={() => setActiveMenu(null)} />}
                  </div>
              }
              </div>
            )}
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
            onClick={() => setIsOpen(!isOpen)}>

            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen &&
      <div className="lg:hidden border-t border-border bg-white">
          <div className="px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) =>
          <div key={link.label}>
                {link.href ?
            <Link
              to={link.href}
              className="block px-4 py-3 rounded-xl font-medium hover:bg-primary/5 hover:text-primary transition-colors">

                    {link.label}
                  </Link> :

            <div>
                    <button
                className="flex items-center justify-between w-full px-4 py-3 rounded-xl font-medium hover:bg-primary/5 hover:text-primary transition-colors"
                onClick={() => setActiveMenu(activeMenu === link.menu ? null : link.menu || null)}>

                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === link.menu ? "rotate-180" : ""}`} />
                    </button>
                    {activeMenu === link.menu &&
              <div className="ml-4 mt-1 space-y-1">
                        {link.menu === "services" && serviceItems.map((item) =>
                <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary rounded-lg hover:bg-primary/5">
                            {item.label}
                          </Link>
                )}
                        {link.menu === "marketing" && marketingItems.map((item) =>
                <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary rounded-lg hover:bg-primary/5">
                            {item.label}
                          </Link>
                )}
                        {link.menu === "devops" && devopsItems.map((item) =>
                <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary rounded-lg hover:bg-primary/5">
                            {item.label}
                          </Link>
                )}
                        {link.menu === "products" && productItems.map((item) =>
                <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary rounded-lg hover:bg-primary/5">
                            {item.label}
                          </a>
                )}
                      </div>
              }
                  </div>
            }
              </div>
          )}
            <div className="pt-3 border-t border-border">
              <Link to="/contact" className="btn-primary w-full justify-center text-sm">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      }
    </nav>);

}