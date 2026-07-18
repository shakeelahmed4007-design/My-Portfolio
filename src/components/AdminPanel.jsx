import React, { useEffect, useState } from "react";
import { Settings, Save, EyeOff } from "lucide-react";

export default function AdminPanel({ content, onChange, isOpen, setIsOpen }) {
  const [draft, setDraft] = useState(content);

  useEffect(() => {
    setDraft(content);
  }, [content]);

  const handleSave = () => {
    onChange(draft);
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
      <div className="mt-6 w-full max-w-5xl rounded-3xl border border-cyan-400/20 bg-[#08111f] p-6 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Admin Panel</p>
            <h2 className="text-2xl font-bold text-white">Edit portfolio content</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-300"
            >
              <EyeOff size={16} className="inline mr-2" /> Close
            </button>
            <button
              onClick={handleSave}
              className="rounded-lg bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-950"
            >
              <Save size={16} className="inline mr-2" /> Save
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-2xl border border-white/10 p-4">
            <h3 className="text-lg font-semibold text-white">Hero</h3>
            <label className="block text-sm text-slate-400">
              Eyebrow
              <input
                value={draft.hero.eyebrow}
                onChange={(e) => setDraft({ ...draft, hero: { ...draft.hero, eyebrow: e.target.value } })}
                className="mt-1 w-full rounded-lg border border-white/10 bg-[#0e1c33] px-3 py-2 text-white"
              />
            </label>
            <label className="block text-sm text-slate-400">
              Name
              <input
                value={draft.hero.name}
                onChange={(e) => setDraft({ ...draft, hero: { ...draft.hero, name: e.target.value } })}
                className="mt-1 w-full rounded-lg border border-white/10 bg-[#0e1c33] px-3 py-2 text-white"
              />
            </label>
            <label className="block text-sm text-slate-400">
              Role
              <input
                value={draft.hero.role}
                onChange={(e) => setDraft({ ...draft, hero: { ...draft.hero, role: e.target.value } })}
                className="mt-1 w-full rounded-lg border border-white/10 bg-[#0e1c33] px-3 py-2 text-white"
              />
            </label>
            <label className="block text-sm text-slate-400">
              Description
              <textarea
                value={draft.hero.description}
                onChange={(e) => setDraft({ ...draft, hero: { ...draft.hero, description: e.target.value } })}
                rows={4}
                className="mt-1 w-full rounded-lg border border-white/10 bg-[#0e1c33] px-3 py-2 text-white"
              />
            </label>
          </div>

          <div className="space-y-4 rounded-2xl border border-white/10 p-4">
            <h3 className="text-lg font-semibold text-white">About</h3>
            <label className="block text-sm text-slate-400">
              Heading
              <input
                value={draft.about.title}
                onChange={(e) => setDraft({ ...draft, about: { ...draft.about, title: e.target.value } })}
                className="mt-1 w-full rounded-lg border border-white/10 bg-[#0e1c33] px-3 py-2 text-white"
              />
            </label>
            <label className="block text-sm text-slate-400">
              Description
              <textarea
                value={draft.about.description}
                onChange={(e) => setDraft({ ...draft, about: { ...draft.about, description: e.target.value } })}
                rows={4}
                className="mt-1 w-full rounded-lg border border-white/10 bg-[#0e1c33] px-3 py-2 text-white"
              />
            </label>
          </div>

          <div className="space-y-4 rounded-2xl border border-white/10 p-4 md:col-span-2">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <label className="block text-sm text-slate-400">
              Contact Subtitle
              <input
                value={draft.contact.subtitle}
                onChange={(e) => setDraft({ ...draft, contact: { ...draft.contact, subtitle: e.target.value } })}
                className="mt-1 w-full rounded-lg border border-white/10 bg-[#0e1c33] px-3 py-2 text-white"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
