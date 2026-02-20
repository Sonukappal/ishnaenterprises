import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function ContentWriting() {
  return (
    <ServicePageTemplate
      badge="Content Writing"
      color="hsl(174 72% 40%)"
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
