import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import AdminPanel from "./components/AdminPanel";
import ErrorBoundary from "./components/ErrorBoundary";
import portfolioContent from "./data/portfolioContent";

export default function App() {
  const [active, setActive] = useState("Home");
  const [content, setContent] = useState(portfolioContent);
  const [adminOpen, setAdminOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-content");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed) {
          setContent(parsed);
        }
      }
    } catch (error) {
      console.warn("Unable to load saved portfolio content:", error);
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const showAdmin = params.get("admin") === "true";
    if (showAdmin) {
      setAdminOpen(true);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setAdminOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-content", JSON.stringify(content));
  }, [content]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#050b16] font-sans">
        <NavBar active={active} setActive={setActive} />
        <Hero content={content.hero} />
        <About content={content.about} />
        <Journey content={content.journey} />
        <Skills content={content.skills} />
        <Projects content={content.projects} />
        <Certificates />
        <Contact content={content.contact} />
        <Footer content={content.footer} />
        <ChatWidget />
        <AdminPanel content={content} onChange={setContent} isOpen={adminOpen} setIsOpen={setAdminOpen} />
      </div>
    </ErrorBoundary>
  );
}
