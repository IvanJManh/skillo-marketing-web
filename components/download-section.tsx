"use client"

import { Clock, Cpu, BookOpen, BarChart3, Check } from "lucide-react"

const features = [
  { icon: Clock, text: "2-minute daily sessions" },
  { icon: Cpu, text: "Real-time AI feedback" },
  { icon: BookOpen, text: "100+ micro-skills" },
  { icon: BarChart3, text: "Progress tracking" },
]

const trustItems = [
  "No credit card required",
  "Cancel anytime",
  "7-day free trial",
]

export function DownloadSection() {
  return (
    <section id="download" className="py-20 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          <span className="text-balance">Start Your Transformation Today</span>
        </h2>
        <p className="text-lg text-slate-300 mb-12 text-pretty">
          Download the app & get 7 days free premium access
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#"
            className="group flex items-center gap-3 px-6 py-4 bg-white rounded-xl hover:bg-slate-100 transition-all duration-300"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
            </svg>
            <div className="text-left">
              <p className="text-xs text-slate-500">Download on the</p>
              <p className="text-lg font-semibold text-slate-900">App Store</p>
            </div>
            <span className="ml-auto px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">
              4.9 Rating
            </span>
          </a>

          <a
            href="#"
            className="group flex items-center gap-3 px-6 py-4 bg-white rounded-xl hover:bg-slate-100 transition-all duration-300"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
            </svg>
            <div className="text-left">
              <p className="text-xs text-slate-500">Get it on</p>
              <p className="text-lg font-semibold text-slate-900">Google Play</p>
            </div>
            <span className="ml-auto px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
              Editor{"'"}s Choice
            </span>
          </a>
        </div>

        {/* QR Code */}
        <div className="inline-flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 mb-12">
          <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-4">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">MS</span>
            </div>
          </div>
          <p className="text-sm text-slate-400">Scan to download instantly</p>
        </div>

        {/* Trust Items */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-slate-300">
              <Check className="w-5 h-5 text-cyan-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-sm text-slate-400 text-center">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
