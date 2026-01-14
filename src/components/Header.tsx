"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Github } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header
      className="
        sticky top-0 z-50 
        backdrop-blur-sm border-b border-zinc-800 border-dashed bg-[#0f0f0fd5]
      "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex h-16 items-center justify-between">

          {/* LEFT: Logo + Navigation */}
          <div className="flex items-center gap-8">

            {/* Logo */}
            <Link
              href="/"
              className="
                flex items-center gap-3 pr-6 
                border-r border-white/30 
                hover:opacity-90 transition
              "
              aria-label="Go to homepage"
            >
              <Image
                src="/100PlusJS_logo.png"
                alt="100PlusJS Logo"
                width={78}
                height={40}
                priority
                className="object-contain"
              />
              <span className="text-lg font-semibold tracking-wide text-highlight">
                JavaScript
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Primary navigation">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="#projects" className="nav-link">
                Projects
              </Link>
              <a
                href="https://github.com/pradipchaudhary/100-Plus-JavaScript-Projects"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                Repository
              </a>
            </nav>
          </div>

          {/* RIGHT: GitHub Buttons */}
          <div className="flex items-center gap-3">

            {/* Star Count Display */}
            <a
              href="https://github.com/pradipchaudhary/100-Plus-JavaScript-Projects"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub star count"
              className="
                group inline-flex items-center gap-2 
                rounded-md 
                border border-white/10 
                bg-white/5 
                px-3 py-2 text-sm font-medium 
                text-white 
                hover:bg-white/10 transition
              "
            >
              <Star className="h-4 w-4 text-highlight group-hover:scale-110 transition" />
              <span id="starCount" className="tabular-nums text-neutral-300">
                —
              </span>
            </a>

            {/* Star Repo Button */}
            <a
              href="https://github.com/pradipchaudhary/100-Plus-JavaScript-Projects"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Star this repository"
              className="
                inline-flex items-center gap-2 
                rounded-md 
                border border-highlight/40 
                bg-highlight/10 
                px-3 py-2 text-sm font-medium 
                text-highlight
                hover:bg-highlight/20 
                transition
              "
            >
              <Github className="h-4 w-4" />
              <span>Star Repo</span>
            </a>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
