import React from "react";
import { GraduationCap, Palette, Code2, Rocket } from "lucide-react";

const iconMap = {
  GraduationCap,
  Palette,
  Code2,
  Rocket,
};

export default function Journey({ content }) {
  const journeyContent = content || {};
  const steps = journeyContent.steps || [];
  return (
    <section id="journey" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col justify-center min-h-[100dvh] scroll-mt-20">
      <div className="text-center mb-16">
        <p className="text-cyan-400 text-xs font-bold tracking-[0.2em] mb-3">{journeyContent.eyebrow || "02 — MY JOURNEY"}</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
          {journeyContent.title || "The Path So Far"}
        </h2>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent" />
        <div className="space-y-12">
          {steps.map((s, index) => {
            const Icon = iconMap[Object.keys(iconMap)[index % Object.keys(iconMap).length]];
            return (
            <div key={s.title} className="relative flex gap-4 sm:gap-6 pl-0">
              <div className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full bg-[#0a1728] border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                <Icon size={20} />
              </div>
              <div className="pt-1">
                <p className="text-cyan-400 text-xs font-semibold tracking-wide mb-1">{s.year}</p>
                <h3 className="text-white font-bold text-lg mb-1.5">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-lg">{s.desc}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
