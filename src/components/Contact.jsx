import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

const iconMap = { Email: Mail, Phone, Location: MapPin };

export default function Contact({ content }) {
  const contactContent = content || {};
  const info = contactContent.info || [];
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    // Fallback to the first email in info if available, else standard email
    const recipient = contactContent.info?.[0]?.value || "shakeelahmed4007@gmail.com";
    const subject = encodeURIComponent(`Portfolio Contact: New message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col justify-center min-h-[100dvh] scroll-mt-20">
      <div className="text-center mb-16">
        <p className="text-cyan-400 text-xs font-bold tracking-[0.2em] mb-3">{contactContent.eyebrow || "06 — CONTACT"}</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
          {contactContent.title || "Let's Work Together"}
        </h2>
        <p className="text-slate-400 mt-4 max-w-lg mx-auto">
          {contactContent.subtitle || "Have a project in mind? Send a message and I'll get back to you within a day."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-10 max-w-5xl mx-auto">
        <div className="md:col-span-2 space-y-3 sm:space-y-5">
          {info.map((i) => (
            <div key={i.label} className="flex items-center gap-4 bg-[#0a1728] border border-cyan-400/10 rounded-xl p-5">
              <div className="w-11 h-11 shrink-0 rounded-lg bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                {React.createElement(iconMap[i.label] || Mail, { size: 18 })}
              </div>
              <div>
                <p className="text-slate-500 text-xs">{i.label}</p>
                <p className="text-white text-sm font-medium">{i.value}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-3 bg-[#0a1728] border border-cyan-400/10 rounded-2xl p-7 space-y-4">
          <div>
            <label className="text-slate-400 text-xs font-medium mb-1.5 block">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="w-full bg-[#0e1c33] text-white text-sm rounded-lg px-4 py-3 outline-none border border-transparent focus:border-cyan-400/40 placeholder-slate-500"
            />
          </div>
          <div>
            <label className="text-slate-400 text-xs font-medium mb-1.5 block">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full bg-[#0e1c33] text-white text-sm rounded-lg px-4 py-3 outline-none border border-transparent focus:border-cyan-400/40 placeholder-slate-500"
            />
          </div>
          <div>
            <label className="text-slate-400 text-xs font-medium mb-1.5 block">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project..."
              rows={4}
              className="w-full bg-[#0e1c33] text-white text-sm rounded-lg px-4 py-3 outline-none border border-transparent focus:border-cyan-400/40 placeholder-slate-500 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-cyan-400 text-[#04101f] font-semibold px-6 py-3 rounded-lg hover:bg-cyan-300 transition-colors"
          >
            {sent ? (
              <>
                <CheckCircle2 size={18} /> Message Sent
              </>
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
