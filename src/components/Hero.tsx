"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#171717]">

      {/* Pattern layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.04),transparent_65%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(transparent_22px,rgba(255,255,255,0.02)_23px),linear-gradient(90deg,transparent_22px,rgba(255,255,255,0.02)_23px)] bg-[size:24px_24px] opacity-20" />

      {/* Ambient glows */}
      <div className="absolute -top-40 left-0 w-[32rem] h-[32rem] bg-black/50 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-black/60 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-white text-xs uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            100+ JavaScript Projects
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-snug tracking-tight">
            Build. Break.
            <span className="block mt-2 text-neutral-300">
              Master JavaScript for Life.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-xl leading-relaxed">
            Real-world projects to sharpen your JavaScript skills, debug like a pro,
            and become a developer companies can’t ignore.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-lg text-[#171717] font-bold bg-white hover:bg-neutral-200 transition shadow-lg shadow-black/50"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="https://github.com/pradipchaudhary/100-Plus-JavaScript-Projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-white/15 text-white hover:bg-white/10 transition"
            >
              <Star className="w-4 h-4 text-yellow-400" />
              Star on GitHub
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 text-sm text-neutral-400">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1548142813-c348350df52b",
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
                "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
                "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
              ].map((src, i) => (
                <img
                  key={i}
                  src={`${src}?w=80&auto=format&fit=crop`}
                  className="h-9 w-9 rounded-full ring-2 ring-[#171717] object-cover"
                  alt="User"
                />
              ))}
            </div>
            <p>
              Trusted by developers worldwide.
              <span className="text-neutral-200 ml-1">Fork, star, contribute.</span>
            </p>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="absolute -inset-6 bg-white/10 blur-3xl rounded-[40px] opacity-40" />
          <div className="relative bg-[#1f1f1f] border border-white/10 rounded-[32px] p-5 shadow-2xl">
            <Image
              src="/hero-preview.png"
              alt="JavaScript Projects Preview"
              width={680}
              height={460}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
