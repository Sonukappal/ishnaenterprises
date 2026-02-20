import ServicePageTemplate from "@/components/ServicePageTemplate";
import heroImage from "@/assets/hero-web-dev.jpg";
import { Code2, Shield, Rocket, Users, Clock, Award } from "lucide-react";

export default function CustomWebApps() {
  return (
    <ServicePageTemplate
      badge="Custom Web Applications"
      color="hsl(221 83% 53%)"
      heroImage={heroImage}
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
      whyUsTitle="Why Build Your Custom App with Ishna Webtech?"
      whyUsReasons={[
        { icon: Code2, title: "Architecture Experts", desc: "We design scalable, maintainable architectures from day one — not quick fixes that create technical debt as you grow." },
        { icon: Shield, title: "Security by Design", desc: "Authentication, authorization, input validation, encryption — security is built into every layer, not bolted on at the end." },
        { icon: Rocket, title: "Agile Development", desc: "We deliver working software every 2 weeks. You get regular demos and can provide feedback throughout the process." },
        { icon: Users, title: "Dedicated Project Manager", desc: "A single point of contact who knows your project inside-out and keeps you updated without needing to follow up." },
        { icon: Clock, title: "You Own Everything", desc: "Full source code, documentation, and IP ownership is transferred to you. No vendor lock-in, ever." },
        { icon: Award, title: "Post-Launch Partnership", desc: "Our relationship doesn't end at launch. We offer flexible support and enhancement plans to evolve your application." },
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
