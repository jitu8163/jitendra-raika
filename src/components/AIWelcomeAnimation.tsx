import { motion } from "framer-motion";

const AIWelcomeAnimation = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none opacity-40">
      <div className="relative w-96 h-96">
        {/* Outer Glow Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[hsl(270,80%,60%,0.2)]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Neural Network Pulse */}
        <svg viewBox="0 0 200 200" className="w-full h-full fill-none">
          {/* Main Neural Node */}
          <motion.path
            d="M100 20 C 130 20, 160 50, 160 100 S 130 180, 100 180 S 40 150, 40 100 S 70 20, 100 20"
            stroke="hsl(270, 80%, 60%)"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.circle
            cx="100"
            cy="100"
            initial={{ r: 40, opacity: 0.2 }}
            stroke="hsl(220, 90%, 55%)"
            strokeWidth="0.5"
            animate={{ 
              r: [38, 42, 38],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Glowing Neural Connections */}
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1="100"
              y1="100"
              x2={100 + Math.cos((i * Math.PI) / 4) * 70}
              y2={100 + Math.sin((i * Math.PI) / 4) * 70}
              stroke="hsl(180, 70%, 45%)"
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.3, 0],
                strokeWidth: [0.2, 1, 0.2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}

          {/* Moving Data Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.circle
              key={i}
              r="1.5"
              fill="hsl(var(--primary))"
              initial={{ 
                x: 100, 
                y: 100,
                opacity: 0 
              }}
              animate={{ 
                x: [100, 100 + Math.cos((i * Math.PI) / 6) * 90],
                y: [100, 100 + Math.sin((i * Math.PI) / 6) * 90],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.2, 0.5]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeOut"
              }}
            />
          ))}
        </svg>

        {/* Core Radiance */}
        <div className="absolute inset-1/3 rounded-full bg-gradient-to-br from-[hsl(270,80%,70%,0.2)] to-[hsl(180,70%,60%,0.2)] blur-3xl" />
      </div>
    </div>
  );
};

export default AIWelcomeAnimation;
