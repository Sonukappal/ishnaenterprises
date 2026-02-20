import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechStartup Delhi",
    text: "Ishna Webtech transformed our online presence completely. Their team delivered our eCommerce platform on time and it exceeded our expectations. Sales increased by 200% within 3 months!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Marketing Head, HP Tourism",
    text: "The SEO and digital marketing work by Ishna Webtech has been phenomenal. We went from page 5 to top 3 on Google for our key terms. Highly recommended for any business in Himachal Pradesh!",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "Founder, EduTech India",
    text: "Their Azure cloud migration services were seamless. No downtime, full data security, and our infrastructure costs dropped by 40%. The team is professional and highly knowledgeable.",
    rating: 5,
  },
  {
    name: "Sunita Thakur",
    role: "Director, RetailMart",
    text: "From web design to ongoing support, Ishna Webtech has been our trusted digital partner. Their client-centric approach and on-time delivery makes them stand out.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="section-badge mb-4">Testimonials</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our <span className="gradient-text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Don't just take our word for it — here's what our clients across India have to say.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="bg-background rounded-3xl p-8 sm:p-12 border border-border relative overflow-hidden">
            {/* Decorative quote */}
            <div className="absolute top-6 right-8 opacity-5">
              <Quote className="w-24 h-24 text-primary" />
            </div>

            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
              ))}
            </div>

            <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed mb-8 font-medium relative z-10">
              "{testimonials[current].text}"
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg">
                {testimonials[current].name[0]}
              </div>
              <div>
                <div className="font-bold text-base">{testimonials[current].name}</div>
                <div className="text-muted-foreground text-sm">{testimonials[current].role}</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "2rem" : "0.5rem",
                    background: i === current ? "hsl(var(--primary))" : "hsl(var(--border))",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
