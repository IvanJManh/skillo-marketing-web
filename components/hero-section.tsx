"use client"

import { useEffect, useState } from "react"
import { Play, CheckCircle, Sparkles, Star } from "lucide-react"

export function HeroSection() {
  const [confidenceScore, setConfidenceScore] = useState(87)

  useEffect(() => {
    const interval = setInterval(() => {
      setConfidenceScore((prev) => (prev >= 92 ? 87 : prev + 1))
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden pt-24">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />
        
        {/* Premium glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-cyan-400/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[80px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-700" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-white/[0.08] to-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full text-sm mb-8">
              <span className="flex items-center gap-1.5 text-cyan-300 font-medium">
                <Sparkles className="w-4 h-4" />
                AI-Powered
              </span>
              <span className="w-px h-4 bg-white/20" />
              <span className="text-slate-400">Product Hunt #1</span>
            </div>

            {/* Luxury headline */}
            <div className="mb-8">
              <p className="text-sm sm:text-base uppercase tracking-[0.25em] text-cyan-400/80 font-medium mb-4">
                The Coach in Your Pocket
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-tight">
                <span className="text-balance block">Speak Like You</span>
                <span className="block mt-2">
                  Were{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent font-medium">
                      Born Confident
                    </span>
                    <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
                  </span>
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed text-pretty">
              Transform your presence with AI mirror coaching. 
              Perfect your posture, voice, and charisma in just 
              <span className="text-white font-medium"> 2 minutes daily</span>.
            </p>

            {/* Premium CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#download"
                className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-medium text-base overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Join Early Access
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                </span>
              </a>
              <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-medium hover:bg-white/5 hover:border-white/30 transition-all duration-300">
                <span className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                  <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                </span>
                Watch Demo
              </button>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-slate-900 flex items-center justify-center"
                  >
                    <span className="text-xs text-slate-400 font-medium">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  <span className="text-white font-medium">10,000+</span> early adopters
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Premium Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Ambient glow behind phone */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-3xl scale-150 opacity-50" />
              
              {/* Phone Frame - Premium Design */}
              <div className="relative w-64 sm:w-72 lg:w-80">
                {/* Outer frame with gradient border */}
                <div className="relative bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-[3rem] p-[2px] shadow-2xl shadow-black/60">
                  <div className="bg-slate-900 rounded-[2.9rem] p-2">
                    {/* Screen */}
                    <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                      {/* Phone Notch - Dynamic Island style */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-slate-700 rounded-full" />
                        <div className="w-3 h-3 bg-slate-800 rounded-full ring-1 ring-slate-700" />
                      </div>

                      {/* Screen Content */}
                      <div className="pt-14 px-5 pb-6 h-full flex flex-col">
                        {/* Status indicator */}
                        <div className="text-center mb-6">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/20 rounded-full text-cyan-300 text-xs font-medium">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                            Mirror Mode Active
                          </div>
                        </div>

                        {/* Confidence Score - Premium circular display */}
                        <div className="flex justify-center mb-6">
                          <div className="relative w-36 h-36">
                            {/* Outer ring glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-blue-500/30 rounded-full blur-xl" />
                            
                            <svg className="w-full h-full transform -rotate-90 relative">
                              {/* Background track */}
                              <circle
                                cx="72"
                                cy="72"
                                r="62"
                                stroke="currentColor"
                                strokeWidth="6"
                                fill="none"
                                className="text-slate-800"
                              />
                              {/* Progress arc */}
                              <circle
                                cx="72"
                                cy="72"
                                r="62"
                                stroke="url(#premiumGradient)"
                                strokeWidth="6"
                                fill="none"
                                strokeDasharray={`${(confidenceScore / 100) * 390} 390`}
                                strokeLinecap="round"
                                className="transition-all duration-700 ease-out drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                              />
                              <defs>
                                <linearGradient id="premiumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#22D3EE" />
                                  <stop offset="50%" stopColor="#3B82F6" />
                                  <stop offset="100%" stopColor="#22D3EE" />
                                </linearGradient>
                              </defs>
                            </svg>
                            
                            {/* Center content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <span className="text-4xl font-light text-white tracking-tight">{confidenceScore}</span>
                              <span className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">Confidence</span>
                            </div>
                          </div>
                        </div>

                        {/* Premium feedback items */}
                        <div className="space-y-2.5 flex-1">
                          <FeedbackItem text="Perfect posture detected" active />
                          <FeedbackItem text="Vocal clarity: 92%" active />
                          <FeedbackItem text="Eye contact: Optimal" active />
                        </div>
                        
                        {/* Bottom indicator */}
                        <div className="mt-auto pt-4">
                          <div className="w-32 h-1 bg-white/20 rounded-full mx-auto" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements - More refined */}
              <div className="absolute -left-6 sm:-left-12 top-1/4 px-4 py-3 bg-white rounded-2xl shadow-xl shadow-black/20 animate-bounce-slow">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">↑</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">This week</p>
                    <p className="text-sm font-semibold text-slate-900">+12% Growth</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-4 sm:-right-8 bottom-1/4 px-4 py-3 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-white">AI Analyzing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}

function FeedbackItem({ text, active }: { text: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
      active 
        ? 'bg-gradient-to-r from-slate-800/80 to-slate-800/40 border border-slate-700/50' 
        : 'bg-slate-800/30'
    }`}>
      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
        <CheckCircle className="w-3 h-3 text-white" />
      </div>
      <span className="text-sm text-slate-300 font-light">{text}</span>
    </div>
  )
}
