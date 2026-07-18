import React from "react";
import { Award } from "lucide-react";
import cert1 from "../assets/Certificate 1.PNG";
import cert2 from "../assets/Certificate 2.jpeg";

const certs = [
  { title: "Web Development Internship", issuer: "Arch Technologies", year: "2026", image: cert1 },
  { title: "AI Startups Seminar", issuer: "Iqra University", year: "2026", image: cert2 },
  { title: "React — Advanced Concepts", issuer: "Scrimba", year: "2024" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp", year: "2023" },
];

export default function Certificates() {
  return (
    <section id="certificates" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col justify-center min-h-[100dvh] scroll-mt-20">
      <div className="text-center mb-16">
        <p className="text-cyan-400 text-xs font-bold tracking-[0.2em] mb-3">05 — CERTIFICATES</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
          Verified <span className="text-cyan-400">Credentials</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
        {certs.map((c) => {
          const content = (
            <>
              <div className="w-11 h-11 shrink-0 rounded-lg bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                <Award size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">{c.title}</h3>
                <p className="text-slate-400 text-xs">{c.issuer}</p>
                <p className="text-cyan-400 text-xs font-medium mt-1">{c.year}</p>
              </div>
            </>
          );

          if (c.image) {
            return (
              <a
                key={c.title}
                href={c.image}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-[#0a1728] border border-cyan-400/10 rounded-xl p-5 hover:border-cyan-400/30 transition-colors cursor-pointer"
              >
                {content}
              </a>
            );
          }

          return (
            <div
              key={c.title}
              className="flex items-start gap-4 bg-[#0a1728] border border-cyan-400/10 rounded-xl p-5 hover:border-cyan-400/30 transition-colors"
            >
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
