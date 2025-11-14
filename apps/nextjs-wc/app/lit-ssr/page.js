import { Suspense } from 'react';
import Link from 'next/link';
import LitCounter from '../components/LitCounter';
import LitUserCard from '../components/LitUserCard';

export default function LitSSRPage() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Lit.js Counter Component (SSR)
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
            Server-Side Rendered Lit Component
          </h2>
          <p className="text-gray-600 mb-4">
            This page attempts to render the Lit component on the server using Next.js SSR.
            Web components with shadow DOM typically need special handling for SSR.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <p className="text-yellow-700">
              <strong>Note:</strong> Lit components use Shadow DOM and client-side APIs,
              so they require declarative shadow DOM or client-side hydration.
            </p>
          </div>
        </div>

        <Suspense fallback={<div className="text-center py-8">Loading components...</div>}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Counter Components (Interactive)
            </h3>
            <div className="flex gap-8 flex-wrap justify-center">
              <LitCounter />
              <LitCounter />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              User Card Components (Read-only Props)
            </h3>
            <div className="flex gap-8 flex-wrap justify-center">
              <LitUserCard
                name="Alice Johnson"
                email="alice@example.com"
                role="Frontend Developer"
              />
              <LitUserCard
                name="Bob Smith"
                email="bob@example.com"
                role="Backend Developer"
              />
            </div>
          </div>
        </Suspense>

        <div className="mt-8 text-center flex gap-4 justify-center">
          <Link
            href="/lit"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Client-Side Lit →
          </Link>
          <Link
            href="/stencil-ssr"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Stencil SSR →
          </Link>
        </div>
      </div>
    </main>
  );
}
