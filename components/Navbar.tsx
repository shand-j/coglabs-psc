"use client"

import { useState } from 'react';

export default function Navbar() {
  const [isKnowledgeBaseOpen, setIsKnowledgeBaseOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsKnowledgeBaseOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsKnowledgeBaseOpen(false);
    }, 150); // 150ms delay before closing
    setTimeoutId(id);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CL</span>
            </div>
            <div>
              <div className="text-xl font-bold text-white">Cognition Laboratories</div>
              <div className="text-xs text-slate-400">Quality Engineering Excellence</div>
            </div>
          </a>
          <div className="hidden md:flex gap-8">
            <a href="/#about" className="text-slate-300 hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="/#services" className="text-slate-300 hover:text-blue-400 transition-colors">
              Services
            </a>
            <a href="/#experience" className="text-slate-300 hover:text-blue-400 transition-colors">
              Experience
            </a>
            <div className="relative">
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                Knowledge Base
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isKnowledgeBaseOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="/contract-testing-guide"
                    className="block px-4 py-2 text-slate-300 hover:bg-slate-700 hover:text-blue-400 transition-colors"
                  >
                    Contract Testing Guide
                  </a>
                </div>
              )}
            </div>
            <a href="/blog" className="text-slate-300 hover:text-blue-400 transition-colors">
              Blog
            </a>
          </div>
          <a
            href="/#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}