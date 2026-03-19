"use client"

import { Sparkles, Camera, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Sparkles,
    number: "01",
    title: "Choose Your Focus",
    description: "Pick from 100+ micro-skills tailored to your goals",
    skills: ["Interview", "Presentation", "Networking"],
    gradient: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/20",
    iconBg: "from-blue-600 to-blue-400",
  },
  {
    icon: Camera,
    number: "02",
    title: "Practice with AI Mirror",
    description: "Get live feedback on Body, Voice, and Expression",
    skills: ["Posture", "Voice", "Expression"],
    gradient: "from-cyan-500 to-teal-400",
    glow: "shadow-cyan-500/20",
    iconBg: "from-cyan-600 to-cyan-400",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Track Mastery",
    description: "Watch your confidence score climb with each session",
    skills: ["65%", "82%", "94%"],
    gradient: "from-teal-500 to-emerald-400",
    glow: "shadow-teal-500/20",
    iconBg: "from-teal-600 to-teal-400",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-36 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-[10%] w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDuration: "3s" }} />
        <div className="absolute top-40 right-[15%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" style={{ animationDuration: "4s" }} />
        <div className="absolute bottom-32 left-[20%] w-1 h-1 bg-teal-400 rounded-full animate-ping" style={{ animationDuration: "3.5s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-20">
          {/* Decorative badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse" />
            <span className="text-sm font-medium text-cyan-300 tracking-wide uppercase">3-Step Transformation</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-balance">
              Your Daily{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent">
                  Confidence Ritual
                </span>
                <span className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-lg" />
              </span>
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto text-pretty leading-relaxed">
            Transform your communication skills in just <span className="text-cyan-300 font-semibold">2 minutes</span> a day.
          </p>
        </div>

        {/* Connection Line - Desktop */}
        <div className="hidden lg:block relative mb-8">
          <div className="absolute top-8 left-[16%] right-[16%] h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 blur-sm" />
          </div>
          {/* Connection dots */}
          <div className="absolute top-[26px] left-[16%] w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
          <div className="absolute top-[26px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50" />
          <div className="absolute top-[26px] right-[16%] w-3 h-3 rounded-full bg-teal-500 shadow-lg shadow-teal-500/50" />
        </div>

        {/* Step Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Card glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${step.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
              
              <div className={`relative h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-500 shadow-2xl ${step.glow} group-hover:shadow-xl group-hover:-translate-y-2`}>
                {/* Gradient top border */}
                <div className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${step.gradient} rounded-full opacity-60`} />
                
                {/* Number Badge - Floating */}
                <div className="absolute -top-5 left-8">
                  <div className={`relative px-5 py-2 bg-gradient-to-r ${step.gradient} rounded-xl shadow-lg`}>
                    <span className="text-sm font-bold text-white tracking-wider">{step.number}</span>
                    <div className={`absolute inset-0 bg-gradient-to-r text-background border ${step.gradient} blur-md opacity-10 rounded-3xl`} />
                  </div>
                </div>

                {/* Premium Icon */}
                <div className="relative mt-4 mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.iconBg} flex items-center justify-center shadow-lg relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10" />
                    <step.icon className="w-8 h-8 text-white relative z-10" />
                  </div>
                  {/* Icon glow */}
                  <div className={`absolute -inset-2 bg-gradient-to-r ${step.gradient} opacity-20 blur-xl rounded-full`} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">{step.description}</p>

                {/* Premium Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {step.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        step.number === "03" 
                          ? "bg-gradient-to-r from-slate-700/80 to-slate-800/80 text-teal-300 border border-teal-500/20 hover:border-teal-500/40" 
                          : "bg-slate-800/80 text-slate-300 border border-slate-600/30 hover:border-slate-500/50 hover:bg-slate-700/80"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Decorative corner accent */}
                <div className={`absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-tl ${step.gradient} opacity-5 rounded-tl-3xl`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-3">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-blue-500" />
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-teal-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
