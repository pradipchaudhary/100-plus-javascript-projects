"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Github } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/60 backdrop-blur">
      <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* LEFT: Logo + Navigation */}
          <div className="flex items-center gap-8">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/100PlusJS.png"
                alt="Pradip Chaudhary Logo"
                width={170}
                height={60}
                className="rounded-md"
                priority
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-7">
              <Link
                href="#projects"
                className="text-sm text-neutral-300 hover:text-white transition"
              >
                Projects
              </Link>

              <a
                href="https://github.com/pradipchaudhary/100-Plus-JavaScript-Projects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-300 hover:text-white transition"
              >
                Repository
              </a>

              <Link
                href="#about"
                className="text-sm text-neutral-300 hover:text-white transition"
              >
                About
              </Link>

              <Link
                href="#contact"
                className="text-sm text-neutral-300 hover:text-white transition"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* RIGHT: GitHub Buttons */}
          <div className="flex items-center gap-3">

            {/* Star Count Button (external) */}
            <a
              href="https://github.com/pradipchaudhary/100-Plus-JavaScript-Projects"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Stars"
              className="group inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              <Star className="h-4 w-4 text-amber-400" />
              <span id="starCount" className="tabular-nums text-neutral-200">
                —
              </span>
            </a>

            {/* Star Repo Button (external) */}
            <a
              href="https://github.com/pradipchaudhary/100-Plus-JavaScript-Projects"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Star Repository on GitHub"
              className="inline-flex items-center gap-2 rounded-md border border-indigo-500/30 bg-indigo-500/10 px-3 py-2 text-sm font-medium text-indigo-300 hover:bg-indigo-500/20 hover:text-indigo-200 transition"
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
