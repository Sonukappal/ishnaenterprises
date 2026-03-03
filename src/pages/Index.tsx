import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSection from "@/components/home/HeroSection";
import AboutUsSection from "@/components/home/AboutUsSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import MobileAppSection from "@/components/home/MobileAppSection";
import DevOpsSection from "@/components/home/DevOpsSection";
import DigitalMarketingSection from "@/components/home/DigitalMarketingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ChirpyAISection from "@/components/home/ChirpyAISection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ishna Webtech Solutions | Web Development, Digital Marketing & DevOps</title>
        <meta name="description" content="Ishna Webtech Solutions - Transforming Ideas into Digital Excellence. Web Development, Digital Marketing & Cloud Solutions in Delhi & Himachal Pradesh." />
        <meta name="keywords" content="web development Delhi, digital marketing India, DevOps Azure AWS, eCommerce solutions, SEO services" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <ScrollReveal><ServicesSection /></ScrollReveal>
        <ScrollReveal delay={100}><AboutUsSection /></ScrollReveal>
        <ScrollReveal delay={100}><WhyChooseUs /></ScrollReveal>
        <ScrollReveal delay={100}><MobileAppSection /></ScrollReveal>
        <ScrollReveal delay={100}><DevOpsSection /></ScrollReveal>
        <ScrollReveal delay={100}><DigitalMarketingSection /></ScrollReveal>
        <ScrollReveal delay={100}><TestimonialsSection /></ScrollReveal>
        <ScrollReveal delay={100}><ChirpyAISection /></ScrollReveal>
        <ScrollReveal delay={100}><CTASection /></ScrollReveal>
      </main>
      <Footer />
    </>
  );
};

export default Index;
