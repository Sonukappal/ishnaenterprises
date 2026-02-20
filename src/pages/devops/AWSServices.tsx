import ServicePageTemplate from "@/components/ServicePageTemplate";
import heroImage from "@/assets/hero-devops.jpg";
import { Server, Shield, Zap, DollarSign, Users, Clock } from "lucide-react";

export default function AWSServices() {
  return (
    <ServicePageTemplate
      badge="AWS Services"
      color="#FF9900"
      heroImage={heroImage}
      title="Amazon Web Services (AWS) Solutions"
      subtitle="Comprehensive AWS cloud solutions including EC2, S3, Lambda, cloud migration, and infrastructure automation."
      description="We design, deploy, and manage robust AWS cloud infrastructure for businesses of all sizes. Our AWS-certified team helps you leverage the full power of Amazon Web Services to build scalable, reliable, and cost-effective applications."
      technologies={["EC2", "S3", "RDS", "Lambda", "CloudFront", "Route 53", "IAM", "CloudWatch", "Terraform", "AWS CDK", "ECS", "EKS"]}
      benefits={[
        "Globally distributed infrastructure",
        "Automatic scaling and load balancing",
        "Pay only for what you use",
        "Built-in redundancy and failover",
        "Comprehensive security with IAM",
        "Infrastructure as Code with Terraform",
        "CI/CD pipeline automation",
      ]}
      whyUsTitle="Why Choose Ishna Webtech for AWS Services?"
      whyUsReasons={[
        { icon: Server, title: "AWS-Certified Team", desc: "Our engineers hold AWS certifications (SAA, DVA, SOA). Your infrastructure is in the hands of verified cloud experts." },
        { icon: Shield, title: "Security by Default", desc: "We configure IAM roles, VPC security groups, encryption at rest/transit, and CloudTrail audit logging from the start." },
        { icon: Zap, title: "Infrastructure as Code", desc: "We use Terraform and AWS CDK for all setups — meaning your infrastructure is version-controlled, repeatable, and disaster-proof." },
        { icon: DollarSign, title: "AWS Cost Savings", desc: "We analyze your workloads and implement Savings Plans, Spot Instances, and Reserved Instances to reduce your AWS bill significantly." },
        { icon: Users, title: "24/7 CloudWatch Monitoring", desc: "Real-time alerting via CloudWatch and SNS means we know about issues before they affect your users." },
        { icon: Clock, title: "Rapid Deployment", desc: "With our pre-built Terraform modules, standard AWS environments are production-ready in days, not weeks." },
      ]}
      process={[
        { step: "AWS Assessment", desc: "Evaluate requirements and design optimal AWS architecture." },
        { step: "Infrastructure Setup", desc: "Configure VPC, EC2, RDS, S3, and other services." },
        { step: "Application Deployment", desc: "Deploy applications with auto-scaling and load balancing." },
        { step: "Monitoring & Maintenance", desc: "Set up CloudWatch monitoring and ongoing management." },
      ]}
      faqs={[
        { q: "What AWS services do you work with?", a: "We work with the full AWS ecosystem including EC2, S3, RDS, Lambda, ECS, EKS, CloudFront, Route 53, and more." },
        { q: "Can you optimize our existing AWS costs?", a: "Yes! AWS cost optimization is one of our specialties. We typically reduce costs by 20-40% through rightsizing and reserved instances." },
        { q: "Do you provide 24/7 AWS monitoring?", a: "Yes, we set up CloudWatch alarms and provide 24/7 monitoring with incident response." },
        { q: "What is Infrastructure as Code?", a: "We use Terraform and AWS CDK to manage infrastructure through code, enabling version control and repeatable deployments." },
      ]}
    />
  );
}
