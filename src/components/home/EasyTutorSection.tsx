import { GraduationCap, BookOpen, StickyNote, Brain, ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Create Your Own Course", desc: "Build personalized courses at your own pace with flexible content structuring" },
  { icon: StickyNote, title: "Smart Note-Taking", desc: "Take and organize notes directly within the app as you learn" },
  { icon: Brain, title: "Interactive Quizzes", desc: "Test your knowledge with built-in quizzes to reinforce learning" },
];

const highlights = [
  "Self-paced learning",
  "Organized study material",
  "Track your progress",
  "Free to get started",
];

const EasyTutorSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <GraduationCap className="w-4 h-4" />
              Our Product
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              Easy Tutor
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Your personal learning companion — create courses at your own pace, take smart notes, and test yourself with interactive quizzes. All in one place.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://easytutor.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              Try Easy Tutor Free
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Feature cards */}
          <div className="space-y-5">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="flex items-start gap-5 bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasyTutorSection;
