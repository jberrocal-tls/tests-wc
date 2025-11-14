import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Web Components Demo
            </h1>
            <p className="text-xl text-white/90">
              Explore Lit.js and Stencil counter components in Next.js
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/lit">
              <div className="bg-white rounded-xl shadow-2xl p-8 hover:scale-105 transition-transform cursor-pointer">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔥</div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Lit.js
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Fast, lightweight web components with reactive state and scoped styles
                  </p>
                  <div className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    View Demo →
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/stencil">
              <div className="bg-white rounded-xl shadow-2xl p-8 hover:scale-105 transition-transform cursor-pointer">
                <div className="text-center">
                  <div className="text-6xl mb-4">⚡</div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Stencil
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Compiler-powered web components with TypeScript, JSX, and virtual DOM
                  </p>
                  <div className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    View Demo →
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">Counter Components</h3>
              <p className="text-white text-lg mb-4">
                Interactive counter components built with different web component frameworks
              </p>
              <div className="flex gap-4 justify-center mt-4">
                <Link href="/lit-ssr" className="text-white hover:underline">
                  Try Lit SSR →
                </Link>
                <Link href="/stencil-ssr" className="text-white hover:underline">
                  Try Stencil SSR →
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">User Card Components</h3>
              <p className="text-white text-lg mb-4">
                Display-only components with read-only props (no interactions)
              </p>
              <div className="flex gap-4 justify-center mt-4">
                <Link href="/lit-cards" className="text-white hover:underline">
                  Try Lit Cards →
                </Link>
                <Link href="/stencil-cards" className="text-white hover:underline">
                  Try Stencil Cards →
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Client-Side Rendering</h3>
                <p className="text-white/80 text-sm">
                  Components loaded dynamically on the client with script injection
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Server-Side Rendering</h3>
                <p className="text-white/80 text-sm">
                  SSR with placeholder content and progressive hydration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
