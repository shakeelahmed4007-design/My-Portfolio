import React from "react";
import { ExternalLink } from "lucide-react";
import biodiffImg from "../assets/biodiff.png";
import cubixImg from "../assets/cubix.png";
import fypImg from "../assets/FYP Pic.PNG";

const projectImages = {
  "Final Year Project | Next-Gen Quantitative Strategy Sandbox": fypImg,
  "BioDiff | Illuminator of Skin": biodiffImg,
  "ZENVIXO | Digital Agency": cubixImg,
};

export default function Projects({ content }) {
  const projectContent = content || {};
  const projects = projectContent.projects || [];
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col justify-center min-h-[100dvh] scroll-mt-20">
      <div className="text-center mb-16">
        <p className="text-cyan-400 text-xs font-bold tracking-[0.2em] mb-3">{projectContent.eyebrow || "04 — PROJECTS"}</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
          {projectContent.title || "Selected"} <span className="text-cyan-400">Work</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((p) => {
          const CardContent = (
            <>
              <div className="h-40 bg-gradient-to-br from-cyan-500/20 to-blue-900/40 relative">
                {projectImages[p.title] && (
                  <img src={projectImages[p.title]} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1728] via-transparent to-transparent" />
                <ExternalLink
                  size={16}
                  className="absolute top-4 right-4 text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                />
              </div>
              <div className="p-6">
                <p className="text-cyan-400 text-[11px] font-semibold tracking-wide mb-2">{p.tag}</p>
                <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </>
          );

          return p.link ? (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0a1728] border border-cyan-400/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-colors block"
            >
              {CardContent}
            </a>
          ) : (
            <div
              key={p.title}
              className="group bg-[#0a1728] border border-cyan-400/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-colors"
            >
              {CardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}
