import React from "react";
import { Footer } from "@lobehub/ui";
import { ThemeProvider } from "@lobehub/ui";
import Link from "next/link";

const columns = [
  {
    items: [
      {
        description: "AIGC Components",
        openExternal: true,
        title: "🤯 Lobe UI",
        url: "https://github.com/lobehub/lobe-ui",
      },
      {
        description: "Chatbot Client",
        openExternal: true,
        title: "🤯 Lobe Chat",
        url: "https://github.com/lobehub/lobe-chat",
      },
      {
        description: "Node Flow Editor",
        openExternal: true,
        title: "🤯 Lobe Flow",
        url: "https://github.com/lobehub/lobe-flow",
      },
    ],
    title: "Resources",
  },
  {
    items: [
      {
        description: "AI Commit CLI",
        openExternal: true,
        title: "💌 Lobe Commit",
        url: "https://github.com/lobehub/lobe-commit",
      },
      {
        description: "Lint Config",
        openExternal: true,
        title: "📐 Lobe Lint",
        url: "https://github.com/lobehub/lobe-lint",
      },
    ],
    title: "More Products",
  },
];

const Footerr = () => {
  return (
    <>
      <footer id="contact" className="bg-[#111111] pt-16 pb-6">
        <section className="flex flex-wrap max-w-[] gap-x-96 gap-y-16 justify-center">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-2xl">Resources</h2>
            <div className="">
              <Link
                href="https://github.com/lobehub/lobe-ui"
                target="_blank"
                className="hover:text-rose-500 transition-all duration-500 text-gray-400"
              >
                🤯 Lobe UI
              </Link>
              <span className=""> - </span>
              <span className="">AIGC Components</span>
            </div>
            <div className="rc-footer-item">
              <Link
                href="https://github.com/lobehub/lobe-chat"
                target="_blank"
                className="hover:text-rose-500 transition-all duration-500 text-gray-400"
              >
                🤯 Lobe Chat
              </Link>
              <span> - </span>
              <span className="rc-footer-item-description">Chatbot Client</span>
            </div>
            <div className="rc-footer-item">
              <Link
                href="https://github.com/lobehub/lobe-flow"
                target="_blank"
                className="hover:text-rose-500 transition-all duration-500 text-gray-400"
              >
                🤯 Lobe Flow
              </Link>
              <span className=""> - </span>
              <span className="">Node Flow Editor</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h2 className="text-2xl">More Products</h2>
            <div className="">
              <Link
                href="https://github.com/lobehub/lobe-commit"
                target="_blank"
                className="hover:text-rose-500 transition-all duration-500 text-gray-400"
              >
                💌 Lobe Commit
              </Link>
              <span className=""> - </span>
              <span className="">AI Commit CLI</span>
            </div>
            <div className="">
              <Link
                href="https://github.com/lobehub/lobe-lint"
                target="_blank"
                className="hover:text-rose-500 transition-all duration-500 text-gray-400"
              >
                📐 Lobe Lint
              </Link>
              <span className=""> - </span>
              <span className="">Lint Config</span>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <div className="text-center text-base font-bold tracking-wide text-slate-500">
            Equinox © 2024
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footerr;
