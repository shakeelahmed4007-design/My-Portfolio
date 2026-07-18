import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const quickReplies = {
  Skills:
    "Shakeel specializes in modern Web Development using React, JavaScript, Tailwind CSS, and standard UI engineering practices.",
  Projects:
    "He has successfully shipped 10+ projects, ranging from custom web applications to clean portfolio templates.",
  Hire: "You can get in touch with Shakeel through the Contact section or by clicking the Download CV/Hire button above. He is available for freelance work!",
  Certs: "Shakeel holds a solid foundation in Computer Science (currently in BSCS 7th Sem) with verified hands-on experience in modern web development.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi 👋 I'm Shakeel's AI assistant. Ask me about his skills, projects, or how to hire him!",
    },
  ]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing]);

  function send(text) {
    const value = text ?? input;
    if (!value.trim()) return;
    setMessages((m) => [...m, { from: "user", text: value }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply =
        quickReplies[value] ||
        "Thanks for your message! Feel free to ask about Shakeel's skills, projects, or how to get in touch for freelance collaborations.";
      setMessages((m) => [...m, { from: "bot", text: reply }]);
      setTyping(false);
    }, 900);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 w-80 sm:w-96 rounded-2xl overflow-hidden border border-cyan-400/20 bg-[#071022] shadow-2xl flex flex-col h-[480px]">
          <div className="flex items-center justify-between px-4 py-3 border-b border-cyan-400/10 bg-[#0a1728]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-cyan-400 text-[#04101f] font-bold flex items-center justify-center text-sm">
                SA
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Shakeel's Assistant</p>
                <p className="text-emerald-400 text-[11px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Online
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-white">
              <X size={18} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-snug ${m.from === "bot"
                    ? "bg-[#0e1c33] text-slate-200 rounded-bl-sm"
                    : "bg-cyan-400 text-[#04101f] rounded-br-sm ml-auto font-medium"
                  }`}
              >
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="bg-[#0e1c33] text-slate-400 px-3.5 py-2.5 rounded-2xl rounded-bl-sm w-fit text-sm">
                <span className="inline-flex gap-1">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                </span>
              </div>
            )}
          </div>

          <div className="px-4 pb-2 flex flex-wrap gap-2">
            {Object.keys(quickReplies).map((label) => (
              <button
                key={label}
                onClick={() => send(label)}
                className="text-xs font-medium text-cyan-300 border border-cyan-400/30 rounded-full px-3 py-1.5 hover:bg-cyan-400/10 transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="p-3 border-t border-cyan-400/10 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a message..."
              className="flex-1 bg-[#0e1c33] text-sm text-white placeholder-slate-500 rounded-lg px-3 py-2.5 outline-none border border-transparent focus:border-cyan-400/40"
            />
            <button
              onClick={() => send()}
              className="w-9 h-9 rounded-lg bg-cyan-400 text-[#04101f] flex items-center justify-center hover:bg-cyan-300 transition-colors shrink-0"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="w-14 h-14 rounded-full bg-cyan-400 text-[#04101f] shadow-[0_0_25px_rgba(34,211,238,0.5)] flex items-center justify-center hover:bg-cyan-300 transition-colors"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}