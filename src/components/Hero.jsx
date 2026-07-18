import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, ArrowRight, Download } from "lucide-react";
import profilePic from "../assets/Sh.PNG";
import cvFile from "../assets/CV SHAKEEL.pdf";

const iconMap = {
  linkedin: <Linkedin size={20} />,
  github: <Github size={20} />,
  be: <span className="font-bold text-sm">Be</span>,
};

// Reusable motion variants — keeps the animation orchestration readable
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero({ content }) {
  const heroContent = content || {};
  const socialLinks = heroContent.socialLinks || [];

  return (
    <section
      id="home"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 min-h-[100dvh] grid md:grid-cols-2 gap-8 sm:gap-12 items-center overflow-hidden scroll-mt-20"
    >
      {/* Background Multi-colored Blobs — now drifting instead of static */}
      <motion.div
        className="hidden sm:block pointer-events-none absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, 30, -10, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden sm:block pointer-events-none absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-600/20 blur-[120px]"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, -25, 15, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden sm:block pointer-events-none absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-pink-600/20 blur-[120px]"
        animate={{
          x: [0, 25, -25, 0],
          y: [0, 20, -20, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {heroContent.eyebrow && (
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-xs font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {heroContent.eyebrow}
          </motion.span>
        )}

        <motion.h1
          variants={fadeUp}
          className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-4 tracking-tight"
        >
          Hi, I'm{" "}
          <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 drop-shadow-sm bg-[length:200%_auto] animate-[gradient-shift_6s_ease_infinite]">
            {heroContent.name || "Shakeel Ahmed"}
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-2xl text-slate-200 mb-6 font-light"
        >
          I'm a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 font-bold">
            {heroContent.role || "Web Developer"}
          </span>
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-slate-400 text-sm sm:text-lg mb-8 sm:mb-10 max-w-full sm:max-w-md leading-relaxed"
        >
          {heroContent.description || "Passionate Web Developer focused on creating responsive, user-friendly, and high-performance web applications using clean code and modern web technologies."}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
          <motion.a
            href={heroContent.primaryCta?.href || "#projects"}
            whileHover={{ scale: 1.06, boxShadow: "0 0 35px rgba(168,85,247,0.45)" }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-xl shadow-lg shadow-purple-500/25 w-full sm:w-auto"
          >
            {heroContent.primaryCta?.label || "View Projects"}
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="flex"
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.a>
          <motion.a
            href={cvFile}
            download="Shakeel_Ahmed_CV.pdf"
            whileHover={{ scale: 1.06, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-semibold px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-xl backdrop-blur-sm transition-colors w-full sm:w-auto"
          >
            <Download size={18} className="text-pink-400" /> {heroContent.secondaryCta?.label || "Download CV"}
          </motion.a>
        </motion.div>

        <motion.div variants={fadeUp} className="flex gap-3 sm:gap-4">
          {socialLinks.map((item, i) => {
            const external = typeof item.href === "string" && item.href.startsWith("http");
            const icon = iconMap[item.icon] || iconMap.linkedin;
            return (
              <motion.a
                key={i}
                href={item.href || "#"}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                whileHover={{ scale: 1.15, y: -4, borderColor: "rgba(236,72,153,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 transition-colors backdrop-blur-sm"
              >
                {icon}
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 flex justify-center mt-8 md:mt-0"
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[420px] md:h-[420px] flex items-center justify-center"
        >
          {/* Rotating gradient ring */}
          <motion.div
            className="absolute inset-0 rounded-full p-1.5 bg-[conic-gradient(from_0deg,theme(colors.cyan.400),theme(colors.purple.500),theme(colors.pink.500),theme(colors.cyan.400))]"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ boxShadow: "0 0 40px rgba(168,85,247,0.4)" }}
          />
          <div className="absolute inset-1.5 rounded-full overflow-hidden bg-[#050b16]">
            <img
              src={profilePic}
              alt="Shakeel Ahmed"
              className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
            className="absolute -bottom-2 right-4 md:right-10 bg-[#0a1728]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-4 sm:px-5 py-2 sm:py-3 text-center shadow-2xl"
          >
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-extrabold text-xl sm:text-2xl leading-none mb-1">
              10+
            </p>
            <p className="text-xs font-medium text-slate-300 uppercase tracking-wider">
              Projects
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
