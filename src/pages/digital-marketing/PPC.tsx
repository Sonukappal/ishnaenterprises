import ServicePageTemplate from "@/components/ServicePageTemplate";
import heroImage from "@/assets/hero-digital-marketing.jpg";
import { MousePointerClick, TrendingUp, Shield, Zap, Users, Award } from "lucide-react";

export default function PPC() {
  return (
    <ServicePageTemplate
      badge="PPC Campaigns"
      color="hsl(25 95% 53%)"
      heroImage={heroImage}
      title="PPC & Paid Advertising Services"
      subtitle="Targeted pay-per-click campaigns that maximize ROI, drive qualified leads, and accelerate business growth."
      description="Our certified PPC specialists create and manage high-performing paid advertising campaigns on Google, Meta, and more. We optimize every rupee of your ad spend to deliver the lowest cost per acquisition and highest return on investment."
      technologies={["Google Ads", "Meta Ads", "LinkedIn Ads", "Display Network", "YouTube Ads", "Google Analytics", "Tag Manager", "Looker Studio"]}
      benefits={[
        "Immediate traffic and lead generation",
        "Highly targeted audience segmentation",
        "Optimized ad spend with maximum ROI",
        "A/B testing for continuous improvement",
        "Detailed conversion tracking",
        "Remarketing campaigns",
        "Transparent weekly reporting",
      ]}
      whyUsTitle="Why Choose Ishna Webtech to Run Your PPC Campaigns?"
      whyUsReasons={[
        { icon: MousePointerClick, title: "Certified PPC Experts", desc: "Our Google Ads and Meta Ads certified specialists have managed crores of rupees in ad spend across multiple industries." },
        { icon: TrendingUp, title: "Lower Cost Per Lead", desc: "Through rigorous A/B testing and bid optimization, we consistently deliver 30-50% lower cost per lead than industry averages." },
        { icon: Shield, title: "No Wasted Budget", desc: "We use negative keywords, audience exclusions, and ad scheduling to ensure not a single rupee of your budget is wasted." },
        { icon: Zap, title: "Instant Results", desc: "Unlike SEO, PPC delivers qualified traffic to your website within 24 hours of campaign launch." },
        { icon: Users, title: "Remarketing Mastery", desc: "We bring back visitors who didn't convert with strategic remarketing campaigns across Google Display and Meta platforms." },
        { icon: Award, title: "Full Transparency", desc: "You get full access to your ad accounts and weekly performance reports — no black boxes, ever." },
      ]}
      process={[
        { step: "Campaign Strategy", desc: "Define goals, budget, audience, and keyword targets." },
        { step: "Ad Creation", desc: "Write compelling ad copy with A/B variations." },
        { step: "Launch & Monitor", desc: "Launch campaigns and monitor performance daily." },
        { step: "Optimize & Scale", desc: "Continuously optimize and scale winning campaigns." },
      ]}
      faqs={[
        { q: "What is the minimum ad budget?", a: "We recommend a minimum monthly ad spend of ₹15,000-₹20,000 for meaningful results, separate from our management fee." },
        { q: "How quickly do PPC results show?", a: "PPC delivers immediate results. You can start seeing traffic and leads within 24-48 hours of campaign launch." },
        { q: "Do you manage Google Ads and Facebook Ads?", a: "Yes, we manage both Google Ads and Meta (Facebook/Instagram) Ads, as well as LinkedIn Ads." },
        { q: "How do you measure success?", a: "We track conversions, cost per lead, ROAS (Return on Ad Spend), and other KPIs defined upfront." },
      ]}
    />
  );
}
