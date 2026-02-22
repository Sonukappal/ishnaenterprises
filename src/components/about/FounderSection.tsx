import { Quote } from "lucide-react";
import founderPhoto from "@/assets/founder-photo.webp";

export default function FounderSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-badge mb-4">Leadership</div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            What Our <span className="gradient-text-primary">Founder Says</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-background rounded-3xl border border-border overflow-hidden">
            <div className="grid md:grid-cols-[300px_1fr] gap-0">
              {/* Photo */}
              <div className="relative bg-white flex items-center justify-center p-6">
                <img
                  src={founderPhoto}
                  alt="Anil Kappal - Founder of Ishna Webtech Solutions"
                  className="w-full max-w-[260px] h-auto object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-base text-primary font-semibold mb-4 italic">
                  "We're not just building websites and applications — we're building experiences that leave a lasting impact."
                </p>
                <blockquote className="text-sm text-muted-foreground leading-relaxed mb-4">
                  At Ishna Webtech Solutions, our goal has always been to help businesses grow through smart, innovative, and result-driven digital solutions. With over 20+ years of experience in the IT and digital industry, I have witnessed how technology transforms businesses and creates endless opportunities. As a Certified Google Analytics professional, I strongly believe in data-driven strategies that deliver measurable results.
                </blockquote>
                <blockquote className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Our focus is not just on building websites or applications, but on creating digital platforms that add real value to our clients. We work with passion, transparency, and dedication to ensure every project we deliver becomes a success story. Ishna Webtech Solutions was founded with a vision to empower businesses with the right blend of Web Designing, Digital Marketing, and Mobile App Development services, and we continue to move forward with the same commitment and enthusiasm.
                </blockquote>
                <blockquote className="text-sm text-muted-foreground leading-relaxed mb-4">
                  With experience in managing large-scale operations, he has also overseen infrastructure and technology setups for 600+ seats, demonstrating strong leadership, technical expertise, and project management capabilities.
                </blockquote>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  His mission is to empower businesses with smart digital solutions that drive growth, efficiency, and long-term success. Under his leadership, Ishna Webtech Solutions continues to deliver high-quality, result-oriented services to clients worldwide.
                </p>
                <div>
                  <div className="font-bold text-lg text-foreground">Anil Kappal</div>
                  <div className="text-sm text-primary font-medium">Founder & CEO, Ishna Webtech Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}