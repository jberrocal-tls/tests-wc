"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function StencilPage() {
  useEffect(() => {
    // Dynamically load the Stencil component
    const script = document.createElement('script');
    script.src = '/components/loader/index.js';
    script.type = 'module';
    script.onload = () => {
      if (window.wcStencil && window.wcStencil.defineCustomElements) {
        window.wcStencil.defineCustomElements(window);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-purple-50 to-pink-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Stencil Counter Component
          </h1>
          <Link
            href="/"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Home
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            About Stencil
          </h2>
          <p className="text-gray-600 mb-4">
            Stencil is a compiler that generates Web Components with features
            like TypeScript support, JSX, virtual DOM, and lazy loading. It's
            used by Ionic Framework and other major projects.
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
            href="/lit"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← View Lit Component
          </Link>
        </div>
      </div>
    </main>
  );
}
