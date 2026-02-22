import ServicePageTemplate from "@/components/ServicePageTemplate";
import heroImage from "@/assets/hero-mobile-dev.jpg";
import { Smartphone, Rocket, Shield, Clock, Users, Award } from "lucide-react";

export default function MobileDevelopment() {
  return (
    <ServicePageTemplate
      badge="Mobile Development"
      color="hsl(262 83% 58%)"
      heroImage={heroImage}
      title="Professional Mobile App Development Services"
      subtitle="Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android."
      description="We build high-performance mobile applications that engage users and drive business growth. Whether you need a native iOS/Android app or a cross-platform solution, our team delivers polished, scalable apps tailored to your business needs. From concept to deployment on App Store and Google Play, we handle everything."
      technologies={["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "REST APIs", "GraphQL", "Push Notifications", "App Store Optimization", "CI/CD"]}
      benefits={[
        "Cross-platform apps with a single codebase for faster delivery",
        "Native performance with smooth animations and gestures",
        "Offline-first architecture for reliable user experience",
        "Push notifications for user engagement and retention",
        "Secure authentication with biometrics and OAuth",
        "App Store and Google Play deployment and optimization",
        "Post-launch analytics, monitoring, and updates",
      ]}
      whyUsTitle="Why Choose Ishna Webtech for Mobile Development?"
      whyUsReasons={[
        { icon: Smartphone, title: "Cross-Platform Expertise", desc: "We build apps using React Native and Flutter, delivering native-quality experiences on both iOS and Android from a single codebase." },
        { icon: Shield, title: "Secure & Scalable", desc: "Every app includes encrypted data storage, secure API communication, and architecture designed to handle millions of users." },
        { icon: Rocket, title: "Fast Time-to-Market", desc: "Our agile development process and reusable component libraries help launch your app 40% faster than traditional development." },
        { icon: Users, title: "UX-First Design", desc: "Our designers create intuitive, beautiful interfaces following Apple and Google design guidelines for maximum user satisfaction." },
        { icon: Clock, title: "Ongoing Maintenance", desc: "We provide continuous updates, bug fixes, and feature enhancements to keep your app running smoothly post-launch." },
        { icon: Award, title: "App Store Success", desc: "We handle ASO (App Store Optimization), submission guidelines, and marketing to ensure your app gets discovered and downloaded." },
      ]}
      process={[
        { step: "Discovery & Strategy", desc: "We analyze your target audience, define features, and create a detailed app roadmap." },
        { step: "UI/UX Design", desc: "Wireframes, prototypes, and pixel-perfect designs following platform guidelines." },
        { step: "Development & Testing", desc: "Agile sprints with continuous integration and automated testing." },
        { step: "Launch & Growth", desc: "App store deployment, ASO, analytics setup, and ongoing optimization." },
      ]}
      faqs={[
        { q: "Should I build a native or cross-platform app?", a: "Cross-platform (React Native/Flutter) is ideal for most businesses — it reduces cost by 40-60% while delivering near-native performance. We recommend native only for highly specialized apps like AR/VR or complex games." },
        { q: "How long does it take to build a mobile app?", a: "A simple app takes 6-8 weeks, while feature-rich apps may take 12-16 weeks. We provide a detailed timeline after the discovery phase." },
        { q: "Do you handle App Store and Play Store submission?", a: "Yes! We manage the entire submission process including screenshots, descriptions, compliance checks, and ASO optimization." },
        { q: "Can you integrate my app with existing systems?", a: "Absolutely. We integrate with any backend, CRM, payment gateway, or third-party API to create a seamless ecosystem." },
        { q: "Do you provide post-launch support?", a: "Yes, we offer maintenance packages including bug fixes, OS updates compatibility, performance monitoring, and feature additions." },
      ]}
    />
  );
}