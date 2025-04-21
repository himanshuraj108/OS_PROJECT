import TransitionLink from '../../components/TransitionLink';

export default function InnovationsPage() {
  const innovations = [
    {
      id: 'quantum',
      title: 'Quantum Computing OS',
      description: 'Exploring the future of operating systems in quantum computing environments.',
      image: 'quantum.jpg',
      tags: ['Quantum', 'Future', 'Computing'],
    },
    {
      id: 'real-time',
      title: 'Real-time Scheduling',
      description: 'Advanced real-time scheduling techniques for critical systems.',
      image: 'realtime.jpg',
      tags: ['Real-time', 'Critical Systems', 'Scheduling'],
    },
    {
      id: 'distributed',
      title: 'Distributed OS',
      description: 'Modern approaches to distributed operating systems and resource management.',
      image: 'distributed.jpg',
      tags: ['Distributed', 'Cloud', 'Networking'],
    },
    {
      id: 'ai-driven',
      title: 'AI-driven Resource Allocation',
      description: 'Using artificial intelligence to optimize resource allocation in modern operating systems.',
      image: 'ai.jpg',
      tags: ['AI', 'Machine Learning', 'Optimization'],
    },
    {
      id: 'energy',
      title: 'Energy-efficient Scheduling',
      description: 'Scheduling algorithms designed to minimize energy consumption in mobile and embedded systems.',
      image: 'energy.jpg',
      tags: ['Energy', 'Green Computing', 'Mobile'],
    },
    {
      id: 'security',
      title: 'Security-focused Scheduling',
      description: 'Process scheduling techniques that enhance system security and prevent timing attacks.',
      image: 'security.jpg',
      tags: ['Security', 'Protection', 'Privacy'],
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">OS Innovations</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Discover cutting-edge innovations in operating system design, process management, and CPU scheduling.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation) => (
            <div 
              key={innovation.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{innovation.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{innovation.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {innovation.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="bg-white/20 text-xs text-white px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <TransitionLink 
                  href={`/innovations/${innovation.id}`}
                  className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-md text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                >
                  Learn More
                </TransitionLink>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">The Future of OS Scheduling</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Challenges in Modern Computing</h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Heterogeneous computing environments with CPUs, GPUs, and specialized processors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Balancing performance, energy efficiency, and thermal constraints</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Meeting real-time requirements in increasingly complex systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Security and isolation in multi-tenant environments</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Emerging Solutions</h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Machine learning-based predictive scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Context-aware and application-specific scheduling policies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Distributed scheduling algorithms for edge computing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Hardware-software co-design for optimal resource utilization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 