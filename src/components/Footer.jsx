import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-white">AI Automation Hub</p>
            <p className="text-xs text-white/60">Build, launch, and scale automations with confidence.</p>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <a href="#features" className="hover:text-white">Features</a>
            <span className="opacity-30">•</span>
            <a href="#how-it-works" className="hover:text-white">How it works</a>
            <span className="opacity-30">•</span>
            <a href="#hero" className="hover:text-white">Back to top</a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} AI Automation Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
