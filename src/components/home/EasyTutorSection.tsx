import { GraduationCap, BookOpen, StickyNote, Brain, ArrowRight, CheckCircle2, Sparkles, Play } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Create Your Own Course", desc: "Build personalized courses at your own pace with flexible content structuring", gradient: "from-emerald-500 to-green-400" },
  { icon: StickyNote, title: "Smart Note-Taking", desc: "Take and organize notes directly within the app as you learn", gradient: "from-teal-500 to-cyan-400" },
  { icon: Brain, title: "Interactive Quizzes", desc: "Test your knowledge with built-in quizzes to reinforce learning", gradient: "from-green-500 to-emerald-400" },
];

const highlights = [
  "Self-paced learning",
  "Organized study material",
  "Track your progress",
  "Free to get started",
];

const EasyTutorSection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-green-200/25 to-emerald-100/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-emerald-100/20 to-transparent rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-5 py-2 rounded-full text-sm font-semibold mb-5 shadow-sm">
            <Sparkles className="w-4 h-4" />
            Our Product
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Meet <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Easy Tutor</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Your personal learning companion — create courses, take smart notes, and master topics with interactive quizzes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Feature cards */}
          <div className="space-y-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-5 bg-white/90 backdrop-blur-sm border border-emerald-100/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1.5 group-hover:text-emerald-700 transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: CTA card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400/20 via-teal-300/10 to-green-400/20 rounded-3xl blur-2xl" />
            <div className="relative bg-white/95 backdrop-blur-md border border-emerald-100 rounded-3xl p-8 lg:p-10 shadow-xl shadow-emerald-500/10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/30">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-foreground text-center mb-3">
                Start Learning Today
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Join thousands of learners creating their own courses and mastering new skills.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-foreground bg-emerald-50/80 rounded-xl px-3 py-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://easytutor.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-0.5 text-lg group"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Try Easy Tutor — It's Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasyTutorSection;
