import { Quote } from "lucide-react";
import founderPhoto from "@/assets/founder-photo.jpg";

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
            <div className="grid md:grid-cols-[280px_1fr] gap-0">
              {/* Photo */}
              <div className="relative">
                <img
                  src={founderPhoto}
                  alt="Founder of Ishna Webtech Solutions"
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                  "When I started Ishna Webtech Solutions, my vision was simple — to build a company where technology truly serves businesses, not the other way around. Every project we take on is a partnership. We don't just deliver code or campaigns; we invest in understanding your business deeply and crafting solutions that create real, measurable impact. Our team's passion for innovation combined with a commitment to transparency and quality is what sets us apart. I'm proud that 95% of our clients come back for more — it tells me we're doing something right."
                </blockquote>
                <div>
                  <div className="font-bold text-lg text-foreground">Ishna Gupta</div>
                  <div className="text-sm text-primary font-medium">Founder & CEO, Ishna Webtech Solutions</div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    With over 5 years of experience in web development and digital strategy, Ishna leads the company's vision of making world-class digital solutions accessible to businesses across India. A technologist at heart, he believes in the power of clean code, honest communication, and long-term partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}