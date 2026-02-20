import { useEffect, useRef, useState } from "react";
import { Users, Clock, Award, Headphones, Rocket, DollarSign } from "lucide-react";

const features = [
{
  icon: Users,
  title: "Experienced Team",
  desc: "Our certified developers and marketers bring years of expertise to every project.",
  color: "hsl(var(--primary))"
},
{
  icon: Award,
  title: "Client-Centric Approach",
  desc: "We tailor every solution to your unique business goals and requirements.",
  color: "hsl(var(--secondary))"
},
{
  icon: Rocket,
  title: "Scalable Cloud Solutions",
  desc: "Future-ready infrastructure built on Azure and AWS for seamless scaling.",
  color: "hsl(var(--accent))"
},
{
  icon: DollarSign,
  title: "Affordable Pricing",
  desc: "Enterprise-grade quality at pricing accessible to businesses of all sizes.",
  color: "hsl(25 95% 53%)"
},
{
  icon: Clock,
  title: "On-Time Delivery",
  desc: "We meet deadlines consistently without compromising on quality.",
  color: "hsl(var(--primary))"
},
{
  icon: Headphones,
  title: "End-to-End Support",
  desc: "24/7 support from consultation through deployment and beyond.",
  color: "hsl(var(--secondary))"
}];


const stats = [
{ num: 200, suffix: "+", label: "Projects Delivered" },
{ num: 150, suffix: "+", label: "Happy Clients" },
{ num: 5, suffix: "+", label: "Years of Experience" },
{ num: 98, suffix: "%", label: "Client Satisfaction" }];


function AnimatedCounter({ num, suffix }: {num: number;suffix: string;}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = num / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= num) {
              setCount(num);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num]);

  return (
    <div ref={ref} className="stat-counter text-primary-foreground">
      {count}{suffix}
    </div>);

}

export default function WhyChooseUs() {
  return (
    <section className="section-padding" style={{ background: "hsl(210 40% 98%)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-badge mb-4">Why Choose Us</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Your Success is Our{" "}
            <span className="gradient-text-primary">Priority</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We combine technical expertise with a client-first approach to deliver solutions that truly make a difference.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature) =>
          <div
            key={feature.title}
            className="bg-white rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-card group">

              <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
              style={{ background: `${feature.color}15` }}>

                <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
              </div>
              <h3 className="font-bold text-base mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="gradient-primary rounded-3xl p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) =>
            <div key={stat.label} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter num={stat.num} suffix={stat.suffix} />
                </div>
                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}