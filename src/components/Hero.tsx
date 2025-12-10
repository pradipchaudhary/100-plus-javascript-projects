"use client";

import { ArrowRight, Code2, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center 
      bg-gradient-to-b from-[#1a1a1a] to-[#111111] overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Floating code elements */}
      <div className="absolute top-1/4 left-10 md:left-20 animate-float opacity-30">
        <pre className="font-mono text-xs text-neutral-300">
          {`const learn = () => {
  return "JavaScript";
};`}
        </pre>
      </div>

      <div
        className="absolute bottom-1/4 right-10 md:right-20 animate-float opacity-30"
        style={{ animationDelay: "2s" }}
      >
        <pre className="font-mono text-xs text-neutral-300">
          {`function build() {
  console.log("🚀");
}`}
        </pre>
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
            bg-white/5 border border-white/10 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-indigo-300" />
            <span className="text-sm text-neutral-400">
              Open Source Learning Resource
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-neutral-100">Master JavaScript with</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 
              bg-clip-text text-transparent">
              100+ Real Projects
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            A curated collection of practical JavaScript projects to sharpen your
            skills from beginner to advanced levels.
          </p>

          {/* CTA Buttons (commented if needed) */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            {/* Buttons can be re-enabled if needed */}
          </div>

          {/* Stats Row */}
          <div
            className="flex items-center justify-center gap-8 md:gap-12 mt-16 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold 
                bg-gradient-to-r from-neutral-200 to-neutral-300 bg-clip-text text-transparent">
                100+
              </div>
              <div className="text-sm text-neutral-500 mt-1">Projects</div>
            </div>

            <div className="w-px h-12 bg-white/10" />

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neutral-100">
                246
              </div>
              <div className="text-sm text-neutral-500 mt-1">Stars</div>
            </div>

            <div className="w-px h-12 bg-white/10" />

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neutral-100">
                65
              </div>
              <div className="text-sm text-neutral-500 mt-1">Forks</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 
        bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
};

export default Hero;
