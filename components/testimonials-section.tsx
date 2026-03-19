"use client"

import { Star, CheckCircle, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "I used to dread presentations. After 2 weeks with Micro Skill Builder, I led our quarterly review to a standing ovation.",
    name: "Sarah Chen",
    title: "Senior Product Manager",
    company: "TechUnicorn",
    image: "SC",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    quote:
      "The real-time feedback changed everything. I finally understand what confident body language feels like.",
    name: "Marcus Johnson",
    title: "Sales Director",
    company: "Deloitte",
    image: "MJ",
    gradient: "from-cyan-500 to-teal-400",
  },
  {
    quote:
      "My interview success rate went from 20% to 80% in one month. This app is a game-changer.",
    name: "Emily Rodriguez",
    title: "Software Engineer",
    company: "Google",
    image: "ER",
    gradient: "from-blue-600 to-blue-400",
  },
]

const companies = [
  { name: "Google", logo: "G" },
  { name: "Deloitte", logo: "D" },
  { name: "BBC", logo: "B" },
  { name: "Meta", logo: "M" },
  { name: "Amazon", logo: "A" },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-36 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl" />
        
        {/* Decorative lines */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-blue-300/50 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-48 bg-gradient-to-b from-transparent via-cyan-300/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Stats Header */}
        <div className="text-center mb-20">
          {/* Animated Stars */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="relative">
                <Star className="w-8 h-8 text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                <div className="absolute inset-0 animate-ping">
                  <Star className="w-8 h-8 text-amber-400/30 fill-amber-400/30" style={{ animationDelay: `${i * 200}ms`, animationDuration: '3s' }} />
                </div>
              </div>
            ))}
          </div>
          
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg shadow-slate-200/50 border border-slate-100 mb-8">
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">4.9/5</span>
            <span className="w-px h-6 bg-slate-200" />
            <span className="text-slate-600 font-medium">from 487 reviews</span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            <span className="text-balance">Trusted by </span>
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Professionals
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C50 2 150 2 198 6" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="#2563eb"/>
                    <stop offset="0.5" stopColor="#06b6d4"/>
                    <stop offset="1" stopColor="#14b8a6"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          {/* Company Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className="group relative px-6 py-3 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50"
              >
                <span className="text-slate-400 group-hover:text-slate-700 font-semibold text-lg tracking-wide transition-colors duration-300">
                  {company.name}
                </span>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Premium Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${testimonial.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200/50 transition-all duration-500 hover:-translate-y-2">
                {/* Quote Icon */}
                <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center shadow-lg opacity-90 group-hover:scale-110 transition-transform duration-300`}>
                  <Quote className="w-7 h-7 text-white" />
                </div>
                
                {/* Stars */}
                <div className="flex items-center gap-1.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                
                {/* Quote Text */}
                <p className="text-slate-700 text-lg leading-relaxed mb-8 text-pretty">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar with Ring */}
                  <div className="relative">
                    <div className={`absolute -inset-1 bg-gradient-to-br ${testimonial.gradient} rounded-full opacity-50 blur-sm`} />
                    <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center ring-4 ring-white`}>
                      <span className="text-white font-bold text-base">{testimonial.image}</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-lg">{testimonial.name}</span>
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <p className="text-slate-500 font-medium">
                      {testimonial.title} @ <span className="text-slate-700">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
                
                {/* Bottom Gradient Line */}
                <div className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${testimonial.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </div>
          ))}
        </div>

        {/* Premium Counter */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center gap-4 px-12 py-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl shadow-slate-900/20">
            <p className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              8,247+
            </p>
            <p className="text-slate-400 text-lg font-medium tracking-wide uppercase">
              Professionals Transformed
            </p>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex -space-x-3">
                {['SC', 'MJ', 'ER', '+'].map((initial, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full border-2 border-slate-800 flex items-center justify-center text-sm font-semibold ${
                      i === 3 
                        ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white' 
                        : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <span className="text-slate-500 text-sm">Join them today</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
