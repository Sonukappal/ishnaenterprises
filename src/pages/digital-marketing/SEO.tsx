import ServicePageTemplate from "@/components/ServicePageTemplate";
import heroImage from "@/assets/hero-seo.jpg";
import { Search, TrendingUp, Shield, Award, Clock, Users } from "lucide-react";

export default function SEO() {
  return (
    <ServicePageTemplate
      badge="SEO Services"
      color="hsl(221 83% 53%)"
      heroImage={heroImage}
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
      whyUsTitle="Why Choose Ishna Webtech for SEO?"
      whyUsReasons={[
        { icon: Search, title: "White-Hat Only", desc: "We use only Google-approved SEO techniques. No shortcuts that could get your site penalized — only strategies built to last." },
        { icon: TrendingUp, title: "Data-Driven Results", desc: "Every keyword we target, every change we make is backed by real data from Ahrefs, SEMrush, and Google Search Console." },
        { icon: Shield, title: "Algorithm-Proof Strategy", desc: "We build SEO foundations that withstand Google updates — because we focus on E-E-A-T, not tricks." },
        { icon: Users, title: "Local SEO Specialists", desc: "We understand the Indian market deeply and specialize in local SEO for businesses in Delhi, Himachal Pradesh, and beyond." },
        { icon: Clock, title: "Monthly Reporting", desc: "You get clear, jargon-free monthly reports showing exactly what improved, what's next, and the ROI of our work." },
        { icon: Award, title: "Proven Track Record", desc: "We've taken 100+ client websites from page 5 to page 1 across competitive keywords in multiple industries." },
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
