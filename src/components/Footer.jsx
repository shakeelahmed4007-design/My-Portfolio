import React from "react";
import { Linkedin, Github } from "lucide-react";

export default function Footer({ content }) {
  const footerContent = content || {};
  const socialLinks = footerContent.socialLinks || [];
  return (
    <footer className="border-t border-cyan-400/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">{(footerContent.copyright || "© {year} Shakeel Ahmed. All rights reserved.").replace("{year}", new Date().getFullYear())}</p>
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
            >
              {link.label === "GitHub" ? <Github size={16} /> : <Linkedin size={16} />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
