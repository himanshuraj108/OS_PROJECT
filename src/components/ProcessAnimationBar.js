"use client";

import { useState, useEffect } from 'react';

export default function ProcessAnimationBar({ processes, algorithm, isActive }) {
  const [animation, setAnimation] = useState(null);
  
  useEffect(() => {
    if (!isActive) {
      setAnimation(null);
      return;
    }
    
    // Different animations based on algorithm type
    switch(algorithm) {
      case 'fcfs':
        setAnimation('first-come');
        break;
      case 'sjf':
        setAnimation('shortest-job');
        break;
      case 'srtf':
        setAnimation('shortest-remaining');
        break;
      case 'priority':
        setAnimation('priority');
        break;
      case 'round-robin':
        setAnimation('round-robin');
        break;
      default:
        setAnimation('first-come');
    }
  }, [algorithm, isActive]);

  if (!processes || processes.length === 0) {
    return (
      <div className="h-12 bg-slate-800/50 rounded-md flex items-center justify-center">
        <p className="text-gray-400 text-sm">No processes to visualize</p>
      </div>
    );
  }

  // Sort processes according to algorithm
  const sortedProcesses = [...processes].sort((a, b) => {
    if (algorithm === 'fcfs') {
      return a.arrivalTime - b.arrivalTime;
    } else if (algorithm === 'sjf') {
      return a.burstTime - b.burstTime;
    } else if (algorithm === 'srtf') {
      return a.remainingTime - b.remainingTime;
    } else if (algorithm === 'priority') {
      return a.priority - b.priority;
    }
    return a.id - b.id;
  });

  return (
    <div className="bg-slate-800/30 rounded-md p-3 overflow-hidden">
      <h3 className="text-sm font-semibold text-white mb-2">Process Visualization</h3>
      
      <div className="relative h-16">
        <div className="absolute inset-0 flex items-center justify-center">
          {animation === 'first-come' && (
            <div className="flex items-center space-x-3">
              {sortedProcesses.map((process, index) => (
                <div
                  key={process.id}
                  className="process-block"
                  style={{ 
                    backgroundColor: process.color,
                    animation: `moveRight 6s linear infinite ${index * 0.5}s`
                  }}
                >
                  <span>{process.name}</span>
                  <span className="text-xs">Arr: {process.arrivalTime}</span>
                </div>
              ))}
            </div>
          )}
          
          {animation === 'shortest-job' && (
            <div className="flex items-end space-x-3 h-full">
              {sortedProcesses.map((process) => (
                <div
                  key={process.id}
                  className="process-bar animate-pulse-shadow"
                  style={{ 
                    backgroundColor: process.color,
                    height: `${Math.max(20, Math.min(100, process.burstTime * 10))}%`,
                    width: '40px'
                  }}
                >
                  <span>{process.name}</span>
                  <span className="text-xs">{process.burstTime}</span>
                </div>
              ))}
            </div>
          )}
          
          {animation === 'shortest-remaining' && (
            <div className="flex items-end space-x-3 h-full">
              {sortedProcesses.map((process, index) => (
                <div
                  key={process.id}
                  className="process-bar"
                  style={{ 
                    backgroundColor: process.color,
                    height: `${Math.max(20, Math.min(100, process.remainingTime * 10))}%`,
                    width: '40px',
                    animation: `shrinkHeight 4s ease-in-out infinite ${index * 0.3}s`
                  }}
                >
                  <span>{process.name}</span>
                  <span className="text-xs">{process.remainingTime || process.burstTime}</span>
                </div>
              ))}
            </div>
          )}
          
          {animation === 'priority' && (
            <div className="flex items-center justify-center h-full w-full">
              <div className="relative">
                {sortedProcesses.map((process, index) => (
                  <div
                    key={process.id}
                    className="process-priority absolute"
                    style={{ 
                      backgroundColor: process.color,
                      zIndex: 10 - process.priority,
                      top: `${-20 + (index * 10)}px`,
                      left: `${-20 + (index * 10)}px`
                    }}
                  >
                    <span>{process.name}</span>
                    <div className="priority-badge">{process.priority}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {animation === 'round-robin' && (
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-32 h-32 border-4 border-dashed border-blue-500 rounded-full animate-spin-slow opacity-30"></div>
              {sortedProcesses.map((process, index) => {
                const angle = (index / sortedProcesses.length) * 2 * Math.PI;
                const x = Math.cos(angle) * 50;
                const y = Math.sin(angle) * 50;
                
                return (
                  <div
                    key={process.id}
                    className="process-quantum absolute flex items-center justify-center"
                    style={{ 
                      backgroundColor: process.color,
                      transform: `translate(${x}px, ${y}px)`,
                      animation: `pulse 2s ease-in-out infinite ${index * 0.5}s`
                    }}
                  >
                    <span>{process.name}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      
      <style jsx>{`
        .process-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          font-weight: bold;
          color: #0a0a0a;
          box-shadow: 0 0 15px rgba(255,255,255,0.2);
        }
        
        .process-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-bottom: 5px;
          border-radius: 6px;
          font-weight: bold;
          color: #0a0a0a;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        
        .process-priority {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          font-weight: bold;
          color: #0a0a0a;
          box-shadow: 0 0 15px rgba(255,255,255,0.2);
          position: relative;
        }
        
        .priority-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: #ef4444;
          color: white;
          font-size: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .process-quantum {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          font-weight: bold;
          color: #0a0a0a;
          box-shadow: 0 0 15px rgba(255,255,255,0.2);
        }
        
        @keyframes moveRight {
          0% { transform: translateX(-150px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(150px); opacity: 0; }
        }
        
        @keyframes shrinkHeight {
          0% { height: 100%; }
          50% { height: 40%; }
          100% { height: 100%; }
        }
        
        @keyframes pulse {
          0% { transform: scale(1) translate(${props => props.x}px, ${props => props.y}px); }
          50% { transform: scale(1.1) translate(${props => props.x}px, ${props => props.y}px); }
          100% { transform: scale(1) translate(${props => props.x}px, ${props => props.y}px); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
} 