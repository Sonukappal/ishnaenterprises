import ServicePageTemplate from "@/components/ServicePageTemplate";
import heroImage from "@/assets/hero-devops.jpg";
import { Cloud, Shield, Zap, DollarSign, Users, Clock } from "lucide-react";

export default function AzureServices() {
  return (
    <ServicePageTemplate
      badge="Azure Services"
      color="#0078d4"
      heroImage={heroImage}
      title="Microsoft Azure Cloud Services"
      subtitle="Enterprise-grade Azure solutions including deployment, migration, VM setup, and fully managed cloud infrastructure."
      description="As Azure specialists, we help businesses migrate to and optimize their Microsoft Azure cloud infrastructure. From initial setup to ongoing management, we ensure your cloud environment is secure, scalable, and cost-efficient."
      technologies={["Azure VMs", "Azure App Service", "Azure DevOps", "Azure SQL", "Azure Storage", "Azure CDN", "Active Directory", "Azure Monitor", "ARM Templates"]}
      benefits={[
        "Seamless migration from on-premise to cloud",
        "99.9% uptime SLA with Azure",
        "Enterprise-grade security and compliance",
        "Auto-scaling based on demand",
        "Cost optimization and resource management",
        "24/7 monitoring and alerts",
        "Disaster recovery and backup solutions",
      ]}
      whyUsTitle="Why Choose Ishna Webtech for Azure Services?"
      whyUsReasons={[
        { icon: Cloud, title: "Azure-Certified Engineers", desc: "Our team holds Microsoft Azure certifications (AZ-900, AZ-104, AZ-204). You get experts, not trainees, working on your infrastructure." },
        { icon: Shield, title: "Security & Compliance", desc: "We implement Azure Security Center, Active Directory, RBAC, and encryption to ensure your data meets ISO 27001 and GDPR standards." },
        { icon: Zap, title: "Zero-Downtime Migration", desc: "Our proven migration methodology ensures your business stays online during the transition from on-premise or other clouds to Azure." },
        { icon: DollarSign, title: "Cost Optimization", desc: "We use Azure Cost Management, reserved instances, and right-sizing to cut your cloud bills by up to 40% without sacrificing performance." },
        { icon: Users, title: "Dedicated Support", desc: "Your Azure environment is monitored 24/7. Our team resolves issues proactively — often before you even notice a problem." },
        { icon: Clock, title: "Fast Setup", desc: "Basic Azure environments are up and running within 3-7 days. We use ARM templates and automation for consistent, rapid deployments." },
      ]}
      process={[
        { step: "Cloud Assessment", desc: "Evaluate current infrastructure and plan migration strategy." },
        { step: "Architecture Design", desc: "Design secure and scalable Azure architecture." },
        { step: "Migration & Setup", desc: "Execute migration with zero downtime approach." },
        { step: "Monitor & Optimize", desc: "Ongoing monitoring, optimization, and support." },
      ]}
      faqs={[
        { q: "Can you migrate our on-premise server to Azure?", a: "Yes, we specialize in on-premise to Azure cloud migrations with minimal downtime and full data integrity." },
        { q: "How long does Azure setup take?", a: "Basic Azure setup takes 3-7 days. Full migrations with complex environments may take 2-6 weeks depending on scope." },
        { q: "Will our data be secure on Azure?", a: "Azure provides enterprise-grade security with ISO 27001, SOC 2, and GDPR compliance. We also implement additional security hardening." },
        { q: "What Azure pricing model is best for us?", a: "We analyze your usage patterns and recommend Pay-As-You-Go, Reserved Instances, or Hybrid Benefit based on your needs." },
      ]}
    />
  );
}
