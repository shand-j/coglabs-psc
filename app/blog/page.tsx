"use client"

import { useState } from 'react';
import Navbar from '../../components/Navbar';

export default function Blog() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setMessage('');
    setMessageType('');

    try {
      // MailerLite form endpoint for client-side submission
      const formData = new FormData();
      formData.append('email', email);
      formData.append('ml-submit', '1');

      const response = await fetch('https://assets.mailerlite.com/jsonp/375841/forms/86254649098016481/subscribe', {
        method: 'POST',
        body: formData,
      });

      setMessage('Successfully subscribed! Check your email for confirmation.');
      setMessageType('success');
      setEmail('');
    } catch (error) {
      // For static deployment, show a fallback message
      setMessage('Subscription feature temporarily unavailable. Please try again later.');
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="mb-8">
          <nav className="text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-blue-400">Home</a> &gt; <span className="text-slate-300">Blog</span>
          </nav>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-200 mb-2">Blog</h1>
            <p className="text-slate-400">Insights, tutorials, and best practices in quality engineering</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder blog posts - you can replace these with real content */}
          <article className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 card-hover">
            <div className="text-blue-400 text-sm mb-2">Quality Engineering</div>
            <h3 className="text-xl font-bold mb-3 text-white">The Future of AI-Driven Testing</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Explore how artificial intelligence is revolutionising automated testing strategies and improving software quality.
            </p>
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>John Shand</span>
              <span>Coming Soon</span>
            </div>
          </article>

          <article className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 card-hover">
            <div className="text-blue-400 text-sm mb-2">Contract Testing</div>
            <h3 className="text-xl font-bold mb-3 text-white">Microservices Testing Best Practices</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Learn essential strategies for testing distributed systems and ensuring service compatibility.
            </p>
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>John Shand</span>
              <a href="/blog/microservices-testing-best-practices" className="text-blue-400 hover:text-blue-300">
                Read Article →
              </a>
            </div>
          </article>

          <article className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 card-hover">
            <div className="text-blue-400 text-sm mb-2">DevOps</div>
            <h3 className="text-xl font-bold mb-3 text-white">CI/CD Pipeline Optimisation</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Discover techniques to streamline your continuous integration and deployment workflows.
            </p>
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>John Shand</span>
              <span>Coming Soon</span>
            </div>
          </article>
        </div>

        <div className="text-center mt-12">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-slate-400 mb-6">
              Subscribe to our newsletter for the latest insights in quality engineering and software testing.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg transition-colors"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {message && (
              <div className={`mt-4 p-3 rounded-lg text-sm ${
                messageType === 'success'
                  ? 'bg-green-800/50 border border-green-700 text-green-300'
                  : 'bg-red-800/50 border border-red-700 text-red-300'
              }`}>
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}