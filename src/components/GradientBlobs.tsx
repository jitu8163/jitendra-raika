import { motion } from "framer-motion";

const blobs = [
  { color: "hsl(270 80% 60% / 0.15)", size: 500, x: "10%", y: "20%", duration: 20 },
  { color: "hsl(220 90% 55% / 0.12)", size: 400, x: "70%", y: "60%", duration: 25 },
  { color: "hsl(180 70% 45% / 0.1)", size: 450, x: "50%", y: "10%", duration: 22 },
  { color: "hsl(330 80% 60% / 0.08)", size: 350, x: "80%", y: "80%", duration: 28 },
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
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 80, -60, 40, 0],
          y: [0, -60, 40, -80, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
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
