"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RoundRobinPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/scheduling?algorithm=round-robin');
  }, [router]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 flex items-center justify-center">
      <div className="text-white text-2xl">Loading Round Robin Visualization...</div>
    </div>
  );
} 