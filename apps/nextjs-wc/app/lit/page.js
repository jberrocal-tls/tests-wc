"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function LitPage() {
  useEffect(() => {
    // Dynamically load the Lit component scripts
    const counterScript = document.createElement('script');
    counterScript.src = '/components/counter-lit.js';
    counterScript.type = 'module';
    document.body.appendChild(counterScript);

    const userCardScript = document.createElement('script');
    userCardScript.src = '/components/user-card.js';
    userCardScript.type = 'module';
    document.body.appendChild(userCardScript);

    return () => {
      document.body.removeChild(counterScript);
      document.body.removeChild(userCardScript);
    };
  }, []);

  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Lit.js Counter Component
          </h1>
          <Link
            href="/"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Home
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            About Lit.js
          </h2>
          <p className="text-gray-600 mb-4">
            Lit is a simple library for building fast, lightweight web
            components. It provides reactive state, scoped styles, and a
            declarative template system.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Counter Components (Interactive)
          </h3>
          <div className="flex gap-8 flex-wrap justify-center">
            <counter-component></counter-component>
            <counter-component></counter-component>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            User Card Components (Read-only Props)
          </h3>
          <div className="flex gap-8 flex-wrap justify-center">
            <user-card
              name="Alice Johnson"
              email="alice@example.com"
              role="Frontend Developer"
            ></user-card>
            <user-card
              name="Bob Smith"
              email="bob@example.com"
              role="Backend Developer"
            ></user-card>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/stencil"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            View Stencil Component →
          </Link>
        </div>
      </div>
    </main>
  );
}
