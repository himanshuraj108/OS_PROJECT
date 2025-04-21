"use client";

import { useState, useEffect, useRef } from 'react';
import ProcessAnimationBar from './ProcessAnimationBar';

const generateRandomProcesses = (count) => {
  // Color palette for processes
  const colors = [
    'hsl(210, 100%, 70%)',
    'hsl(150, 80%, 60%)', 
    'hsl(340, 80%, 65%)',
    'hsl(40, 100%, 65%)',
    'hsl(270, 70%, 65%)',
    'hsl(180, 80%, 55%)',
    'hsl(20, 90%, 60%)',
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `P${i + 1}`,
    arrivalTime: Math.floor(Math.random() * 10),
    burstTime: Math.floor(Math.random() * 10) + 1,
    priority: Math.floor(Math.random() * 5) + 1,
    color: colors[i % colors.length],
    remainingTime: null, // Will be set based on burst time
    waitingTime: 0,
    turnaroundTime: 0,
    completionTime: 0,
    responseTime: -1
  }));
};

export default function SchedulingVisualizer({ algorithm = 'fcfs' }) {
  const [processes, setProcesses] = useState([]);
  const [timeQuantum, setTimeQuantum] = useState(2);
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [ganttChart, setGanttChart] = useState([]);
  const [stats, setStats] = useState(null);
  const [speed, setSpeed] = useState(1000); // ms per time unit
  const simulationRef = useRef(null);
  const [activeProcess, setActiveProcess] = useState(null);
  const ganttChartRef = useRef(null);

  useEffect(() => {
    // Initialize with 5 random processes
    resetSimulation(5);
  }, [algorithm]);

  const resetSimulation = (count = 5) => {
    setIsSimulating(false);
    setCurrentTime(0);
    setGanttChart([]);
    setStats(null);
    
    if (simulationRef.current) {
      clearInterval(simulationRef.current);
      simulationRef.current = null;
    }
    
    const newProcesses = generateRandomProcesses(count);
    newProcesses.forEach(p => {
      p.remainingTime = p.burstTime;
    });
    
    setProcesses(newProcesses);
  };

  const addProcess = () => {
    const newId = processes.length > 0 ? Math.max(...processes.map(p => p.id)) + 1 : 1;
    const newProcess = {
      id: newId,
      name: `P${newId}`,
      arrivalTime: 0,
      burstTime: 5,
      priority: 3,
      color: `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`,
      remainingTime: 5,
      waitingTime: 0,
      turnaroundTime: 0,
      completionTime: 0,
      responseTime: -1
    };
    setProcesses([...processes, newProcess]);
  };

  const updateProcess = (id, field, value) => {
    const numValue = parseInt(value, 10);
    if (isNaN(numValue)) return;

    setProcesses(processes.map(process => {
      if (process.id === id) {
        const newProcess = { ...process, [field]: numValue };
        if (field === 'burstTime') {
          newProcess.remainingTime = numValue;
        }
        return newProcess;
      }
      return process;
    }));
  };

  const removeProcess = (id) => {
    setProcesses(processes.filter(process => process.id !== id));
  };

  const startSimulation = () => {
    if (isSimulating) return;
    
    setIsSimulating(true);
    const processesCopy = JSON.parse(JSON.stringify(processes));
    processesCopy.forEach(p => {
      p.waitingTime = 0;
      p.turnaroundTime = 0;
      p.completionTime = 0;
      p.responseTime = -1;
      p.remainingTime = p.burstTime;
    });
    
    setProcesses(processesCopy);
    setCurrentTime(0);
    setGanttChart([]);
    setActiveProcess(null);
    
    let time = 0;
    let remainingProcesses = [...processesCopy];
    
    // Sort by arrival time initially
    remainingProcesses.sort((a, b) => a.arrivalTime - b.arrivalTime);
    
    // For Round Robin
    let queue = [];
    let currentProcessIndex = -1;
    let timeInQuantum = 0;
    
    simulationRef.current = setInterval(() => {
      // Auto-scroll the Gantt chart to keep current time visible
      if (ganttChartRef.current && time > 5) {
        const scrollAmount = (time - 5) * 48; // 48px is the width of each time unit
        ganttChartRef.current.scrollLeft = scrollAmount;
      }
    
      // Check if simulation is complete
      if (remainingProcesses.every(p => p.remainingTime === 0)) {
        clearInterval(simulationRef.current);
        simulationRef.current = null;
        setIsSimulating(false);
        setActiveProcess(null);
        
        // Calculate stats
        const avgWaitingTime = processesCopy.reduce((sum, p) => sum + p.waitingTime, 0) / processesCopy.length;
        const avgTurnaroundTime = processesCopy.reduce((sum, p) => sum + p.turnaroundTime, 0) / processesCopy.length;
        const avgResponseTime = processesCopy.reduce((sum, p) => sum + p.responseTime, 0) / processesCopy.length;
        
        setStats({
          avgWaitingTime: avgWaitingTime.toFixed(2),
          avgTurnaroundTime: avgTurnaroundTime.toFixed(2),
          avgResponseTime: avgResponseTime.toFixed(2),
          throughput: (processesCopy.length / time).toFixed(2)
        });
        
        return;
      }
      
      // Add newly arrived processes to ready queue
      const newArrivals = remainingProcesses.filter(p => p.arrivalTime === time && p.remainingTime > 0);
      
      if (algorithm === 'fcfs') {
        // First Come, First Served
        let activeProcess = null;
        
        if (currentProcessIndex === -1) {
          // Find the first process that has arrived and still has remaining time
          const readyProcess = remainingProcesses.find(p => p.arrivalTime <= time && p.remainingTime > 0);
          
          if (readyProcess) {
            currentProcessIndex = remainingProcesses.indexOf(readyProcess);
            activeProcess = readyProcess;
            
            // Update response time if first time being processed
            if (activeProcess.responseTime === -1) {
              activeProcess.responseTime = time - activeProcess.arrivalTime;
            }
            
            // Set the active process for highlighting
            setActiveProcess(activeProcess.id);
          }
        } else {
          activeProcess = remainingProcesses[currentProcessIndex];
        }
        
        if (activeProcess) {
          // Process the current process
          activeProcess.remainingTime--;
          
          // Add to Gantt chart
          setGanttChart(prev => [
            ...prev, 
            { time, processId: activeProcess.id, processName: activeProcess.name, color: activeProcess.color }
          ]);
          
          // Check if process is complete
          if (activeProcess.remainingTime === 0) {
            activeProcess.completionTime = time + 1;
            activeProcess.turnaroundTime = activeProcess.completionTime - activeProcess.arrivalTime;
            activeProcess.waitingTime = activeProcess.turnaroundTime - activeProcess.burstTime;
            
            // Find next process
            currentProcessIndex = -1;
            setActiveProcess(null);
          }
        } else {
          // CPU idle
          setActiveProcess(null);
          setGanttChart(prev => [...prev, { time, processId: null, processName: 'Idle', color: '#cccccc' }]);
        }
      } else if (algorithm === 'sjf') {
        // Shortest Job First (non-preemptive)
        let activeProcess = null;
        
        if (currentProcessIndex === -1) {
          // Find the process with shortest burst time among arrived processes
          const readyProcesses = remainingProcesses.filter(p => p.arrivalTime <= time && p.remainingTime > 0);
          
          if (readyProcesses.length > 0) {
            const shortestJob = readyProcesses.reduce((min, p) => 
              p.remainingTime < min.remainingTime ? p : min, readyProcesses[0]);
            
            currentProcessIndex = remainingProcesses.indexOf(shortestJob);
            activeProcess = shortestJob;
            
            // Update response time if first time being processed
            if (activeProcess.responseTime === -1) {
              activeProcess.responseTime = time - activeProcess.arrivalTime;
            }
            
            // Set the active process for highlighting
            setActiveProcess(activeProcess.id);
          }
        } else {
          activeProcess = remainingProcesses[currentProcessIndex];
        }
        
        if (activeProcess) {
          // Process the current process
          activeProcess.remainingTime--;
          
          // Add to Gantt chart
          setGanttChart(prev => [
            ...prev, 
            { time, processId: activeProcess.id, processName: activeProcess.name, color: activeProcess.color }
          ]);
          
          // Check if process is complete
          if (activeProcess.remainingTime === 0) {
            activeProcess.completionTime = time + 1;
            activeProcess.turnaroundTime = activeProcess.completionTime - activeProcess.arrivalTime;
            activeProcess.waitingTime = activeProcess.turnaroundTime - activeProcess.burstTime;
            
            // Find next process
            currentProcessIndex = -1;
            setActiveProcess(null);
          }
        } else {
          // CPU idle
          setActiveProcess(null);
          setGanttChart(prev => [...prev, { time, processId: null, processName: 'Idle', color: '#cccccc' }]);
        }
      } else if (algorithm === 'srtf') {
        // Shortest Remaining Time First (preemptive)
        // Find process with shortest remaining time
        const readyProcesses = remainingProcesses.filter(p => p.arrivalTime <= time && p.remainingTime > 0);
        
        if (readyProcesses.length > 0) {
          const shortestProcess = readyProcesses.reduce((min, p) => 
            p.remainingTime < min.remainingTime ? p : min, readyProcesses[0]);
          
          // Update response time if first time being processed
          if (shortestProcess.responseTime === -1) {
            shortestProcess.responseTime = time - shortestProcess.arrivalTime;
          }
          
          // Set the active process for highlighting
          setActiveProcess(shortestProcess.id);
          
          // Process it
          shortestProcess.remainingTime--;
          
          // Add to Gantt chart
          setGanttChart(prev => [
            ...prev, 
            { time, processId: shortestProcess.id, processName: shortestProcess.name, color: shortestProcess.color }
          ]);
          
          // Check if process is complete
          if (shortestProcess.remainingTime === 0) {
            shortestProcess.completionTime = time + 1;
            shortestProcess.turnaroundTime = shortestProcess.completionTime - shortestProcess.arrivalTime;
            shortestProcess.waitingTime = shortestProcess.turnaroundTime - shortestProcess.burstTime;
            
            if (remainingProcesses.every(p => p.remainingTime === 0 || p.arrivalTime > time)) {
              setActiveProcess(null);
            }
          }
        } else {
          // CPU idle
          setActiveProcess(null);
          setGanttChart(prev => [...prev, { time, processId: null, processName: 'Idle', color: '#cccccc' }]);
        }
      } else if (algorithm === 'priority') {
        // Priority Scheduling (non-preemptive)
        let activeProcess = null;
        
        if (currentProcessIndex === -1) {
          // Find the process with highest priority (lower number = higher priority)
          const readyProcesses = remainingProcesses.filter(p => p.arrivalTime <= time && p.remainingTime > 0);
          
          if (readyProcesses.length > 0) {
            const highestPriorityProcess = readyProcesses.reduce((min, p) => 
              p.priority < min.priority ? p : min, readyProcesses[0]);
            
            currentProcessIndex = remainingProcesses.indexOf(highestPriorityProcess);
            activeProcess = highestPriorityProcess;
            
            // Update response time if first time being processed
            if (activeProcess.responseTime === -1) {
              activeProcess.responseTime = time - activeProcess.arrivalTime;
            }
            
            // Set the active process for highlighting
            setActiveProcess(activeProcess.id);
          }
        } else {
          activeProcess = remainingProcesses[currentProcessIndex];
        }
        
        if (activeProcess) {
          // Process the current process
          activeProcess.remainingTime--;
          
          // Add to Gantt chart
          setGanttChart(prev => [
            ...prev, 
            { time, processId: activeProcess.id, processName: activeProcess.name, color: activeProcess.color }
          ]);
          
          // Check if process is complete
          if (activeProcess.remainingTime === 0) {
            activeProcess.completionTime = time + 1;
            activeProcess.turnaroundTime = activeProcess.completionTime - activeProcess.arrivalTime;
            activeProcess.waitingTime = activeProcess.turnaroundTime - activeProcess.burstTime;
            
            // Find next process
            currentProcessIndex = -1;
            setActiveProcess(null);
          }
        } else {
          // CPU idle
          setActiveProcess(null);
          setGanttChart(prev => [...prev, { time, processId: null, processName: 'Idle', color: '#cccccc' }]);
        }
      } else if (algorithm === 'round-robin') {
        // Round Robin
        // Add new arrivals to queue
        queue.push(...newArrivals);
        
        let activeProcess = null;
        
        if (currentProcessIndex === -1 && queue.length > 0) {
          // Get next process from queue
          activeProcess = queue.shift();
          currentProcessIndex = remainingProcesses.indexOf(activeProcess);
          timeInQuantum = 0;
          
          // Update response time if first time being processed
          if (activeProcess.responseTime === -1) {
            activeProcess.responseTime = time - activeProcess.arrivalTime;
          }
          
          // Set the active process for highlighting
          setActiveProcess(activeProcess.id);
        } else if (currentProcessIndex !== -1) {
          activeProcess = remainingProcesses[currentProcessIndex];
          timeInQuantum++;
          
          // Check if time quantum is complete
          if (timeInQuantum >= timeQuantum && activeProcess.remainingTime > 0) {
            // Process goes back to queue
            queue.push(activeProcess);
            currentProcessIndex = -1;
            
            // If there are other processes in queue, get the next one
            if (queue.length > 0) {
              activeProcess = queue.shift();
              currentProcessIndex = remainingProcesses.indexOf(activeProcess);
              timeInQuantum = 0;
              
              // Update response time if first time being processed
              if (activeProcess.responseTime === -1) {
                activeProcess.responseTime = time - activeProcess.arrivalTime;
              }
              
              // Set the active process for highlighting
              setActiveProcess(activeProcess.id);
            } else {
              activeProcess = null;
              setActiveProcess(null);
            }
          }
        }
        
        if (activeProcess) {
          // Process the current process
          activeProcess.remainingTime--;
          
          // Add to Gantt chart
          setGanttChart(prev => [
            ...prev, 
            { time, processId: activeProcess.id, processName: activeProcess.name, color: activeProcess.color }
          ]);
          
          // Check if process is complete
          if (activeProcess.remainingTime === 0) {
            activeProcess.completionTime = time + 1;
            activeProcess.turnaroundTime = activeProcess.completionTime - activeProcess.arrivalTime;
            activeProcess.waitingTime = activeProcess.turnaroundTime - activeProcess.burstTime;
            
            // Find next process
            currentProcessIndex = -1;
            setActiveProcess(null);
          }
        } else {
          // CPU idle
          setActiveProcess(null);
          setGanttChart(prev => [...prev, { time, processId: null, processName: 'Idle', color: '#cccccc' }]);
        }
      }
      
      // Update process list with new values
      setProcesses([...remainingProcesses]);
      
      // Increment time
      time++;
      setCurrentTime(time);
    }, speed);
  };

  const stopSimulation = () => {
    if (simulationRef.current) {
      clearInterval(simulationRef.current);
      simulationRef.current = null;
    }
    setIsSimulating(false);
  };

  const algorithmOptions = [
    { id: 'fcfs', name: 'First Come, First Served (FCFS)' },
    { id: 'sjf', name: 'Shortest Job First (SJF)' },
    { id: 'srtf', name: 'Shortest Remaining Time First (SRTF)' },
    { id: 'priority', name: 'Priority Scheduling' },
    { id: 'round-robin', name: 'Round Robin' }
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h2 className="text-xl font-bold text-white mb-2">CPU Scheduling Simulator</h2>
          <p className="text-gray-300 text-sm mb-4">
            Visualize and compare different CPU scheduling algorithms
          </p>
          
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Algorithm
            </label>
            <select 
              className="w-full bg-slate-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={algorithm}
              onChange={(e) => window.location.href = `/scheduling?algorithm=${e.target.value}`}
              disabled={isSimulating}
            >
              {algorithmOptions.map(option => (
                <option key={option.id} value={option.id}>{option.name}</option>
              ))}
            </select>
          </div>
          
          {algorithm === 'round-robin' && (
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Time Quantum
              </label>
              <input 
                type="number" 
                className="w-full bg-slate-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={timeQuantum}
                onChange={(e) => setTimeQuantum(parseInt(e.target.value, 10) || 1)}
                min="1"
                disabled={isSimulating}
              />
            </div>
          )}
          
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Simulation Speed (ms)
            </label>
            <input 
              type="range" 
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              min="100"
              max="2000"
              step="100"
              value={speed}
              onChange={(e) => setSpeed(parseInt(e.target.value, 10))}
              disabled={isSimulating}
            />
            <div className="text-gray-400 text-xs mt-1">{speed}ms per time unit</div>
          </div>
          
          <div className="flex space-x-2">
            {!isSimulating ? (
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center"
                onClick={startSimulation}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Start Simulation
              </button>
            ) : (
              <button 
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center"
                onClick={stopSimulation}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                </svg>
                Stop Simulation
              </button>
            )}
            <button 
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center"
              onClick={() => resetSimulation()}
              disabled={isSimulating}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              Reset
            </button>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold text-white mb-2">Time: <span className="text-blue-400 font-bold">{currentTime}</span></h3>
          
          {/* Process Animation */}
          <div className="mb-4">
            <ProcessAnimationBar 
              processes={processes} 
              algorithm={algorithm}
              isActive={isSimulating} 
            />
          </div>
          
          {/* Stats Display */}
          {stats && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-700 p-3 rounded transform hover:scale-105 transition-transform">
                <div className="text-sm text-gray-400">Avg. Waiting Time</div>
                <div className="text-xl font-bold text-cyan-400">{stats.avgWaitingTime}</div>
              </div>
              <div className="bg-slate-700 p-3 rounded transform hover:scale-105 transition-transform">
                <div className="text-sm text-gray-400">Avg. Turnaround Time</div>
                <div className="text-xl font-bold text-purple-400">{stats.avgTurnaroundTime}</div>
              </div>
              <div className="bg-slate-700 p-3 rounded transform hover:scale-105 transition-transform">
                <div className="text-sm text-gray-400">Avg. Response Time</div>
                <div className="text-xl font-bold text-green-400">{stats.avgResponseTime}</div>
              </div>
              <div className="bg-slate-700 p-3 rounded transform hover:scale-105 transition-transform">
                <div className="text-sm text-gray-400">Throughput</div>
                <div className="text-xl font-bold text-yellow-400">{stats.throughput} proc/unit</div>
              </div>
            </div>
          )}
          
          {/* Gantt Chart */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white mb-2">Gantt Chart</h3>
            <div className="overflow-x-auto" ref={ganttChartRef}>
              <div className="flex min-w-max bg-slate-900 p-4 rounded-lg">
                {ganttChart.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className={`h-12 w-12 flex items-center justify-center border-r border-slate-600 transition-all duration-300 ${
                        currentTime === item.time + 1 ? 'scale-110 shadow-lg z-10' : ''
                      }`}
                      style={{ 
                        backgroundColor: item.color,
                        animation: currentTime === item.time + 1 ? 'process-running 1s infinite' : 'none',
                        boxShadow: currentTime === item.time + 1 ? '0 0 10px rgba(255,255,255,0.3)' : 'none'
                      }}
                    >
                      <span className="font-bold text-slate-900">
                        {item.processName !== 'Idle' ? item.processName : ''}
                      </span>
                      {item.processName === 'Idle' && (
                        <span className="text-xs text-slate-600">Idle</span>
                      )}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{item.time}</div>
                  </div>
                ))}
                {ganttChart.length > 0 && (
                  <div className="text-xs text-gray-400 mt-14">{currentTime}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Process Table */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-white">Processes</h3>
          <button 
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200"
            onClick={addProcess}
            disabled={isSimulating}
          >
            Add Process
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-slate-700">
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Process
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Arrival Time
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Burst Time
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Remaining
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Waiting Time
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Turnaround Time
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {processes.map((process) => (
                <tr 
                  key={process.id} 
                  className={`border-b border-slate-600 hover:bg-slate-700/50 transition-colors ${
                    activeProcess === process.id ? 'bg-slate-700/70' : ''
                  }`}
                >
                  <td className="px-4 py-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div 
                        className={`w-4 h-4 mr-2 rounded-full ${
                          activeProcess === process.id ? 'animate-pulse' : ''
                        }`}
                        style={{ backgroundColor: process.color }}
                      ></div>
                      <span className="text-white">{process.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {isSimulating ? (
                      <span className="text-white">{process.arrivalTime}</span>
                    ) : (
                      <input 
                        type="number" 
                        className="w-16 bg-slate-700 text-white rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={process.arrivalTime}
                        onChange={(e) => updateProcess(process.id, 'arrivalTime', e.target.value)}
                        min="0"
                      />
                    )}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {isSimulating ? (
                      <span className="text-white">{process.burstTime}</span>
                    ) : (
                      <input 
                        type="number" 
                        className="w-16 bg-slate-700 text-white rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={process.burstTime}
                        onChange={(e) => updateProcess(process.id, 'burstTime', e.target.value)}
                        min="1"
                      />
                    )}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {isSimulating ? (
                      <span className="text-white">{process.priority}</span>
                    ) : (
                      <input 
                        type="number" 
                        className="w-16 bg-slate-700 text-white rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={process.priority}
                        onChange={(e) => updateProcess(process.id, 'priority', e.target.value)}
                        min="1"
                      />
                    )}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className={`${process.remainingTime === 0 ? 'text-green-400' : 'text-white'}`}>
                      {process.remainingTime}
                    </span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-white">
                    {process.remainingTime === 0 ? process.waitingTime : '-'}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-white">
                    {process.remainingTime === 0 ? process.turnaroundTime : '-'}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {!isSimulating && (
                      <button 
                        className="text-red-400 hover:text-red-300 transition-colors"
                        onClick={() => removeProcess(process.id)}
                      >
                        Remove
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes process-running {
          0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
      `}</style>
    </div>
  );
} 