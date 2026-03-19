"use client"

import { User, Mic, Smile, Sparkles } from "lucide-react"

const features = [
  {
    icon: User,
    title: "Never Second-Guess Your Presence Again",
    description: "Our AI detects 23 posture points & gives instant corrections",
    gradient: "from-blue-600 via-blue-500 to-cyan-400",
    shadowColor: "shadow-blue-500/25",
    number: "01",
  },
  {
    icon: Mic,
    title: "Sound As Confident As You Want To Be",
    description: "Vocal analysis for pace, clarity, and emotional tone",
    gradient: "from-cyan-500 via-blue-500 to-blue-600",
    shadowColor: "shadow-cyan-500/25",
    number: "02",
  },
  {
    icon: Smile,
    title: "Make Every First Impression Count",
    description: "Facial expression feedback for authentic engagement",
    gradient: "from-blue-500 via-cyan-400 to-teal-400",
    shadowColor: "shadow-teal-500/25",
    number: "03",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 lg:py-36 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Luxury background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Ambient gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium header */}
        <div className="text-center mb-20 lg:mb-28">
          {/* Luxury badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 mb-8 border border-popover-foreground">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 tracking-wide uppercase">AI-Powered Excellence</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            <span className="text-balance">
              The Coach{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  In Your Pocket
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-200/50 via-cyan-200/50 to-blue-200/50 blur-sm" />
              </span>
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto text-pretty font-light leading-relaxed">
            Real-time AI feedback that transforms how you communicate, present, and connect with absolute confidence.
          </p>
        </div>

        {/* Feature cards with luxury design */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`} />
              
              {/* Main card */}
              <div className="relative h-full p-8 lg:p-10 rounded-3xl border border-slate-100 hover:border-transparent transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10 bg-secondary">
                {/* Number indicator */}
                <span className="absolute top-6 right-6 text-6xl font-bold text-slate-100 group-hover:text-blue-50 transition-colors duration-300 select-none opacity-100 shadow-md bg-border">
                  {feature.number}
                </span>
                
                {/* Icon container with luxury styling */}
                <div className="relative mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-br shadow-none ${feature.gradient} rounded-2xl blur-lg group-hover:opacity-60 transition-opacity duration-300 opacity-25`} />
                  <div
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg ${feature.shadowColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-4 leading-tight group-hover:text-slate-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-0.5`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16 lg:mt-24">
          <div className="flex items-center gap-3 text-slate-400">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-slate-300" />
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-60" />
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-30" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-slate-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
