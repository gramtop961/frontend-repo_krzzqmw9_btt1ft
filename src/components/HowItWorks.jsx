import React from 'react';

const steps = [
  {
    step: '1',
    title: 'Connect tools',
    desc: 'Link your data sources, CRMs, and messaging apps with one-click connectors.'
  },
  {
    step: '2',
    title: 'Design workflow',
    desc: 'Drag nodes to build flows: prompts, functions, webhooks, and human-in-the-loop gates.'
  },
  {
    step: '3',
    title: 'Test & iterate',
    desc: 'Preview runs with sample data, observe tokens, costs, and guardrail checks.'
  },
  {
    step: '4',
    title: 'Launch & monitor',
    desc: 'Schedule jobs or trigger via API. Track performance and automate improvements.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative z-10 w-full bg-slate-950/95">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">How it works</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                <span className="text-sm font-bold">{s.step}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
