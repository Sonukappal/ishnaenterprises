import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function SEO() {
  return (
    <ServicePageTemplate
      badge="SEO Services"
      color="hsl(221 83% 53%)"
      title="SEO Optimization Services"
      subtitle="Rank higher on Google and drive qualified organic traffic with our data-driven SEO strategies."
      description="Our SEO experts use proven strategies and the latest algorithms to boost your search engine rankings. We combine technical SEO, content optimization, and link building to deliver sustainable organic growth for your business."
      technologies={["Google Analytics", "Search Console", "Ahrefs", "SEMrush", "Screaming Frog", "Moz", "PageSpeed Insights", "Schema Markup"]}
      benefits={[
        "Higher Google rankings for target keywords",
        "Increased organic traffic and visibility",
        "Better user experience and site performance",
        "Long-term sustainable results",
        "Detailed monthly reporting",
        "Local SEO for Delhi & HP businesses",
        "Technical SEO audit and fixes",
      ]}
      process={[
        { step: "SEO Audit", desc: "Comprehensive analysis of current rankings, issues, and opportunities." },
        { step: "Keyword Research", desc: "Identify high-value keywords your customers search for." },
        { step: "On-Page Optimization", desc: "Optimize content, meta tags, and site structure." },
        { step: "Monitoring & Reporting", desc: "Track rankings and report results monthly." },
      ]}
      faqs={[
        { q: "How long does SEO take to show results?", a: "SEO is a long-term strategy. You typically see meaningful improvements in 3-6 months, with significant results in 6-12 months." },
        { q: "Do you guarantee top Google rankings?", a: "No ethical SEO agency can guarantee #1 rankings. We guarantee best practices implementation and consistent improvement." },
        { q: "What is included in your SEO service?", a: "Technical SEO, on-page optimization, content strategy, link building, local SEO, and monthly reporting." },
        { q: "Do you do local SEO for India?", a: "Yes, we specialize in local SEO for businesses across India, including Google My Business optimization." },
      ]}
    />
  );
}
