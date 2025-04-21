"use client";

import { useState, useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Create a client component that uses the hooks
function PageTransitionInner() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Show the loading indicator when navigation starts
    setLoading(true);

    // Hide it after a delay (to ensure minimum 0.3s visibility)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]); // This will re-run on navigation

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="animate-spin">
        {/* OS Icon - CPU icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
          <path d="M16.5 9.4l-9-5.19"></path>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <path d="M3.29 7.05L12 12l8.71-4.95"></path>
          <path d="M12 22.08V12"></path>
        </svg>
      </div>
    </div>
  );
}

// This is the main component that uses Suspense
export default function PageTransition() {
  return (
    <Suspense fallback={null}>
      <PageTransitionInner />
    </Suspense>
  );
} 