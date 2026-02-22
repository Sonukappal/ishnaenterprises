import { Link } from "react-router-dom";
import { Code2, Palette, AppWindow, Database, ShoppingCart, BarChart3, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    desc: "High-performance, SEO-friendly websites built with modern technologies for maximum impact.",
    href: "/services/web-development",
    color: "hsl(var(--primary))",
    bg: "hsl(var(--primary) / 0.08)",
  },
  {
    icon: Palette,
    title: "Website Designing",
    desc: "Stunning, conversion-focused UI/UX designs that captivate your audience.",
    href: "/services/web-designing",
    color: "hsl(var(--secondary))",
    bg: "hsl(var(--secondary) / 0.08)",
  },
  {
    icon: AppWindow,
    title: "Custom Web Applications",
    desc: "Tailored web applications designed to automate and scale your business processes.",
    href: "/services/custom-web-apps",
    color: "hsl(var(--accent))",
    bg: "hsl(var(--accent) / 0.08)",
  },
  {
    icon: Database,
    title: "CMS Development",
    desc: "Flexible content management with WordPress, Drupal, and headless CMS solutions.",
    href: "/services/cms-development",
    color: "hsl(25 95% 53%)",
    bg: "hsl(25 95% 53% / 0.08)",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Solutions",
    desc: "Feature-rich online stores with seamless checkout and payment integration.",
    href: "/services/ecommerce",
    color: "hsl(var(--primary))",
    bg: "hsl(var(--primary) / 0.08)",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies that deliver measurable growth and ROI.",
    href: "/digital-marketing/seo",
    color: "hsl(var(--secondary))",
    bg: "hsl(var(--secondary) / 0.08)",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-badge mb-4">What We Do</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Comprehensive <span className="gradient-text-primary">Digital Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From web development to cloud solutions, we offer everything you need to establish and grow your digital presence.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="service-card group">
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: service.bg }}
              >
                <service.icon className="w-7 h-7" style={{ color: service.color }} />
              </div>

              <h3 className="text-lg font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.desc}</p>

              <Link
                to={service.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200"
                style={{ color: service.color }}
              >
                Learn More
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
