"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ComparisonPage() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Initialize the page
    setIsLoading(false);
  }, []);

  const algorithmOptions = [
    { id: 'fcfs', name: 'First Come, First Served (FCFS)', description: 'Processes are executed in the order they arrive in the ready queue.' },
    { id: 'sjf', name: 'Shortest Job First (SJF)', description: 'The process with the smallest execution time is selected for execution next.' },
    { id: 'srtf', name: 'Shortest Remaining Time First (SRTF)', description: 'The process with the smallest amount of time remaining until completion is selected.' },
    { id: 'priority', name: 'Priority Scheduling', description: 'Each process is assigned a priority and the process with the highest priority is executed first.' },
    { id: 'round-robin', name: 'Round Robin', description: 'Each process is assigned a fixed time slot in a cyclic way.' }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Compare CPU Scheduling Algorithms</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore and compare different CPU scheduling algorithms to understand their behaviors, strengths, and weaknesses.
          </p>
        </header>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-white text-xl">Loading comparison tool...</div>
          </div>
        ) : (
          <>
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-6">Algorithm Selection</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {algorithmOptions.map((algorithm) => (
                  <Link 
                    href={`/scheduling?algorithm=${algorithm.id}`}
                    key={algorithm.id}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-blue-500/30"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{algorithm.name}</h3>
                    <p className="text-gray-300 mb-4 h-16">{algorithm.description}</p>
                    <div className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-center transition-colors">
                      View Simulation
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-white mb-6">Choosing the Right Algorithm</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-blue-400 mb-3">Best for Fairness</h3>
                  <ul className="text-white space-y-2">
                    <li>• Round Robin</li>
                    <li>• First Come, First Served</li>
                  </ul>
                  <p className="text-gray-300 mt-2 text-sm">
                    These algorithms ensure that all processes get a fair share of CPU time.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-green-400 mb-3">Best for Throughput</h3>
                  <ul className="text-white space-y-2">
                    <li>• Shortest Job First</li>
                    <li>• Shortest Remaining Time First</li>
                  </ul>
                  <p className="text-gray-300 mt-2 text-sm">
                    These algorithms minimize average waiting time and maximize throughput.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-purple-400 mb-3">Best for Response Time</h3>
                  <ul className="text-white space-y-2">
                    <li>• Round Robin</li>
                    <li>• Shortest Remaining Time First</li>
                  </ul>
                  <p className="text-gray-300 mt-2 text-sm">
                    These algorithms prioritize quick initial response to process requests.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-amber-400 mb-3">Best for Priority Tasks</h3>
                  <ul className="text-white space-y-2">
                    <li>• Priority Scheduling</li>
                    <li>• Preemptive Priority Scheduling</li>
                  </ul>
                  <p className="text-gray-300 mt-2 text-sm">
                    These algorithms prioritize important tasks over less important ones.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Performance Metrics Explained</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Primary Metrics</h3>
                  <ul className="text-gray-300 space-y-4">
                    <li>
                      <div className="font-semibold text-white">Waiting Time</div>
                      <p>The total time a process spends waiting in the ready queue before it gets CPU time. Lower is better.</p>
                    </li>
                    <li>
                      <div className="font-semibold text-white">Turnaround Time</div>
                      <p>The total time taken from submission of a process to its completion. It includes waiting time and execution time. Lower is better.</p>
                    </li>
                    <li>
                      <div className="font-semibold text-white">Response Time</div>
                      <p>The time from submission of a process until the first response is produced. Important for interactive systems. Lower is better.</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Other Considerations</h3>
                  <ul className="text-gray-300 space-y-4">
                    <li>
                      <div className="font-semibold text-white">CPU Utilization</div>
                      <p>The percentage of time the CPU is busy processing. Higher is better.</p>
                    </li>
                    <li>
                      <div className="font-semibold text-white">Throughput</div>
                      <p>The number of processes completed per unit time. Higher is better.</p>
                    </li>
                    <li>
                      <div className="font-semibold text-white">Fairness</div>
                      <p>The degree to which each process receives a fair share of CPU time. Some algorithms may favor certain processes over others.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
} 