// import React from 'react';

// interface ParticleBackgroundProps {
//   position?: 'fixed' | 'absolute';
//   className?: string;
// }

// const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ 
//   position = 'absolute', 
//   className = '' 
// }) => {
//   const rootClass = `${position} inset-0 pointer-events-none -z-10 ${className}`.trim();

//   return (
//     <div className={rootClass}>
//       {/* Simple blurred color blobs like hamburger menu */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="blob blob-cyan" />
//         <div className="blob blob-green" />
//         <div className="blob blob-yellow" />
//       </div>

//       {/* Glassy overlay */}
//       <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

//       {/* Local styles for simple blobs */}
//       <style>{`
//         .blob {
//           position: absolute;
//           width: 45vmin;
//           height: 45vmin;
//           border-radius: 50%;
//           filter: blur(60px);
//           opacity: 0.4;
//         }
//         .blob-cyan {
//           background: radial-gradient(circle, rgba(0,200,255,0.6), transparent);
//           top: -10vmin;
//           left: -8vmin;
//         }
//         .blob-green {
//           background: radial-gradient(circle, rgba(115,255,143,0.5), transparent);
//           top: 25vh;
//           right: -5vmin;
//           width: 50vmin;
//           height: 50vmin;
//         }
//         .blob-yellow {
//           background: radial-gradient(circle, rgba(255,179,0,0.45), transparent);
//           bottom: -12vmin;
//           left: 15vw;
//           width: 48vmin;
//           height: 48vmin;
//         }
        
//         @media (max-width: 640px) {
//           .blob { 
//             width: 55vmin; 
//             height: 55vmin; 
//             filter: blur(50px); 
//             opacity: 0.35; 
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ParticleBackground;

