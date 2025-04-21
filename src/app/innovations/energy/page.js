'use client';

import Link from 'next/link';

export default function EnergyEfficientSchedulingPage() {
  return (
    <main className="bg-gradient-to-br from-green-900 to-teal-800 min-h-screen text-white">
      <div className="max-w-5xl mx-auto p-6 md:p-10">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Energy-efficient Scheduling</h1>
          <p className="text-xl text-green-200">
            Optimizing CPU scheduling for power efficiency and sustainability
          </p>
        </header>

        <section className="mb-12 bg-black/30 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-green-300">The Green Computing Revolution</h2>
          <p className="mb-4">
            As computing has become ubiquitous, from data centers to mobile devices, energy consumption
            has evolved from a secondary concern to a critical constraint. Energy-efficient scheduling
            algorithms aim to minimize power consumption while maintaining acceptable performance levels.
          </p>
          <p>
            These specialized algorithms take into account power states of hardware components, thermal
            considerations, and workload characteristics to make intelligent decisions about when and
            where to schedule tasks for optimal energy efficiency.
          </p>
        </section>

        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-black/30 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-green-300">Key Strategies</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-semibold">Dynamic Voltage and Frequency Scaling (DVFS)</span>: Adjusting CPU speed based on workload demands</li>
              <li><span className="font-semibold">Race-to-idle</span>: Processing tasks at maximum speed, then entering low-power states</li>
              <li><span className="font-semibold">Task consolidation</span>: Grouping tasks to maximize idle periods for power-saving</li>
              <li><span className="font-semibold">Heterogeneous core allocation</span>: Matching tasks to appropriate CPU cores (big.LITTLE architecture)</li>
              <li><span className="font-semibold">Thermal-aware scheduling</span>: Distributing workload to manage heat generation</li>
            </ul>
          </div>
          <div className="bg-black/30 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-green-300">Benefits</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-semibold">Extended battery life</span>: Critical for mobile and IoT devices</li>
              <li><span className="font-semibold">Reduced operational costs</span>: Lower electricity usage in data centers</li>
              <li><span className="font-semibold">Decreased carbon footprint</span>: Supporting sustainability goals</li>
              <li><span className="font-semibold">Improved thermal management</span>: Less cooling required, fewer thermal throttling events</li>
              <li><span className="font-semibold">Hardware longevity</span>: Less stress on components from heat and power cycling</li>
            </ul>
          </div>
        </section>

        <section className="mb-12 bg-black/30 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-green-300">Implementation Examples</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-green-200">Android's Energy-Aware Scheduler (EAS)</h3>
              <p className="mb-2">
                Android&apos;s EAS integrates with the Linux kernel to make energy-aware task placement decisions
                across heterogeneous processor clusters (big.LITTLE architecture). By understanding the energy
                characteristics of different cores and the performance requirements of tasks, it can intelligently
                assign processes to the most efficient cores for the workload.
              </p>
              <p>
                This has resulted in up to 15% improved battery life on many devices while maintaining responsive
                performance for users.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-200">Intel&apos;s Speed Shift Technology</h3>
              <p>
                Modern Intel processors implement hardware-controlled P-states that allow the CPU to rapidly adjust
                its operating frequency based on workload demands. This technology, combined with OS-level scheduling
                decisions, allows for much finer-grained energy management than previous software-only approaches.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-200">Data Center Workload Consolidation</h3>
              <p>
                Cloud providers implement sophisticated workload consolidation algorithms that pack virtual machines
                onto physical servers in ways that maximize energy efficiency. This includes migrating VMs to enable
                entire servers to be powered down during low-demand periods while ensuring performance service level
                agreements are still met.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-black/30 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-green-300">Technical Challenges</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-green-200">Performance-Energy Tradeoffs</h3>
              <p>
                Energy efficiency often comes at the cost of performance. Schedulers must carefully balance
                power saving with maintaining acceptable responsiveness. This is particularly challenging for
                interactive applications where user experience is paramount.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-200">Workload Prediction</h3>
              <p>
                Optimal energy-efficient scheduling requires predicting future workload characteristics.
                Incorrect predictions can lead to either wasted energy (from being too aggressive in
                performance provisioning) or poor user experience (from insufficient performance allocation).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-200">Hardware Complexity</h3>
              <p>
                Modern hardware has complex power-saving features and non-linear energy consumption patterns.
                Schedulers need detailed models of hardware behavior to make optimal decisions, which can be
                difficult to maintain across diverse systems.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-black/30 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-green-300">Advanced Techniques</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-green-200">Machine Learning for Energy Prediction</h3>
              <p>
                Advanced schedulers use machine learning models to predict the energy impact of scheduling
                decisions. By training on real-world workloads, these models can capture complex relationships
                between task characteristics, hardware states, and energy consumption.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-200">Application-Aware Power Management</h3>
              <p>
                Rather than treating all applications equally, modern schedulers take into account
                application-specific requirements. For example, background tasks might be scheduled with
                maximum energy efficiency in mind, while foreground, interactive applications prioritize
                responsiveness over energy savings.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-200">Hardware-Software Co-design</h3>
              <p>
                The most effective energy-efficient systems are designed with hardware and software working
                in tandem. Purpose-built hardware acceleration for common tasks (like video decoding or AI
                inferencing) paired with schedulers that understand when to use these specialized components
                can achieve both performance and efficiency goals.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-black/30 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-green-300">Future Directions</h2>
          <p className="mb-4">
            The future of energy-efficient scheduling will likely see increased integration with renewable
            energy sources, with schedulers that understand and adapt to variable power availability.
            Quantum computing may eventually offer new approaches to solving the complex optimization
            problems involved in energy-efficient scheduling.
          </p>
          <p className="mb-4">
            As devices continue to become more heterogeneous, with specialized accelerators and varying
            processor types, schedulers will need to become increasingly sophisticated in understanding
            the energy characteristics of different hardware components and making optimal task placement
            decisions.
          </p>
          <div className="mt-8 text-center">
            <Link 
              href="/scheduling" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
            >
              Explore CPU Scheduling
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
} 