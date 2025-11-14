'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function StencilCardsPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import { defineCustomElements } from '/components/loader/index.js';
      defineCustomElements(window);
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-purple-50 to-pink-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Stencil User Cards (Read-only Props)
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
            Display-Only Components with Props
          </h2>
          <p className="text-gray-600 mb-4">
            These user card components demonstrate read-only properties without any interactions.
            All data is passed via HTML attributes.
          </p>
          <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
            <p className="text-purple-700">
              <strong>Props:</strong> name, email, role, avatar
            </p>
          </div>
        </div>

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

          <user-card
            name="Carol Martinez"
            email="carol@example.com"
            role="UX Designer"
          ></user-card>

          <user-card
            name="David Lee"
            email="david@example.com"
            role="Product Manager"
          ></user-card>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Component Usage
          </h3>
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg text-left max-w-2xl mx-auto">
            <pre className="text-sm overflow-x-auto">
{`<user-card
  name="Alice Johnson"
  email="alice@example.com"
  role="Frontend Developer"
></user-card>`}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}
