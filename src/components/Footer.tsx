"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#171717] border-t border-white/10 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Logo + Description */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-90 transition"
            >
              <Image
                src="/100PlusJS_logo.png"
                alt="100+ JavaScript Logo"
                width={60}
                height={40}
                className="object-contain"
              />
              <h2 className="text-xl font-semibold text-[#fdba13]">
                100+ JavaScript
              </h2>
            </Link>

            <p className="text-neutral-400 mt-4 leading-relaxed">
              Open-source learning platform containing 100+ real-world JavaScript
              projects to help you master modern web development by building.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">
                Explore
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="footer-link">Home</Link>
                </li>
                <li>
                  <Link href="#projects" className="footer-link">Projects</Link>
                </li>
                <li>
                  <Link href="#about" className="footer-link">About</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/pradipchaudhary/100-Plus-JavaScript-Projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    GitHub Repo
                  </a>
                </li>
                <li>
                  <Link href="#contact" className="footer-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">
                Social
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/pradipchaudhary"
                    target="_blank"
                    className="footer-link flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:example@example.com"
                    className="footer-link flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" /> Email
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="footer-link flex items-center gap-2"
                  >
                    <Twitter className="h-4 w-4" /> Twitter (X)
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} 100+ JavaScript Projects. All Rights Reserved.
          </p>

          <p className="text-neutral-500 text-sm">
            Built with <span className="text-[#fdba13] font-medium">Next.js</span> by Pradip Chaudhary.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
