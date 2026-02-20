import ServicePageTemplate from "@/components/ServicePageTemplate";
import heroImage from "@/assets/hero-digital-marketing.jpg";
import { PenTool, TrendingUp, Search, Users, Star, Award } from "lucide-react";

export default function ContentWriting() {
  return (
    <ServicePageTemplate
      badge="Content Writing"
      color="hsl(174 72% 40%)"
      heroImage={heroImage}
      title="Professional Content Writing Services"
      subtitle="Compelling, SEO-optimized content that establishes authority, drives traffic, and converts readers into customers."
      description="Our team of experienced content writers creates high-quality, engaging content that speaks to your target audience and performs in search engines. From blog posts to product descriptions, we craft every word with purpose."
      technologies={["SEO Writing", "WordPress", "Grammarly", "Surfer SEO", "Hemingway", "Copyscape", "Google Docs"]}
      benefits={[
        "SEO-optimized content for better rankings",
        "Brand voice consistency across all content",
        "Engaging blog posts and articles",
        "Product and service page copywriting",
        "Email newsletters and campaigns",
        "Social media captions and scripts",
        "100% original, plagiarism-free content",
      ]}
      whyUsTitle="Why Choose Ishna Webtech for Content Writing?"
      whyUsReasons={[
        { icon: PenTool, title: "SEO-First Writing", desc: "Every piece is optimized with the right keywords, heading structure, and readability scores before it even reaches you for review." },
        { icon: TrendingUp, title: "Content That Converts", desc: "We don't just write to fill pages — every article, page, and post is crafted to drive a specific business outcome." },
        { icon: Search, title: "Keyword Research Included", desc: "Every piece of content is preceded by thorough keyword research to ensure we're targeting terms your customers actually search for." },
        { icon: Users, title: "Industry Specialists", desc: "Our writers specialize in tech, healthcare, e-commerce, hospitality, and more — your content will always sound authentic." },
        { icon: Star, title: "Hindi & English Content", desc: "We serve the full Indian market with bilingual content capabilities — perfect for reaching audiences across all regions." },
        { icon: Award, title: "Zero Plagiarism Guarantee", desc: "Every piece passes Copyscape and Turnitin checks. You always get 100% original, unique content." },
      ]}
      process={[
        { step: "Topic Research", desc: "Research your industry, audience, and keyword opportunities." },
        { step: "Content Strategy", desc: "Create an editorial calendar aligned with your goals." },
        { step: "Writing & Editing", desc: "Write and edit high-quality content pieces." },
        { step: "Publish & Optimize", desc: "Publish and continuously optimize for performance." },
      ]}
      faqs={[
        { q: "What types of content do you write?", a: "Blog posts, articles, website copy, product descriptions, email newsletters, social media content, and more." },
        { q: "Do you write in Hindi?", a: "Yes, we offer content writing services in both English and Hindi for the Indian market." },
        { q: "Is the content SEO-optimized?", a: "Yes, all content is written with SEO best practices including keyword integration, meta descriptions, and proper heading structure." },
        { q: "How many revisions are included?", a: "We include 2 rounds of revisions per piece to ensure you're fully satisfied with the content." },
      ]}
    />
  );
}
