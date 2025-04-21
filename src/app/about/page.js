export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">About CPU Scheduler</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            An educational platform for understanding and visualizing CPU scheduling algorithms and operating system innovations.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                CPU Scheduler is a comprehensive educational tool designed to help students, professionals, and enthusiasts
                understand the complexities of CPU scheduling algorithms and operating system resource management.
              </p>
              <p>
                Through interactive visualizations and simulations, users can explore different scheduling algorithms,
                compare their performance metrics, and gain insights into how modern operating systems manage processes.
              </p>
              <p>
                The platform also showcases cutting-edge innovations in operating system design, highlighting
                the latest research and developments in the field of process scheduling and resource allocation.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
            <ul className="text-gray-300 space-y-3">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Interactive visualizations of CPU scheduling algorithms</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Real-time metrics and performance analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Side-by-side algorithm comparison</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Customizable process parameters</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Educational resources on OS concepts</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Showcase of modern OS innovations</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Educational Value</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Understanding CPU scheduling is fundamental to computer science education and 
                crucial for developing efficient software systems. This platform serves as:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>A hands-on learning tool for students in operating systems courses</li>
                <li>A reference for software engineers optimizing application performance</li>
                <li>A visualization aid for teachers and professors</li>
                <li>A playground for experimenting with scheduling scenarios</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Technologies Used</h2>
            <div className="text-gray-300">
              <p className="mb-4">This application is built using modern web technologies:</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-2">Frontend</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Next.js (React framework)</li>
                    <li>Tailwind CSS</li>
                    <li>Custom CSS animations</li>
                    <li>Responsive design</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-purple-400 mb-2">Core Features</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Real-time simulation</li>
                    <li>Dynamic visualizations</li>
                    <li>Performance metrics</li>
                    <li>Algorithm implementations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">About the Developer</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              This project was developed as an educational tool for demonstrating CPU scheduling concepts
              and operating system innovations. It aims to bridge the gap between theoretical knowledge and
              practical understanding by providing interactive visualizations of complex scheduling algorithms.
            </p>
            <p>
              If you have any questions, suggestions, or feedback about this application, please feel free to
              reach out. The project is continuously being improved with new features and optimizations.
            </p>
            <div className="pt-4">
              <p className="text-white font-semibold">© {new Date().getFullYear()} CPU Scheduler</p>
              <p className="text-sm">Built with Next.js, Tailwind CSS, and a passion for operating systems</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 