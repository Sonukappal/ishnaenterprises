import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function WebDesigning() {
  return (
    <ServicePageTemplate
      badge="Web Designing"
      color="hsl(262 83% 58%)"
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
