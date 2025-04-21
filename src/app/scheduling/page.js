"use client";

import { useState, useEffect } from 'react';
import SchedulingVisualizer from '../../components/SchedulingVisualizer';

export default function SchedulingPage() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('fcfs');
  const [showAnimation, setShowAnimation] = useState(false);
  
  // Reset animation state when algorithm changes
  useEffect(() => {
    setShowAnimation(false);
    const timer = setTimeout(() => setShowAnimation(true), 100);
    return () => clearTimeout(timer);
  }, [selectedAlgorithm]);
  
  const algorithms = [
    { 
      id: 'fcfs', 
      name: 'First Come, First Served (FCFS)', 
      description: 'A non-preemptive scheduling algorithm that executes processes in the order they arrive in the ready queue.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    { 
      id: 'sjf', 
      name: 'Shortest Job First (SJF)', 
      description: 'A non-preemptive scheduling algorithm that selects the process with the smallest execution time.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      id: 'srtf', 
      name: 'Shortest Remaining Time First (SRTF)', 
      description: 'A preemptive version of SJF that selects the process with the smallest remaining execution time.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      id: 'priority', 
      name: 'Priority Scheduling', 
      description: 'A scheduling algorithm that selects the process with the highest priority (lowest priority number).',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
        </svg>
      )
    },
    { 
      id: 'round-robin', 
      name: 'Round Robin', 
      description: 'A preemptive scheduling algorithm that assigns a fixed time quantum to each process in a cyclic queue.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];
  
  // Animation elements for each algorithm
  const algorithmAnimations = {
    'fcfs': (
      <div className="w-full h-24 relative mb-6 overflow-hidden bg-slate-800/50 rounded-lg">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full flex items-center justify-around">
            {[1, 2, 3, 4].map((num) => (
              <div 
                key={num}
                className="flex flex-col items-center justify-center"
                style={{
                  animation: `moveRight 8s linear infinite`,
                  animationDelay: `${num * 0.5}s`,
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold"
                  style={{ 
                    backgroundColor: `hsl(${num * 60}, 80%, 60%)`,
                    boxShadow: '0 0 15px rgba(255,255,255,0.2)'
                  }}
                >
                  P{num}
                </div>
                <div className="text-xs text-gray-400 mt-1">t={num}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    'sjf': (
      <div className="w-full h-24 relative mb-6 overflow-hidden bg-slate-800/50 rounded-lg">
        <div className="flex items-center justify-center h-full">
          <div className="grid grid-cols-4 gap-4">
            {[4, 1, 3, 2].map((num, index) => (
              <div 
                key={num}
                className="flex flex-col items-center justify-center"
                style={{
                  animation: index === 0 ? 'none' : `scaleUpDown 2s ease-in-out infinite`,
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                <div 
                  className="relative flex flex-col items-center"
                  style={{ height: `${num * 10 + 20}px` }}
                >
                  <div 
                    className="w-12 rounded-t-lg flex items-center justify-center text-white font-bold absolute bottom-0"
                    style={{ 
                      backgroundColor: `hsl(${num * 60}, 80%, 60%)`,
                      height: `${num * 10}px`,
                      boxShadow: '0 0 15px rgba(255,255,255,0.2)'
                    }}
                  >
                    P{num}
                  </div>
                  <div className="text-xs text-gray-400 absolute -bottom-5">{num}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    'srtf': (
      <div className="w-full h-24 relative mb-6 overflow-hidden bg-slate-800/50 rounded-lg">
        <div className="flex items-center justify-center h-full">
          <div className="flex space-x-6">
            {[3, 2, 1, 4].map((num, index) => (
              <div 
                key={num}
                className="flex flex-col items-center justify-center"
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold relative"
                  style={{ 
                    backgroundColor: `hsl(${num * 60}, 80%, 60%)`,
                    boxShadow: '0 0 15px rgba(255,255,255,0.2)',
                    animation: `pulse 2s ease-in-out infinite ${index * 0.5}s`
                  }}
                >
                  P{num}
                  <div 
                    className="absolute top-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs"
                    style={{ transform: 'translate(25%, -25%)' }}
                  >
                    {5-num}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    'priority': (
      <div className="w-full h-24 relative mb-6 overflow-hidden bg-slate-800/50 rounded-lg">
        <div className="flex items-center justify-center h-full">
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <div 
                key={num}
                className="flex flex-col items-center justify-center"
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold relative"
                  style={{ 
                    backgroundColor: `hsl(${num * 60}, 80%, 60%)`,
                    boxShadow: '0 0 15px rgba(255,255,255,0.2)',
                    zIndex: 5 - num
                  }}
                >
                  P{num}
                  <div 
                    className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs text-white animate-pulse"
                  >
                    {num}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    'round-robin': (
      <div className="w-full h-24 relative mb-6 overflow-hidden bg-slate-800/50 rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 border-4 border-dashed border-blue-500 rounded-full animate-spin-slow"></div>
          <div className="absolute">
            {[1, 2, 3, 4].map((num, i) => (
              <div 
                key={num}
                className="absolute w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold"
                style={{ 
                  backgroundColor: `hsl(${num * 60}, 80%, 60%)`,
                  transform: `rotate(${i * 90}deg) translateY(-100px) rotate(-${i * 90}deg)`,
                  boxShadow: '0 0 15px rgba(255,255,255,0.2)'
                }}
              >
                P{num}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">CPU Scheduling Algorithms</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore different CPU scheduling algorithms and compare their performance metrics through interactive visualizations.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          {algorithms.map((algorithm) => (
            <button
              key={algorithm.id}
              className={`p-4 rounded-lg transition-all duration-200 text-left ${
                selectedAlgorithm === algorithm.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                  : 'bg-white/10 text-gray-200 hover:bg-white/20'
              }`}
              onClick={() => setSelectedAlgorithm(algorithm.id)}
            >
              <h3 className="font-bold text-sm mb-1">{algorithm.name}</h3>
            </button>
          ))}
        </div>

        <div className="mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">{algorithms.find(a => a.id === selectedAlgorithm).name}</h2>
            <p className="text-gray-300 mb-4">{algorithms.find(a => a.id === selectedAlgorithm).description}</p>
            
            {selectedAlgorithm === 'fcfs' && (
              <div className="text-gray-300">
                <h3 className="text-xl font-bold mb-2">Key Characteristics:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Simple and easy to implement</li>
                  <li>Non-preemptive (once a process starts, it runs until completion)</li>
                  <li>Can lead to the convoy effect where short processes wait behind long ones</li>
                  <li>Fair in terms of arrival order but inefficient for turnaround time</li>
                </ul>
              </div>
            )}
            
            {selectedAlgorithm === 'sjf' && (
              <div className="text-gray-300">
                <h3 className="text-xl font-bold mb-2">Key Characteristics:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Optimal for average waiting time for a given set of processes</li>
                  <li>Non-preemptive (once a process starts, it runs until completion)</li>
                  <li>Requires predicting the CPU burst time, which can be challenging</li>
                  <li>May lead to starvation for longer processes if shorter ones keep arriving</li>
                </ul>
              </div>
            )}
            
            {selectedAlgorithm === 'srtf' && (
              <div className="text-gray-300">
                <h3 className="text-xl font-bold mb-2">Key Characteristics:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Preemptive version of SJF (can interrupt running processes)</li>
                  <li>Optimal average waiting time and turnaround time</li>
                  <li>Higher scheduling overhead due to context switching</li>
                  <li>Requires continuous monitoring of remaining time</li>
                  <li>Can cause starvation for longer processes</li>
                </ul>
              </div>
            )}
            
            {selectedAlgorithm === 'priority' && (
              <div className="text-gray-300">
                <h3 className="text-xl font-bold mb-2">Key Characteristics:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Processes are scheduled based on priority values</li>
                  <li>Can be preemptive or non-preemptive</li>
                  <li>Can lead to starvation of lower priority processes</li>
                  <li>Often implemented with aging to prevent starvation</li>
                  <li>Priority can be determined by various factors (memory requirements, time limits, etc.)</li>
                </ul>
              </div>
            )}
            
            {selectedAlgorithm === 'round-robin' && (
              <div className="text-gray-300">
                <h3 className="text-xl font-bold mb-2">Key Characteristics:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Designed specifically for time-sharing systems</li>
                  <li>Preemptive scheduling with fixed time slices (quantum)</li>
                  <li>Fair allocation of CPU time to all processes</li>
                  <li>No process waits more than (n-1)q time units (where n is number of processes and q is time quantum)</li>
                  <li>Performance heavily depends on the size of the time quantum</li>
                </ul>
              </div>
            )}
          </div>
          
          <SchedulingVisualizer algorithm={selectedAlgorithm} />
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Comparing CPU Scheduling Algorithms</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-transparent">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-slate-700">
                    Algorithm
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-slate-700">
                    Preemptive
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-slate-700">
                    Average Wait Time
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-slate-700">
                    Average Turnaround Time
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-slate-700">
                    Response Time
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-slate-700">
                    Overhead
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-slate-700">
                    Starvation
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700">
                  <td className="px-4 py-3 text-white">FCFS</td>
                  <td className="px-4 py-3 text-red-400">No</td>
                  <td className="px-4 py-3 text-yellow-400">High</td>
                  <td className="px-4 py-3 text-yellow-400">High</td>
                  <td className="px-4 py-3 text-yellow-400">High</td>
                  <td className="px-4 py-3 text-green-400">Low</td>
                  <td className="px-4 py-3 text-gray-300">No</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="px-4 py-3 text-white">SJF</td>
                  <td className="px-4 py-3 text-red-400">No</td>
                  <td className="px-4 py-3 text-green-400">Low</td>
                  <td className="px-4 py-3 text-green-400">Low</td>
                  <td className="px-4 py-3 text-yellow-400">Medium</td>
                  <td className="px-4 py-3 text-green-400">Low</td>
                  <td className="px-4 py-3 text-red-400">Possible</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="px-4 py-3 text-white">SRTF</td>
                  <td className="px-4 py-3 text-green-400">Yes</td>
                  <td className="px-4 py-3 text-green-400">Lowest</td>
                  <td className="px-4 py-3 text-green-400">Lowest</td>
                  <td className="px-4 py-3 text-green-400">Low</td>
                  <td className="px-4 py-3 text-red-400">High</td>
                  <td className="px-4 py-3 text-red-400">Possible</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="px-4 py-3 text-white">Priority</td>
                  <td className="px-4 py-3 text-yellow-400">Both</td>
                  <td className="px-4 py-3 text-yellow-400">Varies</td>
                  <td className="px-4 py-3 text-yellow-400">Varies</td>
                  <td className="px-4 py-3 text-yellow-400">Varies</td>
                  <td className="px-4 py-3 text-yellow-400">Medium</td>
                  <td className="px-4 py-3 text-red-400">Possible</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">Round Robin</td>
                  <td className="px-4 py-3 text-green-400">Yes</td>
                  <td className="px-4 py-3 text-yellow-400">Medium</td>
                  <td className="px-4 py-3 text-yellow-400">Medium</td>
                  <td className="px-4 py-3 text-green-400">Low</td>
                  <td className="px-4 py-3 text-red-400">High</td>
                  <td className="px-4 py-3 text-green-400">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-indigo-900/20"></div>
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite ${Math.random() * 5}s`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          ></div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(${Math.random() * 100}px, ${Math.random() * 100}px) rotate(${Math.random() * 30}deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
      `}</style>
    </main>
  );
} 