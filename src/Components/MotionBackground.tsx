// import { motion } from 'framer-motion'

// const MotionBackground = () => {
//   return (
//     <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
//       {/* Main animated neon orbs */}
//       <motion.div
//         className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#00C8FF]/20 blur-3xl"
//         animate={{
//           x: [0, 100, 0],
//           y: [0, -50, 0],
//           scale: [1, 1.2, 1],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//       />
      
//       <motion.div
//         className="absolute top-1/2 left-1/2 w-96 h-64 rounded-full bg-[#73FF8F]/15 blur-3xl"
//         style={{ transform: 'translate(-50%, -50%)' }}
//         animate={{
//           x: [-50, 50, -50],
//           y: [-25, 25, -25],
//           scale: [1, 1.3, 1],
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 2
//         }}
//       />
      
//       <motion.div
//         className="absolute bottom-0 right-0 w-72 h-56 rounded-full bg-[#FFB300]/15 blur-3xl"
//         animate={{
//           x: [0, -80, 0],
//           y: [0, -40, 0],
//           scale: [1, 1.1, 1],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 4
//         }}
//       />

//       {/* Secondary smaller orbs for more texture */}
//       <motion.div
//         className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-[#00C8FF]/15 blur-2xl"
//         animate={{
//           x: [0, 60, 0],
//           y: [0, -30, 0],
//           scale: [1, 1.4, 1],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 1
//         }}
//       />
      
//       <motion.div
//         className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full bg-[#73FF8F]/10 blur-2xl"
//         animate={{
//           x: [0, -40, 0],
//           y: [0, 50, 0],
//           scale: [1, 1.2, 1],
//         }}
//         transition={{
//           duration: 7,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 3
//         }}
//       />
      
//       <motion.div
//         className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full bg-[#FFB300]/25 blur-2xl"
//         animate={{
//           x: [0, 30, 0],
//           y: [0, -20, 0],
//           scale: [1, 1.3, 1],
//         }}
//         transition={{
//           duration: 9,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 5
//         }}
//       />

//       {/* Floating particles for extra texture */}
//       <motion.div
//         className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-[#00C8FF]/40 blur-sm"
//         animate={{
//           x: [0, 200, 0],
//           y: [0, -100, 0],
//           opacity: [0.4, 0.8, 0.4],
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: "linear"
//         }}
//       />
      
//       <motion.div
//         className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-[#73FF8F]/50 blur-sm"
//         animate={{
//           x: [0, -150, 0],
//           y: [0, 120, 0],
//           opacity: [0.3, 0.7, 0.3],
//         }}
//         transition={{
//           duration: 18,
//           repeat: Infinity,
//           ease: "linear",
//           delay: 3
//         }}
//       />
      
//       <motion.div
//         className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-[#FFB300]/60 blur-sm"
//         animate={{
//           x: [0, 100, 0],
//           y: [0, -80, 0],
//           opacity: [0.5, 0.9, 0.5],
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "linear",
//           delay: 6
//         }}
//       />

//       {/* Gradient overlay for depth */}
//       <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-transparent" />
//     </div>
//   )
// }

// export default MotionBackground
