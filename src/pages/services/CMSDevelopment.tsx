import ServicePageTemplate from "@/components/ServicePageTemplate";
import heroImage from "@/assets/hero-web-dev.jpg";
import { Database, Shield, Users, Zap, Clock, Star } from "lucide-react";

export default function CMSDevelopment() {
  return (
    <ServicePageTemplate
      badge="CMS Development"
      color="hsl(174 72% 40%)"
      heroImage={heroImage}
      title="CMS Development Services"
      subtitle="Flexible content management solutions with WordPress, Drupal, and headless CMS for easy content control."
      description="We build powerful content management systems that empower your team to update and manage content without technical knowledge. From WordPress to headless CMS solutions, we create systems that scale with your content needs."
      technologies={["WordPress", "Drupal", "Contentful", "Strapi", "Sanity", "Ghost", "PHP", "MySQL", "REST API"]}
      benefits={[
        "Easy-to-use content editor for non-technical users",
        "Custom post types and taxonomies",
        "Multi-user role management",
        "SEO plugins and optimization",
        "Media library management",
        "Multilingual content support",
        "Automatic backups and security hardening",
      ]}
      whyUsTitle="Why Choose Ishna Webtech for CMS Development?"
      whyUsReasons={[
        { icon: Database, title: "Right CMS for You", desc: "We don't push one platform for everyone. We evaluate your needs and recommend WordPress, Strapi, or headless CMS based on your goals." },
        { icon: Users, title: "Team Training Included", desc: "After delivery, we provide hands-on training so your team can confidently manage all content without any technical help." },
        { icon: Shield, title: "Hardened Security", desc: "CMS platforms are common attack targets. We implement WAF, security plugins, hardened configs, and regular update management." },
        { icon: Zap, title: "Performance Optimized", desc: "We configure caching, CDN, and image optimization so your CMS-powered site is fast, not slow like typical WordPress sites." },
        { icon: Clock, title: "Quick Go-Live", desc: "Standard CMS projects go live in 2-4 weeks. We use proven starter setups to move fast without skipping quality." },
        { icon: Star, title: "Ongoing Support", desc: "CMS platforms need updates and care. Our maintenance plans keep your site secure, updated, and performing at its best." },
      ]}
      process={[
        { step: "CMS Selection", desc: "Choose the right CMS based on your needs and technical requirements." },
        { step: "Theme Development", desc: "Build custom themes matching your brand design." },
        { step: "Plugin Integration", desc: "Add required functionality via plugins or custom development." },
        { step: "Training & Launch", desc: "Train your team to use the CMS effectively." },
      ]}
      faqs={[
        { q: "Which CMS do you recommend?", a: "WordPress is our most recommended option for most businesses due to its flexibility, large ecosystem, and ease of use." },
        { q: "Can you migrate from another CMS?", a: "Yes, we handle migrations from any CMS platform including Joomla, Drupal, Wix, and others." },
        { q: "Will my CMS be secure?", a: "Yes, we implement security hardening, SSL, regular updates, and firewall protection." },
        { q: "Do you provide CMS training?", a: "Yes, we provide comprehensive training sessions for your team after project completion." },
      ]}
    />
  );
}
