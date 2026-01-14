"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the purpose of the 100+ JavaScript Projects repository?",
    answer:
      "This repository helps developers improve JavaScript skills by building real-world mini projects focused on logic building, DOM manipulation, APIs, and UI interactions."
  },
  {
    question: "Who should use this project?",
    answer:
      "It is ideal for students, self-learners, junior developers, and anyone preparing for frontend or JavaScript interviews."
  },
  {
    question: "Do I need advanced JavaScript knowledge?",
    answer:
      "No. Basic HTML, CSS, and JavaScript knowledge is enough to get started."
  },
  {
    question: "Can I use these projects in my portfolio?",
    answer:
      "Yes. You are encouraged to customize and improve the projects before showcasing them in your portfolio."
  },
  {
    question: "Can I contribute to this repository?",
    answer:
      "Yes. You can contribute new projects, fix bugs, or improve documentation via pull requests."
  }
];

const FAQ = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative max-w-5xl mx-auto px-4 py-24 text-white">
      <div className="text-center mb-14">
        <p className="uppercase tracking-widest text-sm text-gray-500">
          Support
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-5">
        {faqs.map((faq, index) => {
          const isOpen = active === index;

          return (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg transition-all hover:border-white/20"
            >
              <button
                onClick={() => setActive(isOpen ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-base font-medium text-gray-100"
              >
                <span className="pr-6">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : ""
                    }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden px-6 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
