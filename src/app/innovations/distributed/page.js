import Link from 'next/link';

export default function DistributedOSPage() {
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
          <div className="h-64 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center mb-8">
            <h1 className="text-5xl font-bold text-white text-center">Distributed OS</h1>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-white/20 text-sm text-white px-3 py-1 rounded-full">
              Distributed
            </span>
            <span className="bg-white/20 text-sm text-white px-3 py-1 rounded-full">
              Cloud
            </span>
            <span className="bg-white/20 text-sm text-white px-3 py-1 rounded-full">
              Networking
            </span>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Modern approaches to distributed operating systems and resource management across networked computers, enabling powerful computing capabilities beyond what a single machine can provide.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Distributed OS Fundamentals</h2>
            
            <div className="text-gray-300 space-y-4">
              <p>
                A distributed operating system manages a collection of independent computers, making them appear as a single coherent system to users. Unlike traditional operating systems that focus on a single machine, distributed OS technology must address networking, concurrency, resource sharing, and fault tolerance across multiple nodes.
              </p>
              
              <p>
                The key challenge is providing a unified computing experience while efficiently managing the complexity of distributed resources.
              </p>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Evolution of Distributed Systems</h3>
              
              <div className="relative overflow-hidden">
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-blue-900 flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold">1970s</span>
                    </div>
                    <p className="text-sm">Early Networks</p>
                  </div>
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-blue-800 flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold">1990s</span>
                    </div>
                    <p className="text-sm">Client/Server</p>
                  </div>
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-blue-700 flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold">2000s</span>
                    </div>
                    <p className="text-sm">Grid Computing</p>
                  </div>
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold">2010s</span>
                    </div>
                    <p className="text-sm">Cloud Computing</p>
                  </div>
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold">Now</span>
                    </div>
                    <p className="text-sm">Edge Computing</p>
                  </div>
                </div>
                <div className="absolute top-7 left-8 right-8 h-2 bg-gradient-to-r from-blue-900 to-blue-500 z-0"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Key Distributed Scheduling Challenges</h3>
              
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="font-bold text-lg text-green-400 mb-2">Load Balancing</h4>
                  <p>
                    Distributing workloads evenly across multiple computing resources to maximize throughput, minimize response time, and avoid overloading any single resource.
                  </p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="font-bold text-lg text-green-400 mb-2">Resource Discovery and Allocation</h4>
                  <p>
                    Efficiently finding and allocating available resources in a dynamic environment where nodes may join or leave the system at any time.
                  </p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="font-bold text-lg text-green-400 mb-2">Fault Tolerance</h4>
                  <p>
                    Maintaining system functionality despite failures of individual components through redundancy, checkpointing, and recovery mechanisms.
                  </p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="font-bold text-lg text-green-400 mb-2">Consistency and Synchronization</h4>
                  <p>
                    Ensuring that distributed data and operations maintain consistency across all nodes, particularly challenging in systems with partial failures.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 h-fit">
            <h2 className="text-2xl font-bold text-white mb-6">Key Technologies</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Containerization</h3>
                <p className="text-gray-300">
                  Lightweight virtualization that packages applications with their dependencies, enabling consistent deployment across distributed environments.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Orchestration</h3>
                <p className="text-gray-300">
                  Systems that automate deployment, scaling, and management of containerized applications across clusters of hosts.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Microservices</h3>
                <p className="text-gray-300">
                  Architectural approach where applications are composed of loosely coupled, independently deployable services that communicate via well-defined APIs.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Consensus Algorithms</h3>
                <p className="text-gray-300">
                  Techniques that enable distributed systems to reach agreement on values or states, essential for coordinated decision-making.
                </p>
              </div>
              
              <div className="pt-6 border-t border-white/20">
                <h3 className="text-lg font-bold text-white mb-4">Popular Frameworks</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Kubernetes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Apache Mesos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Docker Swarm</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Nomad</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Advanced Distributed Scheduling Approaches</h2>
          
          <div className="text-gray-300 space-y-4">
            <p>
              Modern distributed systems employ sophisticated scheduling strategies to optimize resource utilization and application performance:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gradient-to-br from-blue-900/50 to-green-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">Constraint-based Scheduling</h3>
                <p>
                  Allocation algorithms that consider hardware constraints, affinity rules, anti-affinity policies, and quality of service requirements when placing workloads.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-900/50 to-green-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">Auction-based Resource Allocation</h3>
                <p>
                  Market-inspired approaches where computational tasks bid for resources, enabling economic efficiency in resource allocation based on priority and urgency.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-900/50 to-green-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">Machine Learning Optimizations</h3>
                <p>
                  AI-driven schedulers that predict resource needs, optimize placements, and dynamically adjust allocations based on historical performance data.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-900/50 to-green-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">Multi-objective Scheduling</h3>
                <p>
                  Approaches that balance multiple competing objectives such as performance, energy efficiency, cost, and reliability through sophisticated optimization techniques.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 border border-cyan-900/50 rounded-xl bg-cyan-900/10">
              <h3 className="text-xl font-bold text-white mb-3">Case Study: Global-scale Distributed Scheduling</h3>
              <p className="mb-4">
                Major cloud providers operate distributed schedulers that manage millions of machines across dozens of global regions. These systems must handle:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Heterogeneous hardware with varying capabilities</li>
                <li>Network topology constraints and data locality requirements</li>
                <li>Complex application dependencies and service-level objectives</li>
                <li>Hardware and network failures at scale</li>
                <li>Dynamic workloads with unpredictable resource demands</li>
              </ul>
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