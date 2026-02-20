import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function CMSDevelopment() {
  return (
    <ServicePageTemplate
      badge="CMS Development"
      color="hsl(174 72% 40%)"
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
