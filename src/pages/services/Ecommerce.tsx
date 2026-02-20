import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function Ecommerce() {
  return (
    <ServicePageTemplate
      badge="eCommerce Solutions"
      color="hsl(25 95% 53%)"
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
