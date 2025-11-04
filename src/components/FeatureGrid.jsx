import React from 'react';
import { Bot, Rocket, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI Agents',
    desc: 'Deploy autonomous agents to handle research, outreach, data cleanup, and routine operations.'
  },
  {
    icon: Zap,
    title: 'Fast Workflows',
    desc: 'Chain prompts, tools, and webhooks with visual flows that are easy to edit and share.'
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    desc: 'Role-based access, secrets vault, and granular logs keep your automations safe.'
  },
  {
    icon: Rocket,
    title: 'Scale Effortlessly',
    desc: 'Run thousands of jobs with built-in queues, retries, and performance insights.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative z-10 w-full bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">Features</h2>
            <p className="mt-2 max-w-2xl text-white/70">Everything you need to design, monitor, and ship powerful AI automations without the busywork.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 transition hover:border-white/20 hover:from-white/10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
