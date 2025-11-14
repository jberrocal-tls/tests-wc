'use client';

import { useEffect, useRef, useState } from 'react';

export default function StencilCounter() {
  const containerRef = useRef(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Load the Stencil component via script tag
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import { defineCustomElements } from '/components/loader/index.js';
      defineCustomElements(window);
    `;
    script.onload = () => {
      setIsHydrated(true);
    };
    script.onerror = (error) => {
      console.error('Error loading Stencil component:', error);
    };

    document.head.appendChild(script);

    // Set hydrated after a short delay to allow custom elements to register
    setTimeout(() => {
      setIsHydrated(true);
    }, 100);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="transition-opacity duration-300"
      style={{ opacity: isHydrated ? 1 : 0.5 }}
    >
      {/* Server-rendered placeholder */}
      {!isHydrated && (
        <div className="counter-placeholder bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-8 rounded-lg max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-4">Counter Component</h2>
          <div className="text-5xl font-bold text-center mb-6">0</div>
          <div className="flex gap-2 justify-center">
            <button className="px-6 py-2 bg-red-500 rounded-lg">-</button>
            <button className="px-6 py-2 bg-orange-500 rounded-lg">Reset</button>
            <button className="px-6 py-2 bg-green-500 rounded-lg">+</button>
          </div>
          <p className="text-xs text-center mt-4 opacity-75">Loading Stencil component...</p>
        </div>
      )}

      {/* Actual web component (hydrates after load) */}
      <counter-component
        style={{ display: isHydrated ? 'block' : 'none' }}
      />
    </div>
  );
}
