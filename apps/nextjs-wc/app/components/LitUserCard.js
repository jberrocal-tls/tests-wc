"use client";

import { useEffect, useRef, useState } from "react";

export default function LitUserCard({ name, email, role, avatar }) {
  const containerRef = useRef(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Load the Lit component via script tag
    const script = document.createElement("script");
    script.src = "/components/user-card.js";
    script.type = "module";
    script.onload = () => {
      setIsHydrated(true);
    };
    script.onerror = (error) => {
      console.error("Error loading Lit user-card component:", error);
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
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
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-6 rounded-lg max-w-xs">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-3xl font-bold text-purple-600 border-4 border-white/30">
              {name ? name.charAt(0).toUpperCase() : "?"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">{name || "Loading..."}</div>
            <div className="text-sm opacity-90 mb-3">{email || "..."}</div>
            <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-xs font-semibold uppercase">
              {role || "..."}
            </div>
          </div>
        </div>
      )}

      {/* Actual web component (hydrates after load) */}
      <user-card
        name={name}
        email={email}
        role={role}
        avatar={avatar}
        style={{ display: isHydrated ? "block" : "none" }}
      />
    </div>
  );
}
