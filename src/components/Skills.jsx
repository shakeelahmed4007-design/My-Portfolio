import React from "react";
import { Code2, Palette, Layers } from "lucide-react";

const iconMap = { Development: Code2, Design: Palette, "Tools & Workflow": Layers };

export default function Skills({ content }) {
  const skillsContent = content || {};
  const groups = skillsContent.groups || [];
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col justify-center min-h-[100dvh] scroll-mt-20">
      <div className="text-center mb-16">
        <p className="text-cyan-400 text-xs font-bold tracking-[0.2em] mb-3">{skillsContent.eyebrow || "03 — SKILLS"}</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
          {skillsContent.title || "What I Bring"}
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {groups.map((g) => (
          <div
            key={g.title}
            className="bg-[#0a1728] border border-cyan-400/10 rounded-2xl p-5 sm:p-7 hover:border-cyan-400/30 transition-colors"
          >
            <div className="w-11 h-11 rounded-lg bg-cyan-400/10 flex items-center justify-center text-cyan-400 mb-5">
              {React.createElement(iconMap[g.title] || Layers, { size: 20 })}
            </div>
            <h3 className="text-white font-bold text-lg mb-6">{g.title}</h3>

            <div className="space-y-4">
              {g.items.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-300">{item.name}</span>
                    <span className="text-cyan-400 font-semibold">{item.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#0e1c33] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
