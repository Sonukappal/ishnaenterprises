import ServicePageTemplate from "@/components/ServicePageTemplate";
import heroImage from "@/assets/hero-digital-marketing.jpg";
import { Share2, TrendingUp, Users, Star, Zap, Award } from "lucide-react";

export default function SMM() {
  return (
    <ServicePageTemplate
      badge="Social Media Marketing"
      color="hsl(262 83% 58%)"
      heroImage={heroImage}
      title="Social Media Marketing (SMM)"
      subtitle="Build brand awareness, engage your audience, and drive conversions across all social platforms."
      description="We create and manage strategic social media campaigns that build your brand, engage your audience, and convert followers into customers. Our social media experts understand Indian markets and create content that resonates."
      technologies={["Meta Ads", "Instagram", "LinkedIn", "Twitter", "YouTube", "Canva", "Buffer", "Hootsuite", "Google Analytics"]}
      benefits={[
        "Consistent brand presence across all platforms",
        "Targeted audience growth strategies",
        "Engaging content that drives interactions",
        "Paid social advertising campaigns",
        "Influencer marketing coordination",
        "Community management and moderation",
        "Detailed analytics and ROI reporting",
      ]}
      whyUsTitle="Why Trust Ishna Webtech with Your Social Media?"
      whyUsReasons={[
        { icon: Share2, title: "India-Specific Strategy", desc: "We understand Indian social trends, festivals, and audiences. Our content resonates with your local customers at the right time." },
        { icon: TrendingUp, title: "Engagement-Led Growth", desc: "We focus on real engagement — comments, shares, saves — not just vanity metrics like follower counts." },
        { icon: Users, title: "Full Content Production", desc: "From graphic design to video editing and copywriting, we handle the entire content creation pipeline in-house." },
        { icon: Star, title: "Platform Specialists", desc: "We have dedicated experts for Facebook, Instagram, LinkedIn, and YouTube — not generalists handling everything at once." },
        { icon: Zap, title: "Rapid Response", desc: "Social media moves fast. Our community managers respond to comments and DMs within hours to keep your brand reputation strong." },
        { icon: Award, title: "Paid Ads Expertise", desc: "Our Meta Ads certified team runs highly targeted campaigns that deliver the lowest cost per lead in your industry." },
      ]}
      process={[
        { step: "Social Audit", desc: "Analyze current social presence and competitor landscape." },
        { step: "Strategy Development", desc: "Create a content calendar and campaign strategy." },
        { step: "Content Creation", desc: "Design engaging posts, reels, and stories." },
        { step: "Publish & Engage", desc: "Manage posting and engage with your community." },
      ]}
      faqs={[
        { q: "Which social platforms do you manage?", a: "We manage Facebook, Instagram, LinkedIn, Twitter/X, YouTube, and Pinterest depending on your target audience." },
        { q: "How many posts per month?", a: "Our standard packages include 20-30 posts per month across platforms, with more available in higher tiers." },
        { q: "Do you run paid ads?", a: "Yes, we create and manage Meta Ads, LinkedIn Ads, and other social advertising campaigns." },
        { q: "Do you create the content or do I need to provide it?", a: "We handle all content creation including copywriting, graphics, and video editing." },
      ]}
    />
  );
}
