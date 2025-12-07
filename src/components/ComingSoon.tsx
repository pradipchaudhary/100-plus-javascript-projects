"use client";
import React from "react";

const ComingSoon = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-200 px-6">

      {/* Soft Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-96 w-96 rounded-full bg-blue-300/20 blur-3xl mt-20"></div>
      </div>

      <div className="text-center max-w-2xl mx-auto">

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
          Coming <span className="text-blue-600">Soon</span> 🚀
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
          We’re building something amazing for you.
          Stay tuned — the experience you're waiting for is on the way.
        </p>

        {/* Footer */}
        <p className="mt-12 text-xs text-gray-500">
          © {new Date().getFullYear()} 100PlusJS — All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ComingSoon;
