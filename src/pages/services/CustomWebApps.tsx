import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function CustomWebApps() {
  return (
    <ServicePageTemplate
      badge="Custom Web Applications"
      color="hsl(221 83% 53%)"
      title="Custom Web Application Development"
      subtitle="Tailored web applications designed to automate, scale, and transform your business processes."
      description="We build bespoke web applications that address your specific business challenges. From SaaS platforms to enterprise portals, our custom development approach ensures you get exactly what your business needs with room to scale."
      technologies={["React", "Vue.js", "Node.js", "Python", "Django", "PostgreSQL", "Redis", "Docker", "AWS", "Azure"]}
      benefits={[
        "100% custom-built to your requirements",
        "Scalable architecture for growth",
        "Third-party API integrations",
        "Real-time data and notifications",
        "Role-based access control",
        "Advanced reporting and analytics",
        "Cloud deployment and DevOps",
      ]}
      process={[
        { step: "Discovery & Scoping", desc: "Deep-dive into requirements and technical architecture planning." },
        { step: "Prototype & Validate", desc: "Build MVP to validate core functionality." },
        { step: "Agile Development", desc: "Iterative development with regular demos and feedback." },
        { step: "Deploy & Scale", desc: "Cloud deployment with CI/CD pipelines." },
      ]}
      faqs={[
        { q: "How do you handle complex requirements?", a: "We start with thorough discovery sessions, create detailed specifications, and use agile methodology to deliver iteratively." },
        { q: "Do you sign NDAs?", a: "Yes, we're happy to sign NDAs before any project discussions to protect your intellectual property." },
        { q: "Who owns the code?", a: "You do! All code, designs, and intellectual property are fully owned by you upon project completion." },
        { q: "Can you integrate with existing systems?", a: "Yes, we have extensive experience integrating with ERPs, CRMs, payment systems, and custom APIs." },
      ]}
    />
  );
}
