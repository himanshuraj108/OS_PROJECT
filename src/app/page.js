import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
            CPU Scheduling & OS Innovations
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            An advanced visualization platform for understanding CPU scheduling algorithms 
            and exploring cutting-edge operating system innovations.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">CPU Scheduling Algorithms</h2>
            <p className="text-gray-300 mb-6">
              Explore and visualize different CPU scheduling algorithms with interactive simulations.
              Compare performance metrics and understand the pros and cons of each approach.
            </p>
            <Link href="/scheduling" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-full font-medium text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
              Explore Algorithms
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">OS Innovations</h2>
            <p className="text-gray-300 mb-6">
              Discover cutting-edge innovations in operating system design and implementation.
              Learn about modern approaches to process management, memory allocation, and more.
            </p>
            <Link href="/innovations" className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-3 rounded-full font-medium text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
              Discover Innovations
            </Link>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Round Robin Visualization",
                description: "Interactive visualization of the Round Robin scheduling algorithm with adjustable time quantum.",
                link: "/scheduling/round-robin"
              },
              {
                title: "Priority Scheduling",
                description: "Explore how priority-based scheduling affects task execution and system performance.",
                link: "/scheduling/priority"
              },
              {
                title: "Quantum Computing OS",
                description: "The future of operating systems in the age of quantum computing.",
                link: "/innovations/quantum"
              }
            ].map((item, i) => (
              <Link key={i} href={item.link} className="bg-white/10 rounded-lg p-6 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <footer className="text-center text-gray-400">
          <p>© {new Date().getFullYear()} CPU Scheduling & OS Innovations</p>
          <p className="text-sm mt-2">Built with Next.js, Tailwind CSS, and advanced visualization libraries</p>
        </footer>
      </div>
    </main>
  );
}
