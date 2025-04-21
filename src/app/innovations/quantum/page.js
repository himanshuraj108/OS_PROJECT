import Link from 'next/link';

export default function QuantumOSPage() {
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
          <div className="h-64 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-8">
            <h1 className="text-5xl font-bold text-white text-center">Quantum Computing OS</h1>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-white/20 text-sm text-white px-3 py-1 rounded-full">
              Quantum
            </span>
            <span className="bg-white/20 text-sm text-white px-3 py-1 rounded-full">
              Future
            </span>
            <span className="bg-white/20 text-sm text-white px-3 py-1 rounded-full">
              Computing
            </span>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Exploring the future of operating systems in quantum computing environments and how traditional
            CPU scheduling concepts must evolve to accommodate quantum principles.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Quantum Computing Fundamentals</h2>
            
            <div className="text-gray-300 space-y-4">
              <p>
                Quantum computing leverages the principles of quantum mechanics to process information in ways that
                classical computers cannot. Instead of using bits that can be either 0 or 1, quantum computers
                use quantum bits or "qubits" that can exist in multiple states simultaneously due to superposition.
              </p>
              
              <p>
                This fundamental difference creates both opportunities and challenges for operating system design.
                Traditional scheduling algorithms that assume deterministic execution and discrete states
                must be reconceptualized for quantum environments.
              </p>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Quantum Scheduling Challenges</h3>
              
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-semibold">Coherence Time Constraints:</span> Qubits remain in superposition for limited time periods before decoherence occurs. Schedulers must prioritize operations within these constraints.
                </li>
                <li>
                  <span className="font-semibold">Error Correction Overhead:</span> Quantum error correction requires significant resources and must be integrated into scheduling decisions.
                </li>
                <li>
                  <span className="font-semibold">Entanglement Management:</span> Schedulers need to track and manage qubit entanglement, which creates dependencies between operations.
                </li>
                <li>
                  <span className="font-semibold">Hybrid Classical-Quantum Workflows:</span> Most practical quantum algorithms require coordination between classical and quantum resources.
                </li>
              </ul>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Quantum-Aware Scheduling Approaches</h3>
              
              <p>
                Several approaches are being researched to address quantum scheduling challenges:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-bold text-lg text-purple-400 mb-2">Priority-Based Coherence Scheduling</h4>
                  <p>
                    Assigns priorities based on qubit coherence times and operation criticality, 
                    ensuring that operations are completed before decoherence.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-bold text-lg text-purple-400 mb-2">Entanglement-Aware Resource Allocation</h4>
                  <p>
                    Tracks entanglement relationships and schedules related operations to minimize 
                    the need for qubit transportation and reduce decoherence risk.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-bold text-lg text-purple-400 mb-2">Error Budget-Based Scheduling</h4>
                  <p>
                    Allocates an "error budget" to each quantum task and schedules operations to 
                    minimize overall error rates across the system.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-bold text-lg text-purple-400 mb-2">Hybrid Workflow Optimization</h4>
                  <p>
                    Coordinates classical and quantum resources to maximize overall system throughput, 
                    recognizing the different constraints of each computing paradigm.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 h-fit">
            <h2 className="text-2xl font-bold text-white mb-6">Key Concepts</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Superposition</h3>
                <p className="text-gray-300">
                  Qubits can exist in multiple states simultaneously, requiring schedulers to consider probabilistic outcomes rather than deterministic ones.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Entanglement</h3>
                <p className="text-gray-300">
                  When qubits become entangled, their states become correlated, creating dependencies that must be managed by the scheduler.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Decoherence</h3>
                <p className="text-gray-300">
                  Quantum states degrade over time, imposing strict timing constraints on quantum operations and scheduling decisions.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Quantum Gates</h3>
                <p className="text-gray-300">
                  The quantum equivalent of classical logic gates, but with fundamentally different characteristics and execution constraints.
                </p>
              </div>
              
              <div className="pt-6 border-t border-white/20">
                <h3 className="text-lg font-bold text-white mb-4">Research Areas</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Quantum-classical resource coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Error-adaptive scheduling algorithms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Dynamic qubit allocation strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Quantum memory management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">The Future of Quantum OS Development</h2>
          
          <div className="text-gray-300 space-y-4">
            <p>
              As quantum hardware continues to advance, operating systems must evolve to bridge the gap between quantum 
              capabilities and practical applications. Several key developments are expected in the coming years:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">Abstraction Layers</h3>
                <p>
                  Development of abstraction layers that hide quantum complexity from application developers while 
                  maintaining the performance benefits of quantum computing.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">Resource Optimization</h3>
                <p>
                  Advanced algorithms that optimize the allocation of scarce quantum resources and intelligently 
                  partition workloads between classical and quantum processors.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">Specialized APIs</h3>
                <p>
                  Standardized APIs for quantum resource access, enabling portable applications that can run across 
                  different quantum hardware platforms with minimal adaptation.
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