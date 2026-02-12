"use client";

import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0f0f0f] text-white">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(transparent_24px,rgba(255,255,255,0.03)_25px),linear-gradient(90deg,transparent_24px,rgba(255,255,255,0.03)_25px)] bg-[size:28px_28px] opacity-20" />

      {/* Glow Orbs */}
      <div className="absolute -top-32 -left-32 w-[35rem] h-[35rem] bg-purple-500/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-blue-500/20 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-36 grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs tracking-widest uppercase mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            100+ JavaScript Projects
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Build. Break.
            <span className="block mt-3 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              Master JavaScript for Life.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg text-neutral-400 max-w-xl leading-relaxed">
            Real-world projects designed to sharpen your logic, strengthen debugging skills,
            and build production-ready thinking. Stop watching tutorials — start building.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white text-black hover:bg-neutral-200 transition-all shadow-xl shadow-black/40"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="https://github.com/pradipchaudhary/100-Plus-JavaScript-Projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all"
            >
              <Star className="w-4 h-4 text-yellow-400" />
              Star on GitHub
            </a>

          </div>

          {/* Social Proof */}
          <div className="mt-10 flex items-center gap-6 text-sm text-neutral-400">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full bg-neutral-700 border-2 border-[#0f0f0f]"
                />
              ))}
            </div>
            <p>
              Trusted by developers worldwide.
              <span className="text-neutral-200 ml-1">Fork. Star. Contribute.</span>
            </p>
          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">

          {/* Glass Card */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/40">

            {/* Fake Code Preview */}
            <div className="space-y-3 font-mono text-sm text-neutral-300">
              <div className="text-purple-400">function buildProject() {"{"}</div>
              <div className="ml-4 text-neutral-400">const skill = "JavaScript";</div>
              <div className="ml-4 text-neutral-400">while (learning) {"{"}</div>
              <div className="ml-8 text-green-400">practice();</div>
              <div className="ml-4 text-neutral-400">{"}"}</div>
              <div className="text-purple-400">{"}"}</div>
            </div>

          </div>

          {/* Background glow */}
          <div className="absolute -inset-6 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-3xl rounded-[40px] opacity-40" />

        </div>

      </div>
    </section>
  );
};

export default Hero;
