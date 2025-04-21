import Link from 'next/link';

export default function RealTimeOSPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link 
            href="/innovations" 
            className="text-cyan-400 hover:text-cyan-300 flex items-center transition-colors"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Innovations
          </Link>
        </div>

        <header className="mb-12">
          <div className="h-64 bg-gradient-to-r from-red-600 to-purple-600 rounded-xl flex items-center justify-center mb-8">
            <h1 className="text-5xl font-bold text-white text-center">Real-time Scheduling</h1>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-white/20 text-sm text-white px-3 py-1 rounded-full">
              Real-time
            </span>
            <span className="bg-white/20 text-sm text-white px-3 py-1 rounded-full">
              Critical Systems
            </span>
            <span className="bg-white/20 text-sm text-white px-3 py-1 rounded-full">
              Scheduling
            </span>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Advanced real-time scheduling techniques for mission-critical systems where timing constraints are absolute requirements rather than performance goals.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Real-time Scheduling Fundamentals</h2>
            
            <div className="text-gray-300 space-y-4">
              <p>
                Real-time scheduling algorithms ensure that tasks complete within specified time constraints. Unlike general-purpose scheduling that aims to maximize throughput or minimize average waiting time, real-time scheduling focuses on meeting deadlines and providing timing guarantees.
              </p>
              
              <p>
                These systems are critical in environments where missing deadlines can lead to system failure, safety hazards, or significant financial loss.
              </p>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Types of Real-time Systems</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-white/5 p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-lg text-red-400 mb-2">Hard Real-time</h4>
                  <p>
                    Systems where missing a deadline is considered a system failure. Examples include aircraft flight control systems, automotive safety systems, and medical devices.
                  </p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-bold text-lg text-yellow-400 mb-2">Soft Real-time</h4>
                  <p>
                    Systems where missing deadlines is undesirable but not catastrophic. Examples include multimedia streaming, online gaming, and telecommunications.
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Key Real-time Scheduling Algorithms</h3>
              
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="font-bold text-lg text-purple-400 mb-2">Rate Monotonic Scheduling (RMS)</h4>
                  <p className="mb-3">
                    A fixed-priority scheduling algorithm that assigns priorities based on task periods. Tasks with shorter periods receive higher priorities.
                  </p>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <span className="text-cyan-400 font-mono">Key property:</span> Optimal for fixed-priority scheduling of periodic tasks with deadlines equal to periods.
                  </div>
                </div>
                
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="font-bold text-lg text-purple-400 mb-2">Earliest Deadline First (EDF)</h4>
                  <p className="mb-3">
                    A dynamic priority scheduling algorithm that assigns priorities based on absolute deadlines. The task with the nearest deadline gets the highest priority.
                  </p>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <span className="text-cyan-400 font-mono">Key property:</span> Optimal for dynamic-priority scheduling and can achieve 100% CPU utilization in ideal conditions.
                  </div>
                </div>
                
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="font-bold text-lg text-purple-400 mb-2">Deadline Monotonic Scheduling (DMS)</h4>
                  <p className="mb-3">
                    Similar to RMS but assigns priorities based on relative deadlines rather than periods. Tasks with shorter deadlines receive higher priorities.
                  </p>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <span className="text-cyan-400 font-mono">Key property:</span> Optimal when deadlines can be shorter than periods.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 h-fit">
            <h2 className="text-2xl font-bold text-white mb-6">Critical Concepts</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Deadline</h3>
                <p className="text-gray-300">
                  The time by which a task must complete execution. Can be specified as absolute time or relative to the task's arrival.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Jitter</h3>
                <p className="text-gray-300">
                  The variation in task response times or periodicity, which can impact system predictability and performance.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Utilization Bound</h3>
                <p className="text-gray-300">
                  The maximum CPU utilization at which all tasks can still meet their deadlines under a specific scheduling algorithm.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Schedulability Analysis</h3>
                <p className="text-gray-300">
                  Mathematical techniques to determine whether a given task set can meet all its deadlines under a particular scheduling policy.
                </p>
              </div>
              
              <div className="pt-6 border-t border-white/20">
                <h3 className="text-lg font-bold text-white mb-4">Application Domains</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Aerospace and defense systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Automotive control units</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Industrial automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Medical devices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Robotics and autonomous systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Innovations in Real-time Scheduling</h2>
          
          <div className="text-gray-300 space-y-4">
            <p>
              Modern real-time systems face increasingly complex challenges, driving innovation in scheduling algorithms and techniques:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">Mixed-Criticality Systems</h3>
                <p>
                  Scheduling algorithms that can handle tasks with different levels of importance and timing requirements on the same hardware platform.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">Energy-Aware Real-time Scheduling</h3>
                <p>
                  Techniques that balance meeting deadlines with minimizing energy consumption, critical for battery-powered and embedded systems.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">Multicore Real-time Scheduling</h3>
                <p>
                  Algorithms designed to efficiently utilize multiple processing cores while maintaining timing guarantees and managing shared resources.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">Feedback Control Scheduling</h3>
                <p>
                  Dynamic approaches that use feedback mechanisms to adapt scheduling parameters based on system performance and workload changes.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            href="/innovations" 
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-full font-medium text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            Explore More OS Innovations
          </Link>
        </div>
      </div>
    </main>
  );
} 