"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function PrioritySchedulingPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/scheduling?algorithm=priority');
  }, [router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="text-center p-8 rounded-lg">
        <div className="animate-spin mb-4 mx-auto h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        <p className="text-white text-lg">Loading Priority Scheduling...</p>
      </div>
    </div>
  );
} 