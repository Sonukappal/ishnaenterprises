import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function WebDevelopment() {
  return (
    <ServicePageTemplate
      badge="Web Development"
      color="hsl(221 83% 53%)"
      title="Professional Web Development Services"
      subtitle="High-performance, SEO-friendly websites and web applications built with modern technologies for maximum business impact."
      description="We craft custom websites and web applications that are fast, secure, and scalable. From simple landing pages to complex enterprise platforms, our development team delivers solutions that drive results. Every project is built with clean code, optimal performance, and SEO best practices."
      technologies={["React", "Next.js", "Node.js", "TypeScript", "PHP", "Laravel", "MySQL", "MongoDB", "REST APIs", "GraphQL"]}
      benefits={[
        "Custom designs tailored to your brand identity",
        "Mobile-first, fully responsive across all devices",
        "SEO-optimized for better search engine rankings",
        "Fast loading speeds for better user experience",
        "Secure HTTPS with SSL certificates",
        "Scalable architecture for future growth",
        "Post-launch support and maintenance",
      ]}
      process={[
        { step: "Requirements Gathering", desc: "We analyze your business needs and define project scope." },
        { step: "Design & Prototyping", desc: "Create wireframes and visual designs for your approval." },
        { step: "Development", desc: "Build your website with clean, optimized code." },
        { step: "Testing & Launch", desc: "Thorough QA testing before going live." },
      ]}
      faqs={[
        { q: "How long does it take to build a website?", a: "Typically 2-6 weeks depending on complexity. A simple website takes 2-3 weeks, while complex applications may take 4-8 weeks." },
        { q: "Will my website be mobile-friendly?", a: "Absolutely. All our websites are built with a mobile-first approach and are fully responsive across all devices and screen sizes." },
        { q: "Do you provide website maintenance?", a: "Yes! We offer ongoing maintenance packages including updates, security patches, backups, and performance monitoring." },
        { q: "Can I update the website myself?", a: "Yes, we can integrate a CMS like WordPress so you can easily manage content without any technical knowledge." },
      ]}
    />
  );
}
