import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = ["Home", "About", "Journey", "Skills", "Projects", "Certificates", "Contact"];

export default function NavBar({ active, setActive }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActive(link);
    setIsOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur-md bg-[#050b16]/80 border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/30">
            SA
          </div>
          <div className="leading-tight min-w-0">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 font-bold text-sm sm:text-base truncate">Shakeel Ahmed.</p>
            <p className="text-[9px] sm:text-[10px] tracking-wide text-slate-400 -mt-1 font-medium">DESIGNER &amp; DEVELOPER</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => handleLinkClick(link)}
              className={`relative pb-1 transition-colors hover:text-white ${active === link ? "text-white" : ""}`}
            >
              {link}
              {active === link && (
                <span className="absolute left-0 -bottom-[2px] w-full h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Hire Me button */}
        <a
          href="#contact"
          onClick={() => handleLinkClick("Contact")}
          className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-sm px-6 py-2.5 rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(168,85,247,0.35)]"
        >
          Hire Me
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-cyan-400 p-2 rounded-lg active:bg-white/10"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu Dropdown */}
      {isOpen && (
        <nav className="md:hidden border-t border-cyan-500/10 bg-[#050b16] px-3 py-4 flex flex-col gap-3 text-sm font-medium text-slate-300">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => handleLinkClick(link)}
              className={`py-2 border-b border-slate-800/50 transition-colors ${
                active === link ? "text-cyan-400" : "hover:text-cyan-300"
              }`}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => handleLinkClick("Contact")}
            className="w-full text-center bg-cyan-400 text-[#04101f] font-semibold text-sm py-3 rounded-lg hover:bg-cyan-300 transition-colors mt-2"
          >
            Hire Me
          </a>
        </nav>
      )}
    </header>
  );
}
