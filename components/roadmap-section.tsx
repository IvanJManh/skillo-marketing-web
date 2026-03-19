"use client";

import { Sparkles, Check, ArrowRight } from "lucide-react";

export function RoadmapSection() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      date: "2025",
      isCurrent: false,
      items: [
        "Core AI posture detection engine",
        "Real-time mirror feedback system",
        "Basic voice analysis module",
        "iOS and Android app launch",
      ],
    },
    {
      phase: "Phase 2",
      title: "Intelligence",
      date: "2025 Dec - Present",
      isCurrent: true,
      items: [
        "Advanced facial expression recognition",
        "Personalized coaching algorithms",
        "Progress tracking dashboard",
        "Community features and challenges",
      ],
    },
    {
      phase: "Phase 3",
      title: "Mastery",
      date: "Coming 2026",
      isCurrent: false,
      items: [
        "Enterprise team coaching",
        "VR presentation practice",
        "AI-generated scenario training",
        "Global leaderboards and certifications",
      ],
    },
  ];

  return (
    <section id="roadmap" className="relative py-24 md:py-32 overflow-hidden bg-slate-50">
      {/* Background gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-200/40 via-blue-200/30 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/30 via-cyan-200/20 to-transparent blur-3xl" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-200 bg-white/80 backdrop-blur-sm mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span className="text-sm font-medium text-slate-700">Roadmap</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-4">
            <span className="text-balance">Our future path with{" "}</span>
            <span className="font-medium bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Micro Skill
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-slate-500 font-light">
            From practice to perfection.
          </p>
        </div>

        {/* Journey Start Pill */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="px-12 py-6 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 rounded-[2rem] shadow-lg shadow-cyan-200/50">
              <p className="text-lg md:text-xl font-medium text-slate-900 text-center">
                Our journey begins in 2025 Sep
              </p>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 rounded-[2rem] blur-xl opacity-40 -z-10" />
          </div>
        </div>

        {/* Connecting lines from pill */}
        <div className="hidden md:flex justify-center gap-[calc(33.33%-2rem)] mb-0">
          <div className="w-px h-16 bg-gradient-to-b from-slate-300 to-slate-200" />
          <div className="w-px h-16 bg-gradient-to-b from-slate-300 to-slate-200" />
        </div>

        {/* Phase Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {phases.map((phase, index) => (
            <div key={phase.phase} className="relative">
              {/* Connecting line to card */}
              <div className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-slate-200" />

              {/* Card */}
              <div
                className={`relative rounded-3xl p-8 transition-all duration-500 group ${
                  phase.isCurrent
                    ? "bg-slate-900 text-white shadow-2xl shadow-slate-900/20"
                    : "bg-white text-slate-900 shadow-lg shadow-slate-200/50 hover:shadow-xl"
                }`}
              >
                {/* Corner accent for current phase */}
                {phase.isCurrent && (
                  <>
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                  </>
                )}

                {/* Phase header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`text-sm font-medium ${
                        phase.isCurrent ? "text-cyan-400" : "text-cyan-600"
                      }`}
                    >
                      {phase.phase}
                    </span>
                    {phase.isCurrent && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <h3
                    className={`text-2xl font-semibold mb-1 ${
                      phase.isCurrent ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {phase.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      phase.isCurrent ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {phase.date}
                  </p>
                </div>

                {/* Items list */}
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div
                        className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          phase.isCurrent
                            ? "bg-cyan-500/20"
                            : "bg-cyan-100"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            phase.isCurrent ? "text-cyan-400" : "text-cyan-600"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm leading-relaxed ${
                          phase.isCurrent ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom accent line on hover */}
                <div
                  className={`absolute bottom-0 left-8 right-8 h-0.5 rounded-full transition-all duration-300 ${
                    phase.isCurrent
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                      : "bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100"
                  }`}
                />
              </div>

              {/* Arrow indicator for mobile */}
              {index < phases.length - 1 && (
                <div className="flex justify-center my-4 md:hidden">
                  <ArrowRight className="w-5 h-5 text-slate-300 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-slate-300" />
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-slate-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
