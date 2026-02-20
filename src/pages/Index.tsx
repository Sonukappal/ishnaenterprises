import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import DevOpsSection from "@/components/home/DevOpsSection";
import DigitalMarketingSection from "@/components/home/DigitalMarketingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
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
        <ServicesSection />
        <WhyChooseUs />
        <DevOpsSection />
        <DigitalMarketingSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
