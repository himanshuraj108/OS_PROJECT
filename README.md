# CPU Scheduling & OS Innovations

A production-ready web application for visualizing and exploring CPU scheduling algorithms and operating system innovations. Built with Next.js and Tailwind CSS.

## Features

- Interactive visualization of CPU scheduling algorithms:
  - First Come, First Served (FCFS)
  - Shortest Job First (SJF)
  - Shortest Remaining Time First (SRTF)
  - Priority Scheduling
  - Round Robin
- Real-time performance metrics calculation
- Side-by-side algorithm comparison
- Customizable process parameters
- Educational resources on OS concepts
- Showcase of modern OS innovations

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/cpu-scheduling.git
cd cpu-scheduling
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Technologies Used

- **Frontend:**
  - Next.js (React framework)
  - Tailwind CSS for styling
  - React Hooks for state management

## Project Structure

- `/src/app` - Next.js app directory containing pages
- `/src/components` - Reusable React components
- `/src/app/scheduling` - CPU scheduling algorithm visualizations
- `/src/app/innovations` - OS innovations showcase
- `/src/app/comparison` - Side-by-side algorithm comparison

## CPU Scheduling Algorithms

The application visualizes the following CPU scheduling algorithms:

### First Come, First Served (FCFS)

A non-preemptive scheduling algorithm that executes processes in the order they arrive in the ready queue.

### Shortest Job First (SJF)

A non-preemptive scheduling algorithm that selects the process with the smallest execution time.

### Shortest Remaining Time First (SRTF)

A preemptive version of SJF that selects the process with the smallest remaining execution time.

### Priority Scheduling

A scheduling algorithm that selects the process with the highest priority (lowest priority number).

### Round Robin

A preemptive scheduling algorithm that assigns a fixed time quantum to each process in a cyclic queue.

## Performance Metrics

The application calculates and displays the following performance metrics:

- **Waiting Time:** The total time a process spends waiting in the ready queue
- **Turnaround Time:** The total time taken from submission of a process to its completion
- **Response Time:** The time from submission of a process until the first response is produced
- **Throughput:** The number of processes completed per unit time

## Educational Value

This application serves as:

- A hands-on learning tool for students in operating systems courses
- A reference for software engineers optimizing application performance
- A visualization aid for teachers and professors
- A playground for experimenting with scheduling scenarios

## License

This project is open source and available under the [MIT License](LICENSE).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
