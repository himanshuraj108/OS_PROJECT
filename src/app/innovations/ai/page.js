'use client';

import Link from 'next/link';

export default function AIResourceAllocationPage() {
  return (
    <main className="bg-gradient-to-br from-purple-900 to-indigo-800 min-h-screen text-white">
      <div className="max-w-5xl mx-auto p-6 md:p-10">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI-driven Resource Allocation</h1>
          <p className="text-xl text-purple-200">
            Next-generation scheduling powered by machine learning and artificial intelligence
          </p>
        </header>

        <section className="mb-12 bg-black/30 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-purple-300">The Machine Learning Revolution in CPU Scheduling</h2>
          <p className="mb-4">
            Traditional CPU scheduling algorithms rely on fixed rules and heuristics, but modern workloads have become
            increasingly complex and unpredictable. AI-driven resource allocation leverages machine learning to analyze
            patterns, predict resource needs, and dynamically optimize system performance.
          </p>
          <p>
            By continuously learning from workload characteristics and system behavior, AI schedulers can make more
            intelligent decisions than their conventional counterparts, leading to improved efficiency, responsiveness,
            and resource utilization.
          </p>
        </section>

        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-black/30 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Key Techniques</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-semibold">Reinforcement Learning</span>: Schedulers learn optimal policies through trial and error</li>
              <li><span className="font-semibold">Neural Networks</span>: Deep learning models predict workload characteristics</li>
              <li><span className="font-semibold">Bayesian Optimization</span>: Probabilistic modeling for parameter tuning</li>
              <li><span className="font-semibold">Transfer Learning</span>: Apply knowledge from past workloads to new scenarios</li>
              <li><span className="font-semibold">Online Learning</span>: Continuously adapt to changing conditions</li>
            </ul>
          </div>
          <div className="bg-black/30 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Benefits</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-semibold">Adaptive Performance</span>: Automatically adjusts to varying workloads</li>
              <li><span className="font-semibold">Predictive Resource Allocation</span>: Anticipates needs before they arise</li>
              <li><span className="font-semibold">Anomaly Detection</span>: Identifies and mitigates unusual system behavior</li>
              <li><span className="font-semibold">Workload Characterization</span>: Classifies tasks for optimal handling</li>
              <li><span className="font-semibold">Cross-layer Optimization</span>: Coordinates scheduling across system layers</li>
            </ul>
          </div>
        </section>

        <section className="mb-12 bg-black/30 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-purple-300">Real-world Implementation Examples</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-purple-200">Google&apos;s Borg System</h3>
              <p>
                Google uses machine learning to predict resource requirements for services running on its Borg cluster
                management system, allowing for more efficient packing of workloads and better resource utilization.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-200">Microsoft&apos;s AutoPilot</h3>
              <p>
                Microsoft employs reinforcement learning for resource management in data centers, optimizing for
                throughput, latency, and energy efficiency simultaneously.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-200">DeepMind&apos;s AI for Datacenter Cooling</h3>
              <p>
                While focused on cooling rather than CPU scheduling, this demonstrates how AI can optimize resource
                allocation, reducing energy consumption by 40% in Google&apos;s data centers.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-black/30 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-purple-300">Challenges and Considerations</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-purple-200">Training Data Requirements</h3>
              <p>
                AI schedulers need significant amounts of high-quality data to train effectively. Collecting representative
                workload data across diverse operating conditions remains challenging.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-200">Explainability</h3>
              <p>
                Many advanced ML models operate as &quot;black boxes,&quot; making it difficult to understand why certain scheduling
                decisions were made, which can be problematic for debugging and system reliability.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-200">Computational Overhead</h3>
              <p>
                The ML algorithms themselves consume resources, creating a trade-off between the benefits of intelligent
                scheduling and the cost of running the ML models.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-black/30 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-purple-300">Future Directions</h2>
          <p className="mb-4">
            The future of AI-driven resource allocation is likely to include more sophisticated hybrid approaches that
            combine the predictability of traditional algorithms with the adaptability of AI models. Federated learning
            may enable sharing scheduling insights across systems while preserving privacy.
          </p>
          <p className="mb-4">
            Quantum computing may eventually provide new algorithms for resource allocation problems that are currently
            computationally intractable, while neuromorphic computing could enable more efficient implementation of
            AI scheduling algorithms.
          </p>
          <div className="mt-8 text-center">
            <Link 
              href="/scheduling" 
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
            >
              Explore CPU Scheduling
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
} 