"use client";

import { useEffect, useRef, useState } from "react";

export default function LitCounter() {
  const containerRef = useRef(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Load the Lit component via script tag
    const script = document.createElement("script");
    script.src = "/components/counter-lit.js";
    script.type = "module";
    script.onload = () => {
      setIsHydrated(true);
    };
    script.onerror = (error) => {
      console.error("Error loading Lit component:", error);
    };

    document.head.appendChild(script);

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
          <h2 className="text-2xl font-bold text-center mb-4">
            Counter Component
          </h2>
          <div className="text-5xl font-bold text-center mb-6">0</div>
          <div className="flex gap-2 justify-center">
            <button className="px-6 py-2 bg-red-500 rounded-lg">-</button>
            <button className="px-6 py-2 bg-orange-500 rounded-lg">
              Reset
            </button>
            <button className="px-6 py-2 bg-green-500 rounded-lg">+</button>
          </div>
        </div>
      )}

      {/* Actual web component (hydrates after load) */}
      <counter-component style={{ display: isHydrated ? "block" : "none" }} />
    </div>
  );
}
