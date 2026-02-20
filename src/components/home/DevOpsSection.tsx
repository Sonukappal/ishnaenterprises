import { Link } from "react-router-dom";
import { Cloud, Server, ArrowRight, Shield, Zap, DollarSign, Headphones } from "lucide-react";

const azureServices = [
  "Azure Deployment & Hosting",
  "Azure VM Setup",
  "Azure App Services",
  "Migration to Azure",
  "Azure DevOps Pipelines",
];

const awsServices = [
  "EC2 Instance Setup",
  "S3 Configuration",
  "Cloud Migration",
  "Infrastructure Automation",
  "AWS Lambda Functions",
];

const benefits = [
  { icon: Shield, label: "Secure", desc: "Enterprise-grade security" },
  { icon: Zap, label: "Scalable", desc: "Grows with your business" },
  { icon: DollarSign, label: "Cost-Effective", desc: "Optimized cloud spending" },
  { icon: Headphones, label: "Managed", desc: "Full support & monitoring" },
];

export default function DevOpsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-badge mb-4" style={{ background: "hsl(var(--accent) / 0.1)", color: "hsl(var(--accent))", borderColor: "hsl(var(--accent) / 0.2)" }}>
            DevOps & Cloud
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Cloud Infrastructure{" "}
            <span className="gradient-text-teal">Done Right</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Secure, scalable, and cost-effective cloud solutions on Azure and AWS with fully managed support.
          </p>
        </div>

        {/* Benefits row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {benefits.map((b) => (
            <div key={b.label} className="text-center p-5 rounded-2xl bg-background border border-border hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: "hsl(var(--accent) / 0.1)" }}>
                <b.icon className="w-5 h-5" style={{ color: "hsl(var(--accent))" }} />
              </div>
              <div className="font-bold text-sm">{b.label}</div>
              <div className="text-xs text-muted-foreground">{b.desc}</div>
            </div>
          ))}
        </div>

        {/* Azure + AWS cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Azure */}
          <div className="rounded-3xl overflow-hidden border border-border">
            <div className="p-6 text-white" style={{ background: "linear-gradient(135deg, #0078d4, #106ebe)" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Azure Services</h3>
                  <p className="text-white/70 text-sm">Microsoft Cloud Platform</p>
                </div>
              </div>
              <p className="text-white/80 text-sm">Enterprise-grade Azure solutions for modern businesses</p>
            </div>
            <div className="p-6 bg-white">
              <ul className="space-y-3 mb-5">
                {azureServices.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#0078d415", color: "#0078d4" }}>
                      ✓
                    </div>
                    {s}
                  </li>
                ))}
              </ul>
              <Link to="/devops/azure" className="btn-outline text-sm" style={{ borderColor: "#0078d4", color: "#0078d4" }}>
                Explore Azure Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* AWS */}
          <div className="rounded-3xl overflow-hidden border border-border">
            <div className="p-6 text-white" style={{ background: "linear-gradient(135deg, #FF9900, #e07c00)" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">AWS Services</h3>
                  <p className="text-white/70 text-sm">Amazon Web Services</p>
                </div>
              </div>
              <p className="text-white/80 text-sm">Powerful AWS infrastructure for businesses of all sizes</p>
            </div>
            <div className="p-6 bg-white">
              <ul className="space-y-3 mb-5">
                {awsServices.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#FF990015", color: "#e07c00" }}>
                      ✓
                    </div>
                    {s}
                  </li>
                ))}
              </ul>
              <Link to="/devops/aws" className="btn-outline text-sm" style={{ borderColor: "#FF9900", color: "#e07c00" }}>
                Explore AWS Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
