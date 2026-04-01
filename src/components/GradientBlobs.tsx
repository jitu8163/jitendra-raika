import { motion } from "framer-motion";

const blobs = [
  { color: "hsl(270 80% 60% / 0.06)", size: 500, x: "10%", y: "20%", duration: 25 },
  { color: "hsl(220 90% 55% / 0.05)", size: 400, x: "70%", y: "60%", duration: 30 },
  { color: "hsl(180 70% 45% / 0.04)", size: 450, x: "50%", y: "10%", duration: 28 },
];

const GradientBlobs = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {blobs.map((b, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: b.size,
          height: b.size,
          left: b.x,
          top: b.y,
          background: `radial-gradient(circle, ${b.color}, transparent 70%)`,
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, 40, -30, 20, 0],
          y: [0, -30, 20, -40, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: b.duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default GradientBlobs;
