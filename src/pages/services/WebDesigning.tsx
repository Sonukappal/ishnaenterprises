import ServicePageTemplate from "@/components/ServicePageTemplate";
import heroImage from "@/assets/hero-design.jpg";
import { Palette, Sparkles, Monitor, Users, Star, Zap } from "lucide-react";

export default function WebDesigning() {
  return (
    <ServicePageTemplate
      badge="Web Designing"
      color="hsl(262 83% 58%)"
      heroImage={heroImage}
      title="Creative Web Design & UI/UX"
      subtitle="Stunning, conversion-focused designs that captivate your audience and turn visitors into customers."
      description="Our design team creates beautiful, intuitive user interfaces that combine aesthetics with functionality. We follow UI/UX best practices to ensure every design not only looks stunning but also provides a seamless user experience that drives conversions."
      technologies={["Figma", "Adobe XD", "Photoshop", "Illustrator", "Tailwind CSS", "GSAP", "Framer Motion", "CSS3"]}
      benefits={[
        "User-centered design focused on conversions",
        "Brand-consistent visual identity across all pages",
        "Interactive prototypes before development",
        "Accessibility-compliant (WCAG) designs",
        "Custom illustrations and graphics",
        "Animation and micro-interaction design",
        "A/B testing for design optimization",
      ]}
      whyUsTitle="Why Choose Ishna Webtech for Web Design?"
      whyUsReasons={[
        { icon: Palette, title: "Brand-True Design", desc: "We don't use templates. Every pixel is crafted to reflect your unique brand identity and speak to your specific audience." },
        { icon: Sparkles, title: "Conversion-Focused", desc: "Beautiful isn't enough — our designs are strategically built to guide visitors toward taking action and becoming customers." },
        { icon: Monitor, title: "Cross-Device Perfect", desc: "Your design will look pixel-perfect on every screen — desktop, tablet, and mobile — without compromise." },
        { icon: Users, title: "User Research-Backed", desc: "We study your target users before designing. Every layout decision is informed by real user behavior data." },
        { icon: Star, title: "Premium Quality", desc: "Our design team has created interfaces for 150+ clients across diverse industries, bringing broad expertise to every project." },
        { icon: Zap, title: "Fast Iterations", desc: "With interactive Figma prototypes, you can review and approve designs quickly before a single line of code is written." },
      ]}
      process={[
        { step: "Brand Discovery", desc: "Understand your brand, target audience, and competitors." },
        { step: "Wireframing", desc: "Create low-fidelity wireframes for layout structure." },
        { step: "Visual Design", desc: "Develop full high-fidelity designs with your brand colors." },
        { step: "Prototype & Review", desc: "Interactive prototypes for stakeholder review." },
      ]}
      faqs={[
        { q: "Do you redesign existing websites?", a: "Yes, we specialize in both new website designs and complete redesigns of existing sites." },
        { q: "How many design revisions do I get?", a: "We offer 3 rounds of revisions as standard, with additional revisions available if needed." },
        { q: "Do you design mobile apps too?", a: "Yes, we design mobile app UI/UX for both iOS and Android platforms." },
        { q: "Will I own the design files?", a: "Absolutely. Upon project completion, all design files (Figma/XD) are handed over to you." },
      ]}
    />
  );
}
