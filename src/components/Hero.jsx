import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-slate-900">
      {/* 3D cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center sm:py-32">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Live preview • AI automation hub
        </span>
        <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
          Orchestrate your AI automations in one place
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:mt-6 sm:text-lg">
          Connect tools, design workflows, and launch production-ready automations with a beautiful, intuitive interface.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:shadow-lg hover:bg-white/90"
          >
            Explore features
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
