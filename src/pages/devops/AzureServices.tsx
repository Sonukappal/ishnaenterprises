import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function AzureServices() {
  return (
    <ServicePageTemplate
      badge="Azure Services"
      color="#0078d4"
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
