import { Link } from "react-router-dom";
import { Search, Share2, MousePointerClick, PenTool, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Rank higher on search engines and drive organic traffic with proven SEO strategies.",
    stat: "3x",
    statLabel: "avg. traffic growth",
    color: "hsl(var(--primary))",
    href: "/digital-marketing/seo",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build brand awareness and engage your audience across all social platforms.",
    stat: "5x",
    statLabel: "engagement boost",
    color: "hsl(var(--secondary))",
    href: "/digital-marketing/smm",
  },
  {
    icon: MousePointerClick,
    title: "PPC Campaigns",
    desc: "Targeted pay-per-click advertising that maximizes ROI and drives conversions.",
    stat: "40%",
    statLabel: "lower cost per click",
    color: "hsl(25 95% 53%)",
    href: "/digital-marketing/ppc",
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    desc: "Compelling content that establishes authority and converts readers into customers.",
    stat: "2x",
    statLabel: "conversion rate",
    color: "hsl(var(--accent))",
    href: "/digital-marketing/content",
  },
];

export default function DigitalMarketingSection() {
  return (
    <section className="section-padding" style={{ background: "hsl(262 83% 58% / 0.04)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-badge mb-4" style={{ background: "hsl(var(--secondary) / 0.1)", color: "hsl(var(--secondary))", borderColor: "hsl(var(--secondary) / 0.2)" }}>
            Digital Marketing
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Grow Your Business{" "}
            <span className="gradient-text-primary">Digitally</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Results-driven digital marketing strategies that turn clicks into customers and browsers into buyers.
          </p>
        </div>

        {/* Growth visual + services */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Services list - left */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 border border-border hover:border-primary/30 hover:-translate-y-1 hover:shadow-card transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ background: `${service.color}15` }}
                  >
                    <service.icon className="w-5 h-5" style={{ color: service.color }} />
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg" style={{ color: service.color }}>{service.stat}</div>
                    <div className="text-xs text-muted-foreground">{service.statLabel}</div>
                  </div>
                </div>
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.desc}</p>
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold transition-all"
                  style={{ color: service.color }}
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          {/* Growth visualization - right */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-6 border border-border shadow-card">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="font-bold text-sm">Performance Growth</span>
              </div>
              {/* Bar chart */}
              <div className="space-y-4">
                {[
                  { label: "Organic Traffic", val: 85, color: "hsl(var(--primary))" },
                  { label: "Conversions", val: 72, color: "hsl(var(--secondary))" },
                  { label: "Brand Awareness", val: 90, color: "hsl(var(--accent))" },
                  { label: "ROI", val: 78, color: "hsl(25 95% 53%)" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-muted-foreground font-medium">{item.label}</span>
                      <span className="font-bold" style={{ color: item.color }}>{item.val}%</span>
                    </div>
                    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${item.val}%`, background: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-background rounded-xl">
                    <div className="font-bold text-xl gradient-text-primary">300%</div>
                    <div className="text-xs text-muted-foreground">Avg. ROI</div>
                  </div>
                  <div className="text-center p-3 bg-background rounded-xl">
                    <div className="font-bold text-xl" style={{ color: "hsl(var(--accent))" }}>6mo</div>
                    <div className="text-xs text-muted-foreground">Avg. Timeline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
