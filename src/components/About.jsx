import React from "react";
import aboutPic from "../assets/AS.jpeg";

export default function About({ content }) {
  const aboutContent = content || {};
  const stats = aboutContent.stats || [];
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-8 sm:gap-14 items-center content-center min-h-[100dvh] scroll-mt-20">
      {/* Left side: Decorative/Image Container */}
      <div className="relative flex justify-center">
        <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full border border-cyan-400/30" />
        <div className="w-full max-w-[280px] h-[320px] sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-cyan-400/20 bg-[#050b16] relative">
          <img src={aboutPic} alt="Shakeel Ahmed" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b16]/40 via-transparent to-transparent" />
        </div>
      </div>

      {/* Right side: Content */}
      <div>
        <p className="text-cyan-400 text-xs font-bold tracking-[0.2em] mb-3">{aboutContent.eyebrow || "01 — ABOUT ME"}</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
          {aboutContent.title || "About Me"}
        </h2>

        <p className="text-cyan-400 text-xs font-semibold tracking-[0.15em] mb-2">
          {aboutContent.subtitle || "WEB DEVELOPER & UI DESIGNER"}
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{aboutContent.heading || "Building Digital Solutions"}</h3>

        <p className="text-slate-400 leading-relaxed mb-10 max-w-lg">
          {aboutContent.description || "I am a passionate Web Developer currently pursuing my BS in Computer Science."}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-md">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-cyan-400 text-2xl sm:text-3xl font-extrabold">{s.value}</p>
              <p className="text-slate-500 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}