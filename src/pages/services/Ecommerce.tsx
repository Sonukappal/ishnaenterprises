import ServicePageTemplate from "@/components/ServicePageTemplate";
import heroImage from "@/assets/hero-ecommerce.jpg";
import { ShoppingCart, Shield, Zap, TrendingUp, Users, Star } from "lucide-react";

export default function Ecommerce() {
  return (
    <ServicePageTemplate
      badge="eCommerce Solutions"
      color="hsl(25 95% 53%)"
      heroImage={heroImage}
      title="eCommerce Solutions That Sell"
      subtitle="Feature-rich online stores with seamless checkout, payment integration, and powerful inventory management."
      description="We build powerful eCommerce platforms that drive sales and deliver exceptional shopping experiences. From WooCommerce to custom solutions, we create online stores that are fast, secure, and optimized for conversions."
      technologies={["WooCommerce", "Shopify", "Magento", "Custom React", "Stripe", "PayPal", "Razorpay", "Node.js", "MySQL"]}
      benefits={[
        "Intuitive product catalog and search",
        "Secure payment gateway integration (Razorpay, PayPal, Stripe)",
        "Mobile-optimized shopping experience",
        "Inventory and order management system",
        "SEO-optimized product pages",
        "Customer account management",
        "Analytics and sales reporting",
      ]}
      whyUsTitle="Why Choose Ishna Webtech for Your Online Store?"
      whyUsReasons={[
        { icon: ShoppingCart, title: "India-Ready Payment Setup", desc: "We integrate Razorpay, PayPal, CCAvenue and UPI natively — all Indian payment methods your customers already trust." },
        { icon: Shield, title: "PCI-DSS Secure", desc: "Your customers' financial data is always protected. We follow PCI-DSS compliance standards for all eCommerce stores." },
        { icon: Zap, title: "Optimized for Speed", desc: "A 1-second delay costs 7% in conversions. We build stores that load in under 2 seconds for maximum revenue." },
        { icon: TrendingUp, title: "Built to Scale", desc: "Whether you have 100 or 1,00,000 products, our architecture scales effortlessly without performance degradation." },
        { icon: Users, title: "Admin Panel Training", desc: "After launch, we train your team to manage products, orders, and customers with ease — no technical knowledge needed." },
        { icon: Star, title: "Post-Launch Support", desc: "We don't disappear after launch. Our team monitors your store and provides ongoing support to ensure smooth operations." },
      ]}
      process={[
        { step: "Store Planning", desc: "Define product catalog, payment flow, and feature requirements." },
        { step: "Design & UX", desc: "Create conversion-optimized store design." },
        { step: "Development", desc: "Build the store with all integrations." },
        { step: "Testing & Launch", desc: "Full checkout flow testing before go-live." },
      ]}
      faqs={[
        { q: "Which payment gateways do you support?", a: "We integrate Razorpay, PayPal, Stripe, CCAvenue, and most Indian and international payment gateways." },
        { q: "Can I manage products myself?", a: "Yes, we provide an easy-to-use admin panel for adding, editing, and managing products." },
        { q: "Do you support COD (Cash on Delivery)?", a: "Yes, we support all major Indian delivery methods including COD, prepaid, and EMI options." },
        { q: "Can you migrate my existing store?", a: "Yes, we handle complete migrations from any platform with zero data loss." },
      ]}
    />
  );
}
